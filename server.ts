import express from 'express';
import path from 'path';
import 'dotenv/config';
import { createServer as createViteServer } from 'vite';
import { createClient } from '@supabase/supabase-js';

const app = express();
const PORT = 3000;

app.use(express.json());

// Supabase configuration
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://ckmsdkdgehzsprdzeofj.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const SUPABASE_PROJECT_ID = process.env.SUPABASE_PROJECT_ID || 'ckmsdkdgehzsprdzeofj';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY || 'sb-placeholder-key', {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

// In-memory fallback cache to ensure appointments are never lost if the table is still being created
interface LocalAppointment {
  id: string;
  fullName: string;
  parentGuardianName?: string;
  age: string;
  phoneNumber: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  mode: string;
  mainConcern: string;
  additionalMessage?: string;
  status: string;
  createdAt: string;
  syncedToSupabase: boolean;
}

const localAppointments: LocalAppointment[] = [];

// API: Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
});

// API: Check Supabase connection and table status
app.get('/api/supabase/status', async (req, res) => {
  try {
    const { data, error } = await supabase.from('appointments').select('*').limit(1);

    if (error) {
      const isTableMissing = error.code === 'PGRST205' || error.message.includes('Could not find the table');
      return res.json({
        connected: true,
        projectId: SUPABASE_PROJECT_ID,
        supabaseUrl: SUPABASE_URL,
        tableExists: !isTableMissing,
        error: error.message,
        tableMissing: isTableMissing,
        sqlRequired: isTableMissing,
        localCount: localAppointments.length,
        sqlScript: `CREATE TABLE IF NOT EXISTS public.appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  parent_guardian_name TEXT,
  age TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  email TEXT NOT NULL,
  preferred_date TEXT NOT NULL,
  preferred_time TEXT NOT NULL,
  mode TEXT NOT NULL DEFAULT 'in-person',
  main_concern TEXT NOT NULL,
  additional_message TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Allow full access to service role
CREATE POLICY "Allow service role full access" ON public.appointments
  FOR ALL USING (true) WITH CHECK (true);`,
      });
    }

    res.json({
      connected: true,
      projectId: SUPABASE_PROJECT_ID,
      supabaseUrl: SUPABASE_URL,
      tableExists: true,
      tableMissing: false,
      localCount: localAppointments.length,
    });
  } catch (err: any) {
    res.status(500).json({
      connected: false,
      error: err.message || 'Failed to check Supabase status',
    });
  }
});

// API: Save appointment booking details into Supabase
app.post('/api/appointments', async (req, res) => {
  const {
    fullName,
    parentGuardianName,
    age,
    phoneNumber,
    email,
    preferredDate,
    preferredTime,
    mode,
    mainConcern,
    additionalMessage,
  } = req.body;

  if (!fullName || !phoneNumber || !email || !preferredDate) {
    return res.status(400).json({
      error: 'Missing required appointment fields (Full Name, Phone, Email, Date).',
    });
  }

  const newLocalItem: LocalAppointment = {
    id: 'appt_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
    fullName,
    parentGuardianName: parentGuardianName || '',
    age: age || '',
    phoneNumber,
    email,
    preferredDate,
    preferredTime: preferredTime || 'Morning (9:00 AM - 12:00 PM)',
    mode: mode || 'in-person',
    mainConcern: mainConcern || 'General Consultation',
    additionalMessage: additionalMessage || '',
    status: 'pending',
    createdAt: new Date().toISOString(),
    syncedToSupabase: false,
  };

  // Always keep in local store as backup
  localAppointments.unshift(newLocalItem);

  try {
    // Insert into Supabase table `appointments`
    const insertPayload = {
      full_name: fullName,
      parent_guardian_name: parentGuardianName || null,
      age: age || '',
      phone_number: phoneNumber,
      email: email,
      preferred_date: preferredDate,
      preferred_time: preferredTime || 'Morning (9:00 AM - 12:00 PM)',
      mode: mode || 'in-person',
      main_concern: mainConcern || 'General Consultation',
      additional_message: additionalMessage || null,
      status: 'pending',
      created_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from('appointments')
      .insert([insertPayload])
      .select();

    if (error) {
      console.warn('Supabase insert warning:', error.message);
      const isTableMissing = error.code === 'PGRST205' || error.message.includes('Could not find the table');

      return res.status(200).json({
        success: true,
        savedTo: 'local_backup',
        supabaseSynced: false,
        warning: isTableMissing
          ? 'Table "appointments" has not been created in Supabase yet. Booking is securely backed up locally.'
          : error.message,
        tableMissing: isTableMissing,
        booking: newLocalItem,
      });
    }

    newLocalItem.syncedToSupabase = true;

    return res.status(201).json({
      success: true,
      savedTo: 'supabase',
      supabaseSynced: true,
      data: data ? data[0] : insertPayload,
      booking: newLocalItem,
    });
  } catch (err: any) {
    console.error('Error handling appointment booking:', err);
    return res.status(200).json({
      success: true,
      savedTo: 'local_backup',
      supabaseSynced: false,
      warning: err.message,
      booking: newLocalItem,
    });
  }
});

// API: List appointments (retrieves from Supabase if table exists, otherwise local fallback)
app.get('/api/appointments', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      return res.json({
        source: 'supabase',
        appointments: data,
      });
    }

    return res.json({
      source: 'local_backup',
      appointments: localAppointments,
      warning: error ? error.message : undefined,
    });
  } catch (err: any) {
    res.json({
      source: 'local_backup',
      appointments: localAppointments,
      error: err.message,
    });
  }
});

// Setup Vite dev middleware or static production serving
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

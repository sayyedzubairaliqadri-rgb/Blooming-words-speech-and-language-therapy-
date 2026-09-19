import { createClient } from '@supabase/supabase-js';

// Supabase configuration for project ckmsdkdgehzsprdzeofj
export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://ckmsdkdgehzsprdzeofj.supabase.co';
export const SUPABASE_PROJECT_ID = 'ckmsdkdgehzsprdzeofj';
export const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Client initialized for Supabase interactions
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY || 'sb-placeholder-key', {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

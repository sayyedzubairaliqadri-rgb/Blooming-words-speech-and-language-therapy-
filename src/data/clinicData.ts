import { ServiceItem, ConditionItem, ApproachStep, FAQItem, ClinicVerifiedInfo, ScreeningQuestion } from '../types';

export const initialClinicInfo: ClinicVerifiedInfo = {
  therapistName: 'Ashna Jahan',
  professionalTitle: 'Speech & Language Therapist',
  qualifications: '[Add verified qualifications]',
  experience: '[Add verified experience]',
  specialInterests: '[Add verified areas of practice]',
  phone: '[Add Phone Number]',
  whatsapp: '[Add WhatsApp Number]',
  email: '[Add Email Address]',
  clinicAddress: '[Add Clinic Address]',
  workingHours: '[Add Working Hours]',
};

export const clinicServices: ServiceItem[] = [
  {
    id: 'speech-language-delay',
    title: 'Speech & Language Delay',
    shortDescription: 'Support for children experiencing delays in speech or language development.',
    fullDescription: 'Comprehensive developmental support focused on bridging communication gaps in early childhood. Sessions incorporate play-based activities and natural language stimulation techniques to nurture expressive vocabulary and comprehension.',
    audience: ['children'],
    keyFocusAreas: [
      'Early expressive language stimulation',
      'Word combination and sentence building',
      'Understanding everyday questions and directions',
      'Parent-coaching for daily home routines'
    ],
    signsOrIndicators: [
      'Using fewer words than expected for chronological age',
      'Difficulty putting two or three words together by age 2-3',
      'Frustration when trying to communicate basic wants and needs'
    ],
    iconName: 'Baby'
  },
  {
    id: 'speech-sound-pronunciation',
    title: 'Speech Sound & Pronunciation',
    shortDescription: 'Support for unclear speech, articulation and pronunciation difficulties.',
    fullDescription: 'Targeted articulation therapy designed to help children and individuals produce speech sounds accurately, improving overall intelligibility with family, peers, and educators.',
    audience: ['children', 'teens', 'adults'],
    keyFocusAreas: [
      'Sound placement and motor-speech practice',
      'Phonological process remediation',
      'Auditory discrimination of subtle speech sounds',
      'Generalization into spontaneous conversation'
    ],
    signsOrIndicators: [
      'Substituting sounds (e.g. saying "tat" for "cat")',
      'Omitting sounds in words',
      'Speech being difficult for unfamiliar listeners to understand'
    ],
    iconName: 'Mic'
  },
  {
    id: 'stuttering-fluency',
    title: 'Stuttering / Fluency',
    shortDescription: 'Individualized support for children, teens and adults experiencing stuttering or fluency difficulties.',
    fullDescription: 'Compassionate, evidence-informed fluency therapy addressing repetitions, prolongations, and speech blocks, while building confidence and reducing communication apprehension.',
    audience: ['children', 'teens', 'adults'],
    keyFocusAreas: [
      'Fluency shaping and stuttering modification strategies',
      'Desensitization and confidence in speaking situations',
      'Breathing and vocal tract tension reduction',
      'Support for school, workplace, and social communication'
    ],
    signsOrIndicators: [
      'Repeating sounds, syllables, or words ("b-b-ball")',
      'Holding sounds out for longer than usual ("ssssun")',
      'Physical tension or avoidance of certain speaking situations'
    ],
    iconName: 'Sparkles'
  },
  {
    id: 'language-development',
    title: 'Language Development',
    shortDescription: 'Support for understanding language, expressing ideas, vocabulary and sentence development.',
    fullDescription: 'Therapy aimed at strengthening receptive and expressive language skills, narrative formulation, grammatical structures, and vocabulary depth across developmental stages.',
    audience: ['children', 'teens'],
    keyFocusAreas: [
      'Complex sentence structure and grammar',
      'Receptive comprehension and inferencing',
      'Narrative storytelling and sequencing',
      'Academic and functional vocabulary growth'
    ],
    signsOrIndicators: [
      'Difficulty understanding multi-step spoken instructions',
      'Struggling to find the right words when telling a story',
      'Grammatical errors atypical for age group'
    ],
    iconName: 'BookOpen'
  },
  {
    id: 'social-communication',
    title: 'Social Communication',
    shortDescription: 'Support for developing communication skills and meaningful social interaction.',
    fullDescription: 'Supportive guidance in pragmatic language, conversation turn-taking, understanding non-verbal cues, and navigating diverse social environments with self-assurance.',
    audience: ['children', 'teens', 'adults'],
    keyFocusAreas: [
      'Initiating, maintaining, and closing conversations',
      'Perspective-taking and conversational reciprocity',
      'Interpreting tone of voice and social context',
      'Self-advocacy and friendship navigation'
    ],
    signsOrIndicators: [
      'Difficulty engaging in shared conversations',
      'Trouble reading peer social cues or emotional intent',
      'Challenged by conversational boundaries or topic maintenance'
    ],
    iconName: 'Users'
  },
  {
    id: 'autism-communication-support',
    title: 'Autism Communication Support',
    shortDescription: 'Individualized communication support for autistic children and individuals.',
    fullDescription: 'Neurodiversity-affirming communication support that honors individual communication styles, sensory profiles, and interests. Incorporates multimodal communication, visual supports, and Augmentative & Alternative Communication (AAC) where appropriate.',
    audience: ['children', 'teens', 'adults'],
    keyFocusAreas: [
      'Multimodal communication & AAC implementation',
      'Gestalt Language Processing & natural language acquisition support',
      'Regulation-informed communicative engagement',
      'Self-advocacy and authentic connection'
    ],
    signsOrIndicators: [
      'Preference for scripting/echolalia to communicate',
      'Need for visual aids or AAC communication systems',
      'Desire for neurodiversity-affirming interaction support'
    ],
    iconName: 'HeartHandshake'
  },
  {
    id: 'voice-communication',
    title: 'Voice & Communication',
    shortDescription: 'Support for individuals experiencing communication or voice-related difficulties.',
    fullDescription: 'Specialized voice rehabilitation and communication enhancement focusing on vocal hygiene, pitch control, vocal fatigue reduction, and safe voice projection.',
    audience: ['teens', 'adults'],
    keyFocusAreas: [
      'Vocal ergonomics and breath coordination',
      'Resonant voice therapy techniques',
      'Managing vocal strain, hoarseness, and fatigue',
      'Professional voice usage for educators and public speakers'
    ],
    signsOrIndicators: [
      'Persistent hoarseness, raspiness, or pitch breaks',
      'Throat tension or fatigue after brief speaking periods',
      'Difficulty projecting voice in everyday work or social settings'
    ],
    iconName: 'Volume2'
  },
  {
    id: 'adult-speech-language',
    title: 'Adult Speech & Language Therapy',
    shortDescription: 'Personalized support for communication difficulties in adults.',
    fullDescription: 'Goal-oriented therapy for adults managing challenges in articulation, fluency, cognitive-communication, or workplace communication clarity.',
    audience: ['adults'],
    keyFocusAreas: [
      'Speech clarity and pacing strategies',
      'Functional cognitive-communication coaching',
      'Fluency and public speaking confidence',
      'Targeted professional communication refinement'
    ],
    signsOrIndicators: [
      'Feeling misunderstood or frequently asked to repeat oneself',
      'Difficulty organizing thoughts during meetings or conversations',
      'Seeking to improve articulation, clarity, or speaking stamina'
    ],
    iconName: 'UserCheck'
  },
  {
    id: 'neuro-communication',
    title: 'Communication After Neurological Conditions',
    shortDescription: 'Therapy support for communication difficulties following neurological conditions, where clinically appropriate.',
    fullDescription: 'Evidence-based cognitive-linguistic and motor-speech therapy tailored to rebuild communication capabilities and compensatory functional strategies following a neurological event.',
    audience: ['adults'],
    keyFocusAreas: [
      'Aphasia language recovery and word retrieval',
      'Dysarthria motor-speech clarity and breath support',
      'Functional cognitive-communication compensation',
      'Family and caregiver partner training'
    ],
    signsOrIndicators: [
      'Word-finding difficulty (anomia) following stroke or injury',
      'Slurred or weakened speech production',
      'Challenges with comprehension or reading after a neurological event'
    ],
    iconName: 'Activity'
  },
  {
    id: 'hearing-related-communication',
    title: 'Hearing-Related Communication Support',
    shortDescription: 'Communication and language support for individuals with hearing-related communication needs.',
    fullDescription: 'Specialized habilitation and rehabilitation for individuals who use hearing aids, cochlear implants, or assistive listening devices to enhance speech clarity and auditory processing.',
    audience: ['children', 'teens', 'adults'],
    keyFocusAreas: [
      'Auditory discrimination and speech comprehension in noise',
      'Voice modulation and speech sound refinement',
      'Multimodal listening and conversational repair strategies',
      'Self-advocacy in educational and workplace acoustic settings'
    ],
    signsOrIndicators: [
      'Difficulty discriminating speech sounds after receiving hearing aids/implants',
      'Struggles with speech clarity connected to auditory feedback',
      'Fatigue during complex listening situations'
    ],
    iconName: 'Ear'
  }
];

export const conditionsList: ConditionItem[] = [
  {
    name: 'Speech Delay',
    category: 'Speech',
    description: 'Fewer spoken words or sounds than typical for age milestones.',
    recommendedServiceId: 'speech-language-delay'
  },
  {
    name: 'Language Delay',
    category: 'Language',
    description: 'Challenges understanding spoken language or forming phrases.',
    recommendedServiceId: 'speech-language-delay'
  },
  {
    name: 'Speech Sound Difficulties',
    category: 'Speech',
    description: 'Struggling with phonetic clarity or omitting word consonants.',
    recommendedServiceId: 'speech-sound-pronunciation'
  },
  {
    name: 'Pronunciation Difficulties',
    category: 'Speech',
    description: 'Substitutions or distortions that make speech unclear.',
    recommendedServiceId: 'speech-sound-pronunciation'
  },
  {
    name: 'Stuttering / Stammering',
    category: 'Fluency & Voice',
    description: 'Involuntary repetitions, prolongations, or blocks in speech flow.',
    recommendedServiceId: 'stuttering-fluency'
  },
  {
    name: 'Social Communication Difficulties',
    category: 'Developmental',
    description: 'Navigating conversational turn-taking, context, and nonverbal cues.',
    recommendedServiceId: 'social-communication'
  },
  {
    name: 'Autism-Related Communication Needs',
    category: 'Developmental',
    description: 'Neurodiversity-affirming support for natural, multimodal communication.',
    recommendedServiceId: 'autism-communication-support'
  },
  {
    name: 'Developmental Communication Difficulties',
    category: 'Developmental',
    description: 'Comprehensive guidance across multifaceted childhood milestones.',
    recommendedServiceId: 'language-development'
  },
  {
    name: 'Voice & Communication Difficulties',
    category: 'Fluency & Voice',
    description: 'Vocal strain, pitch imbalance, hoarseness, or vocal fatigue.',
    recommendedServiceId: 'voice-communication'
  },
  {
    name: 'Adult Communication Difficulties',
    category: 'Neuro & Adults',
    description: 'Professional speaking concerns, clarity, or cognitive pacing.',
    recommendedServiceId: 'adult-speech-language'
  },
  {
    name: 'Communication Following Neurological Conditions',
    category: 'Neuro & Adults',
    description: 'Rebuilding functional communication post-stroke or neurological event.',
    recommendedServiceId: 'neuro-communication'
  },
  {
    name: 'Hearing-Related Communication Needs',
    category: 'Speech',
    description: 'Auditory training and articulation support with hearing technology.',
    recommendedServiceId: 'hearing-related-communication'
  }
];

export const approachSteps: ApproachStep[] = [
  {
    stepNumber: '01',
    title: 'Initial Consultation',
    summary: 'Understand the client’s concerns, background and communication goals.',
    details: 'A dedicated conversation to discuss personal history, daily communication challenges, strengths, and what success looks like for the client or their family.'
  },
  {
    stepNumber: '02',
    title: 'Assessment',
    summary: 'Conduct an appropriate speech and language assessment based on individual needs.',
    details: 'Using formal and informal clinical assessment tools, observation, and communication samples to map out exact strengths and areas where guidance will have the greatest impact.'
  },
  {
    stepNumber: '03',
    title: 'Personalized Therapy Plan',
    summary: 'Create therapy goals and activities suited to the client.',
    details: 'Drafting structured, realistic, and functional milestones that directly support communication in daily routines, classrooms, workplaces, or family environments.'
  },
  {
    stepNumber: '04',
    title: 'Therapy & Practice',
    summary: 'Conduct engaging sessions with activities that support functional communication.',
    details: 'Participating in targeted, enjoyable, and collaborative therapy sessions paired with practical home strategies to nurture steady progress between appointments.'
  },
  {
    stepNumber: '05',
    title: 'Progress Review',
    summary: 'Regularly review progress and adjust goals when needed.',
    details: 'Periodically measuring growth against baseline targets, celebrating achievements, and evolving the therapy plan as communication skills bloom.'
  }
];

export const whyChooseReasons = [
  {
    title: 'Individualized Therapy',
    description: 'Every therapy plan is crafted around the specific communication profile, interests, and natural communication style of the client.',
    iconName: 'UserCheck'
  },
  {
    title: 'Child-Friendly Sessions',
    description: 'Play-based, motivating, and low-pressure activities that keep young learners actively engaged and happy to participate.',
    iconName: 'Smile'
  },
  {
    title: 'Evidence-Informed Approach',
    description: 'Methods rooted in contemporary speech-language clinical research, customized thoughtfully for practical, real-world utility.',
    iconName: 'FileCheck'
  },
  {
    title: 'Meaningful Goals',
    description: 'Targets that directly improve functional life: speaking with peers, expressing needs, or communicating with confidence in work and school.',
    iconName: 'Target'
  },
  {
    title: 'Progress Monitoring',
    description: 'Consistent, objective reviews so families can clearly see growth, understand next steps, and celebrate every milestone.',
    iconName: 'TrendingUp'
  },
  {
    title: 'Family-Friendly Guidance',
    description: 'Empowering parents and caregivers with practical home communication strategies that easily fit into daily routines.',
    iconName: 'HeartHandshake'
  }
];

export const faqItems: FAQItem[] = [
  {
    question: 'What is speech and language therapy?',
    answer: 'Speech and language therapy is a specialized healthcare service that helps individuals develop, improve, or recover communication skills. This includes speech sounds (articulation), understanding and using language, fluency (such as stuttering), voice quality, and social communication skills.'
  },
  {
    question: 'Who can benefit from speech therapy?',
    answer: 'Individuals of all ages can benefit—from toddlers taking their first communicative steps, to school-aged children developing vocabulary and pronunciation, to teenagers managing fluency, and adults seeking clearer voice, articulation, or communication support after neurological events.'
  },
  {
    question: 'At what age can speech therapy begin?',
    answer: 'Therapy can begin as early as infancy or toddlerhood (around 12–18 months) if early developmental markers or language delays are identified. Early support offers invaluable guidance for families during crucial brain development periods.'
  },
  {
    question: 'How does the first session work?',
    answer: 'The first session is a welcoming, low-pressure consultation and assessment. We discuss your concerns, review developmental background, observe natural communication, and determine whether ongoing therapy is recommended.'
  },
  {
    question: 'How long does a therapy session last?',
    answer: 'Therapy sessions typically last between 45 to 50 minutes, allowing sufficient time for focused interactive practice, review, and a few minutes of collaborative discussion with parents or clients regarding home carryover strategies.'
  },
  {
    question: 'How often are therapy sessions recommended?',
    answer: 'Frequency is personalized based on assessment outcomes. Most clients attend once or twice weekly, with consistency and at-home practice playing a supportive role in overall progress.'
  },
  {
    question: 'Can speech therapy be done online?',
    answer: 'Yes! Online teletherapy sessions are available for clients for whom remote therapy is clinically suitable. Interactive digital materials, games, and parent-coaching make virtual sessions effective and accessible.'
  },
  {
    question: 'Do parents participate in therapy sessions?',
    answer: 'For young children, parent involvement is warmly encouraged and often central to success. Parents learn practical conversational techniques and carryover activities to support progress throughout everyday family routines.'
  },
  {
    question: 'How can I book an appointment?',
    answer: 'You can easily request a consultation using the online booking form on this website, or reach out directly via WhatsApp or email. Our team will contact you to confirm a mutually convenient date and time.'
  },
  {
    question: 'What happens during an assessment?',
    answer: 'An assessment involves age-appropriate activities, formal or informal clinical evaluations, listening to speech samples, and examining comprehension and expressive skills. You will receive clear feedback explaining the findings and recommended next steps.'
  },
  {
    question: 'Can adults receive speech and language therapy?',
    answer: 'Absolutely. Many adults seek speech therapy for fluency/stuttering support, voice fatigue or projection, pronunciation refinement, accent clarification, or communication rehabilitation following stroke or neurological conditions.'
  }
];

export const screeningQuestions: ScreeningQuestion[] = [
  {
    id: 1,
    category: 'child',
    question: 'Does the child or person struggle to be understood by unfamiliar listeners?',
    context: 'Articulation & Speech Clarity'
  },
  {
    id: 2,
    category: 'child',
    question: 'Is there noticeable frustration or hesitation when trying to express thoughts, needs, or stories?',
    context: 'Expressive Communication'
  },
  {
    id: 3,
    category: 'child',
    question: 'Are there frequent repetitions of sounds, syllables, or visible physical tension during speech?',
    context: 'Fluency & Stuttering'
  },
  {
    id: 4,
    category: 'child',
    question: 'Does the individual find it challenging to follow spoken instructions or interpret social conversational cues?',
    context: 'Comprehension & Social Pragmatics'
  }
];

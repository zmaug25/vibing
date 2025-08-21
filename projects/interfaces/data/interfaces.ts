export interface InterfaceConfig {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  category: string;
  defaultTexts: EditableText[];
}

export interface EditableText {
  id: string;
  value: string;
  label: string;
  type: 'input' | 'textarea';
}

export const interfaceConfigs: InterfaceConfig[] = [
  {
    id: 'ai-companion',
    name: 'AI Companion',
    description: 'Zoom-style AI assistant interface with chat conversation and suggested prompts',
    thumbnail: '/api/placeholder/400/300',
    category: 'Chat Interfaces',
    defaultTexts: [
      { id: 'user-message', value: 'Draft a proposal based on the meeting so far.', label: 'User Message', type: 'input' },
      { id: 'ai-title', value: 'Proposal for GTM Partnership', label: 'AI Response Title', type: 'input' },
      { id: 'ai-paragraph-1', value: 'The meeting focused on outlining the requirements for the next version of the GTM Partnership. Key details discussed included hardware upgrades, software enhancements, and design improvements tailored to meet the needs of both businesses.', label: 'First Paragraph', type: 'textarea' },
      { id: 'ai-paragraph-2', value: 'Marketing Requirements: Enhanced positioning in market for more visibility. Software Enhancements: Integration of advanced real-time correction capabilities and expanded compatibility.', label: 'Second Paragraph', type: 'textarea' },
      { id: 'sources-text', value: 'Sources (1)', label: 'Sources Button Text', type: 'input' },
      { id: 'prompt-1', value: 'Catch me up on this meeting', label: 'Suggested Prompt 1', type: 'input' },
      { id: 'prompt-2', value: 'Was my name mentioned?', label: 'Suggested Prompt 2', type: 'input' },
      { id: 'prompt-3', value: 'Are there any action items?', label: 'Suggested Prompt 3', type: 'input' },
      { id: 'prompt-4', value: 'What topics have been discussed?', label: 'Suggested Prompt 4', type: 'input' },
    ]
  },
  {
    id: 'mobile-ai-assistant',
    name: 'Mobile AI Assistant',
    description: 'Mobile phone interface with AI-powered voicemail summaries and task generation',
    thumbnail: '/api/placeholder/400/300',
    category: 'Mobile Interfaces',
    defaultTexts: [
      { id: 'contact-name', value: 'Ethan Mitchell', label: 'Contact Name', type: 'input' },
      { id: 'contact-number', value: '31252', label: 'Contact Number', type: 'input' },
      { id: 'summary-content', value: 'Ethan Mitchell is seeking to expand their institutional employee benefits portfolio and explore new retirement solutions. He requests a callback from an account manager to discuss product options and potential bundled offerings.', label: 'AI Summary', type: 'textarea' },
      { id: 'task-content', value: 'Send Ethan documentation for MetLife Guaranteed Income Builder® II.', label: 'Generated Task', type: 'textarea' },
      { id: 'transcription-content', value: 'Hi, this is Ethan. I\'m reaching out because my business is looking to expand our inventory of consumer packaged goods, and I\'m interested in purchasing additional OSB products to meet growing customer demand. Specifically, I\'d like to learn more about your latest personal care and household cleaning solutions, as well as any volume discounts or promotional offers currently available.', label: 'Voicemail Transcription', type: 'textarea' },
    ]
  },
  {
    id: 'call-routing',
    name: 'Call Routing Modal',
    description: 'Modal interface for redirecting calls to specific locations or external numbers',
    thumbnail: '/api/placeholder/400/300',
    category: 'Call Management',
    defaultTexts: [
      { id: 'selected-location', value: 'Cahaba Sales', label: 'Selected Location', type: 'input' },
    ]
  }
];

export const getInterfaceConfig = (id: string): InterfaceConfig | undefined => {
  return interfaceConfigs.find(config => config.id === id);
};
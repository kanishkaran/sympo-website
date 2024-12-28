export interface Event {
  id: string;
  title: string;
  description: string;
  rules: string[];
  coordinators: Coordinator[];
  type: 'technical' | 'non-technical' | 'workshop';
  slots?: string[]; 
}

export interface Coordinator {
  name: string;
  phone: string;
}
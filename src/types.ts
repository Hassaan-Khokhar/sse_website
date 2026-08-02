export interface Program {
  id: string;
  title: string;
  category: 'Primary' | 'Middle' | 'High School' | 'A-Levels' | 'IB';
  description: string;
  highlights: string[];
  duration: string;
  ageGroup: string;
  icon: string;
  image: string;
}

export interface EventItem {
  id: string;
  day: string;
  month: string;
  tag: string;
  title: string;
  description: string;
  time: string;
  location: string;
  category: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  type: 'calendar' | 'fee' | 'prospectus' | 'code' | 'routes';
  icon: string;
  size: string;
  updated: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  colSpan?: string;
  rowSpan?: string;
  description: string;
}

export interface ApplicationFormData {
  studentFirstName: string;
  studentLastName: string;
  dateOfBirth: string;
  gender: string;
  gradeApplyingFor: string;
  previousSchool: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  city: string;
  address: string;
  programChoice: string;
  notes: string;
}

export interface SearchResult {
  id: string;
  title: string;
  category: string;
  snippet: string;
  action: () => void;
}

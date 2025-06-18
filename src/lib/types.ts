// Type definitions for the application
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  university: string;
  major: string;
  educationLevel: string;
  isCurrentlyStudying: boolean;
  avatar?: string;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  author: string;
  authorId: string;
  university: string;
  major: string;
  year: string;
  rating: number;
  views: number;
  comments: number;
  likes: number;
  downloadCount: number;
  tags: string[];
  skills: string[];
  githubUrl?: string;
  demoUrl?: string;
  videoUrl?: string;
  files: ProjectFile[];
  image?: string;
  featured: boolean;
  uploadDate: Date;
  updatedAt: Date;
}

export interface ProjectFile {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
}

export interface Comment {
  id: string;
  projectId: string;
  authorId: string;
  author: string;
  university: string;
  content: string;
  rating: number;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  read: boolean;
  createdAt: Date;
}

export interface Conversation {
  id: string;
  participants: string[];
  lastMessage: Message;
  updatedAt: Date;
}

export interface Competition {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  prizes: string[];
  rules: string[];
  status: 'upcoming' | 'active' | 'ended';
  participants: string[];
}

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  university: string;
  major: string;
  educationLevel: string;
  isCurrentlyStudying: string;
}

export interface ProjectFormData {
  title: string;
  description: string;
  major: string;
  year: string;
  skills: string[];
  githubUrl: string;
  demoUrl: string;
  videoUrl: string;
}

export interface FilterOptions {
  searchQuery: string;
  university: string;
  major: string;
  year: string;
  sortBy: 'newest' | 'rating' | 'views' | 'comments';
}
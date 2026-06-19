import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      school_info: {
        Row: {
          id: string;
          name: string;
          tagline: string | null;
          description: string | null;
          history: string | null;
          mission: string | null;
          vision: string | null;
          values: Json;
          founded_year: number | null;
          address: string | null;
          phone: string | null;
          email: string | null;
          website: string | null;
          social_links: Json;
          logo_url: string | null;
          hero_image_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          tagline?: string | null;
          description?: string | null;
          history?: string | null;
          mission?: string | null;
          vision?: string | null;
          values?: Json;
          founded_year?: number | null;
          address?: string | null;
          phone?: string | null;
          email?: string | null;
          website?: string | null;
          social_links?: Json;
          logo_url?: string | null;
          hero_image_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      facilities: {
        Row: {
          id: string;
          name: string;
          category: string;
          description: string | null;
          features: Json;
          images: Json;
          floor: number | null;
          capacity: number | null;
          hours: string | null;
          is_accessible: boolean;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          category: string;
          description?: string | null;
          features?: Json;
          images?: Json;
          floor?: number | null;
          capacity?: number | null;
          hours?: string | null;
          is_accessible?: boolean;
          sort_order?: number;
          created_at?: string;
        };
      };
      programs: {
        Row: {
          id: string;
          name: string;
          level: string;
          description: string | null;
          curriculum: Json;
          duration: string | null;
          requirements: Json;
          image_url: string | null;
          features: Json;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          level: string;
          description?: string | null;
          curriculum?: Json;
          duration?: string | null;
          requirements?: Json;
          image_url?: string | null;
          features?: Json;
          sort_order?: number;
          created_at?: string;
        };
      };
      staff: {
        Row: {
          id: string;
          name: string;
          role: string;
          department: string | null;
          bio: string | null;
          qualifications: Json;
          image_url: string | null;
          email: string | null;
          phone_extension: string | null;
          subjects: Json;
          years_at_school: number | null;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          role: string;
          department?: string | null;
          bio?: string | null;
          qualifications?: Json;
          image_url?: string | null;
          email?: string | null;
          phone_extension?: string | null;
          subjects?: Json;
          years_at_school?: number | null;
          sort_order?: number;
          created_at?: string;
        };
      };
      gallery: {
        Row: {
          id: string;
          title: string;
          category: string;
          description: string | null;
          image_url: string;
          thumbnail_url: string | null;
          event_date: string | null;
          is_featured: boolean;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          category: string;
          description?: string | null;
          image_url: string;
          thumbnail_url?: string | null;
          event_date?: string | null;
          is_featured?: boolean;
          sort_order?: number;
          created_at?: string;
        };
      };
      events: {
        Row: {
          id: string;
          title: string;
          type: string;
          summary: string | null;
          content: string | null;
          image_url: string | null;
          event_date: string | null;
          event_time: string | null;
          location: string | null;
          is_featured: boolean;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          type: string;
          summary?: string | null;
          content?: string | null;
          image_url?: string | null;
          event_date?: string | null;
          event_time?: string | null;
          location?: string | null;
          is_featured?: boolean;
          sort_order?: number;
          created_at?: string;
        };
      };
      testimonials: {
        Row: {
          id: string;
          name: string;
          role: string;
          content: string;
          image_url: string | null;
          rating: number;
          graduation_year: number | null;
          current_position: string | null;
          is_featured: boolean;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          role: string;
          content: string;
          image_url?: string | null;
          rating?: number;
          graduation_year?: number | null;
          current_position?: string | null;
          is_featured?: boolean;
          sort_order?: number;
          created_at?: string;
        };
      };
      contact_messages: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string | null;
          subject: string | null;
          message: string;
          status: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          phone?: string | null;
          subject?: string | null;
          message: string;
          status?: string;
          created_at?: string;
        };
      };
      statistics: {
        Row: {
          id: string;
          label: string;
          value: string;
          icon: string | null;
          description: string | null;
          sort_order: number;
        };
        Insert: {
          id?: string;
          label: string;
          value: string;
          icon?: string | null;
          description?: string | null;
          sort_order?: number;
        };
      };
      clubs: {
        Row: {
          id: string;
          name: string;
          category: string;
          description: string | null;
          advisor: string | null;
          meeting_schedule: string | null;
          image_url: string | null;
          features: Json;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          category: string;
          description?: string | null;
          advisor?: string | null;
          meeting_schedule?: string | null;
          image_url?: string | null;
          features?: Json;
          sort_order?: number;
          created_at?: string;
        };
      };
    };
  };
}

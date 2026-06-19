import type { Database } from '../lib/supabase';

export type SchoolInfo = Database['public']['Tables']['school_info']['Row'];
export type Facility = Database['public']['Tables']['facilities']['Row'];
export type Program = Database['public']['Tables']['programs']['Row'];
export type Staff = Database['public']['Tables']['staff']['Row'];
export type GalleryImage = Database['public']['Tables']['gallery']['Row'];
export type Event = Database['public']['Tables']['events']['Row'];
export type Testimonial = Database['public']['Tables']['testimonials']['Row'];
export type ContactMessage = Database['public']['Tables']['contact_messages']['Insert'];
export type Statistic = Database['public']['Tables']['statistics']['Row'];
export type Club = Database['public']['Tables']['clubs']['Row'];

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface SEOProps {
  title: string;
  description?: string;
  image?: string;
}

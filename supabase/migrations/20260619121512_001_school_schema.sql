-- School information
CREATE TABLE school_info (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  tagline text,
  description text,
  history text,
  mission text,
  vision text,
  values jsonb DEFAULT '[]',
  founded_year integer,
  address text,
  phone text,
  email text,
  website text,
  social_links jsonb DEFAULT '{}',
  logo_url text,
  hero_image_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Facilities for virtual tour
CREATE TABLE facilities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  description text,
  features jsonb DEFAULT '[]',
  images jsonb DEFAULT '[]',
  floor integer,
  capacity integer,
  hours text,
  is_accessible boolean DEFAULT true,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Academic programs
CREATE TABLE programs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  level text NOT NULL,
  description text,
  curriculum jsonb DEFAULT '[]',
  duration text,
  requirements jsonb DEFAULT '[]',
  image_url text,
  features jsonb DEFAULT '[]',
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Staff members
CREATE TABLE staff (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  department text,
  bio text,
  qualifications jsonb DEFAULT '[]',
  image_url text,
  email text,
  phone_extension text,
  subjects jsonb DEFAULT '[]',
  years_at_school integer,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Gallery images
CREATE TABLE gallery (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text NOT NULL,
  description text,
  image_url text NOT NULL,
  thumbnail_url text,
  event_date date,
  is_featured boolean DEFAULT false,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Events/News
CREATE TABLE events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  type text NOT NULL DEFAULT 'event',
  summary text,
  content text,
  image_url text,
  event_date date,
  event_time text,
  location text,
  is_featured boolean DEFAULT false,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Testimonials
CREATE TABLE testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  content text NOT NULL,
  image_url text,
  rating integer DEFAULT 5,
  graduation_year integer,
  current_position text,
  is_featured boolean DEFAULT false,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Contact messages
CREATE TABLE contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Statistics for homepage
CREATE TABLE statistics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  label text NOT NULL,
  value text NOT NULL,
  icon text,
  description text,
  sort_order integer DEFAULT 0
);

-- Clubs and activities
CREATE TABLE clubs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  description text,
  advisor text,
  meeting_schedule text,
  image_url text,
  features jsonb DEFAULT '[]',
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE school_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE facilities ENABLE ROW LEVEL SECURITY;
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE statistics ENABLE ROW LEVEL SECURITY;
ALTER TABLE clubs ENABLE ROW LEVEL SECURITY;

-- Public read policies (anyone can read)
CREATE POLICY "public_read_school_info" ON school_info FOR SELECT USING (true);
CREATE POLICY "public_read_facilities" ON facilities FOR SELECT USING (true);
CREATE POLICY "public_read_programs" ON programs FOR SELECT USING (true);
CREATE POLICY "public_read_staff" ON staff FOR SELECT USING (true);
CREATE POLICY "public_read_gallery" ON gallery FOR SELECT USING (true);
CREATE POLICY "public_read_events" ON events FOR SELECT USING (true);
CREATE POLICY "public_read_testimonials" ON testimonials FOR SELECT USING (true);
CREATE POLICY "public_read_statistics" ON statistics FOR SELECT USING (true);
CREATE POLICY "public_read_clubs" ON clubs FOR SELECT USING (true);

-- Contact messages can be inserted by anyone
CREATE POLICY "public_insert_contact" ON contact_messages FOR INSERT WITH CHECK (true);
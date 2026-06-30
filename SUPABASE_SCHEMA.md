# Supabase schema for portfolio

Create the following tables in Supabase SQL Editor.

```sql
create table profiles (
  id uuid primary key default gen_random_uuid(),
  full_name text,
  headline text,
  email text,
  bio text,
  location text,
  github_url text,
  linkedin_url text,
  cv_url text,
  profile_image_url text,
  created_at timestamp with time zone default now()
);

create table skills (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text,
  level text,
  created_at timestamp with time zone default now()
);

create table projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  category text,
  image_url text,
  live_url text,
  repo_url text,
  technologies text[],
  created_at timestamp with time zone default now()
);

create table experiences (
  id uuid primary key default gen_random_uuid(),
  role text not null,
  company text not null,
  start_date date,
  end_date date,
  description text,
  location text,
  current boolean default false,
  created_at timestamp with time zone default now()
);

create table testimonials (
  id uuid primary key default gen_random_uuid(),
  name text,
  role text,
  quote text,
  avatar_url text,
  created_at timestamp with time zone default now()
);

create table contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text,
  subject text,
  message text,
  created_at timestamp with time zone default now()
);

insert into profiles (full_name, headline, email, bio, location, github_url, linkedin_url, cv_url, profile_image_url)
values (
  'Nama Anda',
  'Frontend Developer & UI/UX Enthusiast',
  'hello@yourdomain.com',
  'Saya adalah developer yang fokus membangun aplikasi web modern, cepat, dan nyaman untuk digunakan.',
  'Indonesia',
  'https://github.com',
  'https://linkedin.com',
  '#',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80'
);

create policy "Enable read access for all users" on profiles for select using (true);
create policy "Enable insert for authenticated users only" on profiles for insert with check (auth.role() = 'authenticated');
create policy "Enable update for authenticated users only" on profiles for update using (auth.role() = 'authenticated');
create policy "Enable delete for authenticated users only" on profiles for delete using (auth.role() = 'authenticated');

create policy "Enable read access for all users" on skills for select using (true);
create policy "Enable all for authenticated users" on skills for all using (auth.role() = 'authenticated');
create policy "Enable read access for all users" on projects for select using (true);
create policy "Enable all for authenticated users" on projects for all using (auth.role() = 'authenticated');
create policy "Enable read access for all users" on experiences for select using (true);
create policy "Enable all for authenticated users" on experiences for all using (auth.role() = 'authenticated');
create policy "Enable read access for all users" on testimonials for select using (true);
create policy "Enable all for authenticated users" on testimonials for all using (auth.role() = 'authenticated');
create policy "Enable insert for all users" on contact_messages for insert with check (true);
```

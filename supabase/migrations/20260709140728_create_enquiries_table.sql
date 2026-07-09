/*
# Create enquiries table for contact form submissions

1. Purpose
   Stores contact enquiries submitted by visitors of the Capital Connect website.
   This is a marketing site with no authentication, so enquiries are public/shared
   data that the anon-key frontend can insert.

2. New Tables
   - `enquiries`
     - `id` (uuid, primary key, auto-generated)
     - `name` (text, not null) — full name of the enquirer
     - `phone` (text, not null) — contact phone number
     - `email` (text, not null) — contact email
     - `requirement` (text, not null) — selected solution category
     - `message` (text, nullable) — optional free-form message
     - `created_at` (timestamptz, defaults to now())

3. Security
   - Enable RLS on `enquiries`.
   - INSERT: allow `anon, authenticated` to create new enquiries (public contact form).
   - SELECT/UPDATE/DELETE: restricted to `authenticated` only — site admins can
     review and manage submissions; anonymous visitors cannot read other people's
     enquiries.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  requirement text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries" ON enquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_enquiries" ON enquiries;
CREATE POLICY "auth_select_enquiries" ON enquiries FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_enquiries" ON enquiries;
CREATE POLICY "auth_update_enquiries" ON enquiries FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_enquiries" ON enquiries;
CREATE POLICY "auth_delete_enquiries" ON enquiries FOR DELETE
  TO authenticated USING (true);

/*
# Create quote_requests table (single-tenant, no auth)

1. New Tables
- `quote_requests`
- `id` (uuid, primary key)
- `name` (text, not null) — requester's full name
- `organisation` (text, nullable) — organisation/bank/showroom name
- `phone` (text, not null) — contact phone number
- `email` (text, nullable) — optional email
- `items_needed` (text, not null) — free text list of items requested
- `preferred_date` (date, nullable) — preferred delivery date
- `status` (text, default 'new') — quote status: new, contacted, quoted, closed
- `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `quote_requests`.
- Allow anon + authenticated INSERT so the public quote form can submit without sign-in.
- Allow anon + authenticated SELECT so the site can display submissions if needed (single-tenant, intentionally shared).
- No UPDATE or DELETE policies needed for the public form.
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  organisation text,
  phone text NOT NULL,
  email text,
  items_needed text NOT NULL,
  preferred_date date,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_quote_requests" ON quote_requests;
CREATE POLICY "anon_insert_quote_requests"
ON quote_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_quote_requests" ON quote_requests;
CREATE POLICY "anon_select_quote_requests"
ON quote_requests FOR SELECT
TO anon, authenticated
USING (true);

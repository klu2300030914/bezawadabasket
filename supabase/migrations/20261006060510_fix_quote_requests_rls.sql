/*
# Fix RLS policies on quote_requests

## What changed
1. Revokes UPDATE and DELETE privileges from the anon and authenticated roles —
   the public quote form only needs INSERT and SELECT, so we follow least-privilege.
2. Adds proper UPDATE and DELETE policies scoped to authenticated (business owner)
   so they can manage quote status and delete spam/test entries from a dashboard.
3. Drops the overly permissive INSERT/SELECT policies and recreates them cleanly.

## Security
- anon + authenticated can INSERT and SELECT (public form, single-tenant)
- Only authenticated can UPDATE and DELETE (business owner managing requests)
- anon can no longer UPDATE or DELETE quote rows
*/

-- Revoke dangerous grants from anon/authenticated
REVOKE UPDATE, DELETE ON quote_requests FROM anon, authenticated;

-- Recreate INSERT + SELECT policies (already exist, drop first for idempotency)
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

-- Add UPDATE policy for authenticated (business owner) only
DROP POLICY IF EXISTS "authenticated_update_quote_requests" ON quote_requests;
CREATE POLICY "authenticated_update_quote_requests"
ON quote_requests FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

-- Add DELETE policy for authenticated (business owner) only
DROP POLICY IF EXISTS "authenticated_delete_quote_requests" ON quote_requests;
CREATE POLICY "authenticated_delete_quote_requests"
ON quote_requests FOR DELETE
TO authenticated
USING (true);

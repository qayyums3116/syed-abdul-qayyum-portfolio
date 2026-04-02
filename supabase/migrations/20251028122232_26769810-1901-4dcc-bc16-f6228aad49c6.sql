-- Drop the existing restrictive SELECT policy
DROP POLICY IF EXISTS "Authenticated users can view messages" ON public.contact_messages;

-- Allow anyone to view messages (you can restrict this later with authentication)
CREATE POLICY "Anyone can view contact messages"
ON public.contact_messages
FOR SELECT
USING (true);
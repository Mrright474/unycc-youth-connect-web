
-- Enable RLS on all tables
ALTER TABLE public.members ENABLE row_level_security;
ALTER TABLE public.clubs ENABLE row_level_security;
ALTER TABLE public.contact_submissions ENABLE row_level_security;
ALTER TABLE public.newsletter_subscriptions ENABLE row_level_security;

-- Create admin role check function
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
SECURITY definer
AS $$
  SELECT EXISTS (
    SELECT 1 FROM auth.users
    WHERE auth.users.id = auth.uid()
    AND auth.users.raw_app_meta_data->>'role' = 'admin'
  );
$$;

-- Members table policies
CREATE POLICY "Allow public insert for member registration" ON public.members
FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow admin to view all members" ON public.members
FOR SELECT USING (public.is_admin());

CREATE POLICY "Allow admin to update member status" ON public.members
FOR UPDATE USING (public.is_admin());

CREATE POLICY "Allow admin to delete members" ON public.members
FOR DELETE USING (public.is_admin());

-- Clubs table policies
CREATE POLICY "Allow public insert for club applications" ON public.clubs
FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow admin to view all clubs" ON public.clubs
FOR SELECT USING (public.is_admin());

CREATE POLICY "Allow admin to update club status" ON public.clubs
FOR UPDATE USING (public.is_admin());

CREATE POLICY "Allow admin to delete clubs" ON public.clubs
FOR DELETE USING (public.is_admin());

-- Contact submissions policies
CREATE POLICY "Allow public insert for contact forms" ON public.contact_submissions
FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow admin to view contact submissions" ON public.contact_submissions
FOR SELECT USING (public.is_admin());

CREATE POLICY "Allow admin to delete contact submissions" ON public.contact_submissions
FOR DELETE USING (public.is_admin());

-- Newsletter subscriptions policies
CREATE POLICY "Allow public insert for newsletter signup" ON public.newsletter_subscriptions
FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow admin to view newsletter subscriptions" ON public.newsletter_subscriptions
FOR SELECT USING (public.is_admin());

CREATE POLICY "Allow admin to delete newsletter subscriptions" ON public.newsletter_subscriptions
FOR DELETE USING (public.is_admin());

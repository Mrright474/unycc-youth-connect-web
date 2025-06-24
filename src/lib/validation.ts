
import { z } from 'zod';

export const memberFormSchema = z.object({
  first_name: z.string().min(1, 'First name is required').max(50, 'First name too long'),
  last_name: z.string().min(1, 'Last name is required').max(50, 'Last name too long'),
  email: z.string().email('Invalid email address'),
  country: z.string().min(1, 'Country is required'),
  age_group: z.enum(['under18', '18-24', '25-34', '35+'], {
    errorMap: () => ({ message: 'Please select an age group' })
  }),
  interest: z.string().min(1, 'Please select an area of interest'),
  heard_from: z.string().optional(),
});

export const clubFormSchema = z.object({
  institution_name: z.string().min(1, 'Institution name is required').max(100, 'Institution name too long'),
  institution_type: z.enum(['highschool', 'university', 'community', 'other'], {
    errorMap: () => ({ message: 'Please select an institution type' })
  }),
  contact_name: z.string().min(1, 'Contact name is required').max(50, 'Contact name too long'),
  contact_email: z.string().email('Invalid email address'),
  country: z.string().min(1, 'Country is required'),
  city: z.string().min(1, 'City is required').max(50, 'City name too long'),
  members_estimate: z.number().min(1, 'Must have at least 1 member').max(1000, 'Number too large'),
  reason: z.string().min(10, 'Please provide more details').max(500, 'Reason too long'),
});

export const partnerFormSchema = z.object({
  organizationName: z.string().min(1, 'Organization name is required').max(100, 'Organization name too long'),
  organizationType: z.enum(['ngo', 'education', 'government', 'business', 'other'], {
    errorMap: () => ({ message: 'Please select an organization type' })
  }),
  contactName: z.string().min(1, 'Contact name is required').max(50, 'Contact name too long'),
  contactEmail: z.string().email('Invalid email address'),
  website: z.string().url('Invalid website URL').optional().or(z.literal('')),
  country: z.string().min(1, 'Country is required'),
  partnershipArea: z.enum(['funding', 'technical', 'mentorship', 'collaboration', 'other'], {
    errorMap: () => ({ message: 'Please select a partnership area' })
  }),
  message: z.string().min(10, 'Please provide more details').max(500, 'Message too long'),
});

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(50, 'Name too long'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required').max(100, 'Subject too long'),
  message: z.string().min(10, 'Please provide more details').max(1000, 'Message too long'),
});

export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
});

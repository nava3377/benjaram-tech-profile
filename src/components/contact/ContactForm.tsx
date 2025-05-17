
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { ContactFormField } from './ContactFormField';
import { useContactForm } from '@/hooks/useContactForm';

const ContactForm = () => {
  const {
    formData,
    isSubmitting,
    formError,
    handleChange,
    handleSubmit
  } = useContactForm();

  return (
    <Card className="lg:col-span-2 shadow-md">
      <CardContent className="p-6 md:p-8">
        <h3 className="text-2xl font-bold text-portfolio-darkBlue mb-6">Send Me a Message</h3>
        
        {/* Display form error if present */}
        {formError && (
          <Alert variant="destructive" className="mb-6">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{formError}</AlertDescription>
          </Alert>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactFormField
              label="Your Name"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            <ContactFormField
              label="Your Email"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
          
          <ContactFormField
            label="Subject"
            id="subject"
            name="subject"
            placeholder="Enter subject"
            value={formData.subject}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
          
          <ContactFormField
            label="Message"
            id="message"
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            isTextarea={true}
          />
          
          <Button 
            type="submit"
            className="bg-portfolio-purple hover:bg-portfolio-purple/90 text-white px-8 py-6 rounded-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;

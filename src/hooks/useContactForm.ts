
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { initEmailJS, sendEmail } from '@/utils/emailService';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const useContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Initialize EmailJS on mount
  useEffect(() => {
    initEmailJS();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user makes changes
    if (formError) {
      setFormError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormError('Please fill in all required fields');
      setIsSubmitting(false);
      toast({
        title: "Form Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    try {
      const response = await sendEmail(formData);
      
      console.log('Email sent successfully:', response);
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      
      // More detailed error handling
      let errorMessage = "There was an error sending your message.";
      
      if (error instanceof Error) {
        errorMessage += " Error: " + error.message;
        
        if (error.message.includes('service_id')) {
          errorMessage = "EmailJS service not found. Please verify the service ID.";
        } else if (error.message.includes('template_id')) {
          errorMessage = "Email template not found. Please verify the template ID.";
        } else if (error.message.includes('user_id')) {
          errorMessage = "EmailJS user ID is invalid. Please verify your public key.";
        }
      }
      
      // Set the error message to display in the form
      setFormError(errorMessage);
      
      toast({
        title: "Failed to send message",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    formError,
    handleChange,
    handleSubmit
  };
};

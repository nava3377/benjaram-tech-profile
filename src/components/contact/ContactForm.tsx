
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Initialize EmailJS once
  // This is optional but helps ensure the service is ready
  const initEmailJS = () => {
    try {
      emailjs.init('Cwcvj2JPSeH1AjfVa');
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error);
    }
  };

  // Call initialization on component mount
  useState(() => {
    initEmailJS();
  });

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
    
    const serviceId = 'service_kesm0vn';
    const templateId = 'template_n7i08o8';
    const publicKey = 'Cwcvj2JPSeH1AjfVa';
    
    try {
      console.log('Attempting to send email with EmailJS...');
      console.log('Using Service ID:', serviceId);
      console.log('Using Template ID:', templateId);
      
      // EmailJS configuration with your provided credentials
      const response = await emailjs.send(
        serviceId, // Your Service ID
        templateId, // Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey // Your Public Key
      );
      
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
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your name"
                className="border-gray-300 focus:border-portfolio-purple"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Your Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="border-gray-300 focus:border-portfolio-purple"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
            <Input
              id="subject"
              name="subject"
              placeholder="Enter subject"
              className="border-gray-300 focus:border-portfolio-purple"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message"
              className="min-h-[150px] border-gray-300 focus:border-portfolio-purple"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
          
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

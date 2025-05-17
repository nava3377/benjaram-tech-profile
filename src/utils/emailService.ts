
import emailjs from '@emailjs/browser';

// EmailJS configuration with your verified credentials
const SERVICE_ID = 'service_8lg2q1j';
const TEMPLATE_ID = 'template_n7i08o8';
const PUBLIC_KEY = 'Cwcvj2JPSeH1AjfVa';

/**
 * Initialize EmailJS with public key
 */
export const initEmailJS = () => {
  try {
    emailjs.init(PUBLIC_KEY);
    console.log('EmailJS initialized successfully with PUBLIC_KEY:', PUBLIC_KEY);
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error);
  }
};

/**
 * Send email through EmailJS
 */
export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  console.log('Attempting to send email with EmailJS...');
  console.log('Using Service ID:', SERVICE_ID);
  console.log('Using Template ID:', TEMPLATE_ID);
  
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Website Owner', // Add recipient name for template
      },
      PUBLIC_KEY
    );
    
    console.log('Email sent successfully, full response:', response);
    return response;
  } catch (error) {
    console.error('EmailJS error details:', error);
    throw error;
  }
};

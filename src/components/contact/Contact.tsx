
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-portfolio-purple/5 z-0"></div>
      <div className="absolute top-20 right-10 w-8 h-8 bg-portfolio-orange rounded-full opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-10 h-10 bg-portfolio-purple rounded-full opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-darkBlue mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-portfolio-purple mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or just want to connect? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;


import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'Select a service'
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          service: 'Select a service'
        });
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 bg-logistics-navy text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-white transform -skew-y-3"></div>
      <div className="absolute bottom-0 right-0 opacity-10">
        <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FF6B35" d="M40,40 L160,40 L160,160 L40,160 Z" />
          <path fill="#FFF" d="M30,30 L150,30 L150,150 L30,150 Z" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 pt-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="opacity-0 animate-fade-in-left">
              <div className="lg:max-w-lg">
                <div className="inline-block bg-logistics-orange/20 text-logistics-orange text-sm font-medium px-4 py-1 rounded-full mb-4">
                  Get In Touch
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Optimize Your Logistics?
                </h2>
                <p className="text-lg text-white/80 mb-8">
                  Contact our team of experts to discuss how our comprehensive logistics solutions can transform your supply chain.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-logistics-orange/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-logistics-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Phone</h3>
                      <p className="text-white/80">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-logistics-orange/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-logistics-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Email</h3>
                      <p className="text-white/80">info@logisphere.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-logistics-orange/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-logistics-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Address</h3>
                      <p className="text-white/80">123 Logistics Avenue, Suite 500<br />San Francisco, CA 94105</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    {['facebook', 'twitter', 'linkedin', 'instagram'].map((platform) => (
                      <a 
                        key={platform}
                        href="#" 
                        className="w-10 h-10 bg-logistics-orange/20 rounded-full flex items-center justify-center text-logistics-orange hover:bg-logistics-orange hover:text-white transition-colors duration-300"
                      >
                        <span className="sr-only">{platform}</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:mt-8 opacity-0 animate-fade-in-right">
              <div className="bg-white rounded-xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-logistics-navy mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-logistics-navy focus:border-transparent transition-all duration-300"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-logistics-navy focus:border-transparent transition-all duration-300"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-logistics-navy focus:border-transparent transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-logistics-navy focus:border-transparent transition-all duration-300"
                        placeholder="YourCompany Inc."
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-logistics-navy focus:border-transparent transition-all duration-300"
                      required
                    >
                      <option value="Select a service" disabled>Select a service</option>
                      <option value="Freight Transportation">Freight Transportation</option>
                      <option value="Supply Chain Management">Supply Chain Management</option>
                      <option value="Warehousing Solutions">Warehousing Solutions</option>
                      <option value="International Shipping">International Shipping</option>
                      <option value="Security & Compliance">Security & Compliance</option>
                      <option value="Digital Solutions">Digital Solutions</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-logistics-navy focus:border-transparent transition-all duration-300"
                      placeholder="Tell us about your logistics needs..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus === 'loading' || formStatus === 'success'}
                    className={cn(
                      "w-full py-4 rounded-md font-medium text-white transition-all duration-300 transform hover:-translate-y-1",
                      formStatus === 'idle' && "bg-logistics-orange hover:bg-opacity-90",
                      formStatus === 'loading' && "bg-logistics-orange/70",
                      formStatus === 'success' && "bg-green-500",
                      formStatus === 'error' && "bg-red-500"
                    )}
                  >
                    {formStatus === 'idle' && 'Send Message'}
                    {formStatus === 'loading' && 'Sending...'}
                    {formStatus === 'success' && 'Message Sent!'}
                    {formStatus === 'error' && 'Error Sending Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

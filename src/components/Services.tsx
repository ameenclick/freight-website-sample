
import React from 'react';
import { cn } from '@/lib/utils';

const serviceItems = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    title: 'Freight Transportation',
    description: 'Comprehensive freight solutions by road, rail, air, and sea to meet your specific logistics needs.',
    link: '#'
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Supply Chain Management',
    description: 'End-to-end visibility and optimization of your entire supply chain for improved efficiency.',
    link: '#'
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: 'Warehousing Solutions',
    description: 'Strategic warehousing and distribution services to minimize costs and improve delivery times.',
    link: '#'
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: 'International Shipping',
    description: 'Expert handling of customs, regulations, and international logistics for seamless global trade.',
    link: '#'
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Security & Compliance',
    description: 'Maintaining the highest standards of security and regulatory compliance throughout your logistics chain.',
    link: '#'
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: 'Digital Solutions',
    description: 'Cloud-based tracking and management systems for real-time visibility and control of your shipments.',
    link: '#'
  }
];

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link, index }) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2",
        "opacity-0 animate-fade-in"
      )}
      style={{ animationDelay: `${index * 100 + 300}ms` }}
    >
      <div className="w-16 h-16 bg-logistics-navy/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-logistics-orange/20 transition-colors duration-300">
        <div className="text-logistics-navy group-hover:text-logistics-orange transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-logistics-navy mb-3 group-hover:text-logistics-orange transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a 
        href={link} 
        className="inline-flex items-center text-logistics-navy font-medium group-hover:text-logistics-orange transition-colors duration-300"
      >
        Learn more
        <svg 
          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-logistics-gray relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white transform -skew-y-2"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-white transform skew-y-2"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-logistics-orange/10 text-logistics-orange text-sm font-medium px-4 py-1 rounded-full mb-4 opacity-0 animate-fade-in">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-logistics-navy mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
            Comprehensive Logistics Solutions
          </h2>
          <p className="text-lg text-gray-600 opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
            We offer a full spectrum of services to optimize your supply chain, from transportation and warehousing to digital solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center opacity-0 animate-fade-in" style={{ animationDelay: '1000ms' }}>
          <button className="bg-logistics-orange text-white font-medium px-8 py-4 rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

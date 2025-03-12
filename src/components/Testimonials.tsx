
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    content: "LogiSphere transformed our supply chain with their innovative solutions. Their team's commitment to excellence and attention to detail is unmatched in the industry.",
    author: "Sarah Johnson",
    position: "Supply Chain Director",
    company: "TechCorp Industries",
    rating: 5
  },
  {
    id: 2,
    content: "We've worked with several logistics providers, but none have delivered the level of service and reliability that LogiSphere consistently provides. They're true partners in our success.",
    author: "Michael Chen",
    position: "Operations Manager",
    company: "Global Retail Solutions",
    rating: 5
  },
  {
    id: 3,
    content: "Their international shipping expertise saved us countless hours and significant costs. LogiSphere handles the complexities of global logistics so we can focus on growing our business.",
    author: "Elena Rodriguez",
    position: "CEO",
    company: "Artisan Exports Co.",
    rating: 5
  },
  {
    id: 4,
    content: "The digital tracking platform LogiSphere implemented has given us unprecedented visibility into our supply chain. Real-time insights have improved our decision-making process.",
    author: "David Okonkwo",
    position: "Logistics Director",
    company: "PharmaHealth Inc.",
    rating: 4
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const goToTestimonial = (index: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const nextTestimonial = () => {
    const newIndex = (activeIndex + 1) % testimonials.length;
    goToTestimonial(newIndex);
  };

  const prevTestimonial = () => {
    const newIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
    goToTestimonial(newIndex);
  };

  useEffect(() => {
    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        nextTestimonial();
      }, 6000);
    };

    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };

    startAutoplay();

    if (testimonialRef.current) {
      testimonialRef.current.addEventListener('mouseenter', stopAutoplay);
      testimonialRef.current.addEventListener('mouseleave', startAutoplay);
    }

    return () => {
      stopAutoplay();
      if (testimonialRef.current) {
        testimonialRef.current.removeEventListener('mouseenter', stopAutoplay);
        testimonialRef.current.removeEventListener('mouseleave', startAutoplay);
      }
    };
  }, [activeIndex]);

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-logistics-gray rounded-full opacity-20"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-logistics-gray rounded-full opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-logistics-orange/10 text-logistics-orange text-sm font-medium px-4 py-1 rounded-full mb-4 opacity-0 animate-fade-in">
            Client Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-logistics-navy mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Discover how our logistics solutions have transformed businesses across industries.
          </p>
        </div>
        
        <div 
          ref={testimonialRef}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden opacity-0 animate-fade-in" 
          style={{ animationDelay: '300ms' }}
        >
          {/* Background Quote Mark */}
          <div className="absolute -right-10 -top-10 text-logistics-gray/10 rotate-12">
            <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          
          <div className="relative z-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "transition-opacity duration-500 absolute inset-0",
                  index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                )}
              >
                <div className="flex flex-col h-full justify-between">
                  <p className="text-xl md:text-2xl text-gray-700 italic mb-8">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="mb-4 md:mb-0">
                      <h4 className="text-lg font-semibold text-logistics-navy">{testimonial.author}</h4>
                      <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
                    </div>
                    
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-6 h-6 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Persistent placeholder to maintain height */}
            <div className="invisible">
              <p className="text-xl md:text-2xl text-gray-700 italic mb-8">
                "{testimonials[0].content}"
              </p>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-4 md:mb-0">
                  <h4 className="text-lg font-semibold text-logistics-navy">{testimonials[0].author}</h4>
                  <p className="text-gray-600">{testimonials[0].position}, {testimonials[0].company}</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-logistics-navy/10 text-logistics-navy hover:bg-logistics-navy hover:text-white transition-colors duration-300"
              disabled={isAnimating}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === activeIndex ? 'bg-logistics-orange' : 'bg-logistics-navy/30 hover:bg-logistics-navy/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-logistics-navy/10 text-logistics-navy hover:bg-logistics-navy hover:text-white transition-colors duration-300"
              disabled={isAnimating}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

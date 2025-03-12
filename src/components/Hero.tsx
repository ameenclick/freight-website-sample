
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      const parallaxElements = heroRef.current.querySelectorAll('.parallax');
      parallaxElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const speed = parseFloat(htmlEl.getAttribute('data-speed') || '0');
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;
        
        htmlEl.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center bg-logistics-white pt-24" ref={heroRef}>
      {/* Background Pattern Elements */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-logistics-gray rounded-full opacity-50 blur-3xl parallax" data-speed="-15"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-logistics-gray rounded-full opacity-50 blur-3xl parallax" data-speed="-20"></div>
      <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-logistics-orange rounded-full parallax" data-speed="40"></div>
      <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-logistics-orange rounded-full parallax" data-speed="30"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 md:pr-8">
            <div className="inline-block bg-logistics-orange/10 text-logistics-orange text-sm font-medium px-4 py-1 rounded-full mb-6 animate-fade-in">
              Modern Logistics Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-logistics-navy leading-tight mb-6 animate-fade-in animate-delay-100">
              Global Logistics <br />
              <span className="text-logistics-orange">Made Simple</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg animate-fade-in animate-delay-200">
              We optimize your supply chain with cutting-edge technology and personalized service for seamless global logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-300">
              <button className="bg-logistics-navy text-white font-medium px-8 py-4 rounded-md hover:bg-logistics-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Explore Solutions
              </button>
              <button className="border-2 border-logistics-navy text-logistics-navy font-medium px-8 py-4 rounded-md hover:bg-logistics-navy hover:text-white transition-all duration-300">
                Contact Us
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-6 animate-fade-in animate-delay-400">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                    <div className={`w-full h-full bg-logistics-gray flex items-center justify-center text-logistics-navy font-bold`}>
                      {num}
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-logistics-navy font-medium">Trusted by 1000+ businesses</p>
                <div className="flex items-center mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  <span className="ml-1 text-sm text-gray-500">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-full">
              <div className="bg-logistics-navy/10 backdrop-blur-sm rounded-2xl p-8 w-full aspect-square max-w-lg mx-auto overflow-hidden relative animate-fade-in-right">
                {/* Abstract logistics illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 bg-logistics-orange opacity-40 rounded-full blur-2xl absolute animate-pulse"></div>
                  <div className="w-64 h-64 border-8 border-logistics-navy/20 rounded-full absolute animate-spin" style={{ animationDuration: '15s' }}></div>
                  <div className="w-48 h-48 border-4 border-dashed border-logistics-orange/40 rounded-full absolute animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
                  
                  {/* Stylized logistics graphic */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-64 h-64 parallax" data-speed="10">
                      <path fill="#0A2463" d="M40,40 L160,40 L160,160 L40,160 Z" className="animate-float" style={{ animationDelay: '0s' }} />
                      <path fill="#FF6B35" d="M30,30 L150,30 L150,150 L30,150 Z" className="animate-float" style={{ animationDelay: '1s' }} />
                      <circle cx="100" cy="100" r="30" fill="white" className="animate-pulse" />
                      <path fill="none" stroke="#0A2463" strokeWidth="2" d="M40,100 C60,80 140,120 160,100" className="animate-float" style={{ animationDelay: '2s' }} />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-xl animate-float parallax" data-speed="15">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-logistics-orange/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-logistics-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-logistics-navy">98% On-time</p>
                    <p className="text-xs text-gray-500">Delivery Rate</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-xl animate-float parallax" data-speed="20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-logistics-navy/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-logistics-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-logistics-navy">Global Coverage</p>
                    <p className="text-xs text-gray-500">150+ Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#services" className="text-logistics-navy transition-colors duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;

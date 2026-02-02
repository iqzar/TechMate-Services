'use client';


import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Cards from '../components/service-cards';



const Services = () => {
 

  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-300">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We offer comprehensive digital solutions to help your business thrive in the modern technological landscape
          </p>
        </div>
      </section>
      {/* Services Cards Component*/}
        <Cards/>
      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            We follow agile methodologies to ensure efficient and high-quality delivery
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your requirements and goals" },
              { step: "02", title: "Planning", description: "Creating detailed project roadmap and timeline" },
              { step: "03", title: "Development", description: "Building your solution with regular updates" },
              { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support" }
            ].map((process, index) => (
              <div key={index}>
                <div className="w-16 h-16 bg-blue-300 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Lets discuss your project requirements and create a custom solution for your business.
          </p>
          <Button asChild size="lg" variant="secondary" className='bg-white rounded'>
            <Link href="/contact">Lets Talk</Link>
          </Button>
        </div>
      </section>

    
    </div>
  );
};

export default Services;

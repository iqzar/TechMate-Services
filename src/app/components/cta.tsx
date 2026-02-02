'use client';

import Link from 'next/link';
import { Button } from '../../components/ui/button'; // Update path if needed

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-blue-300 font-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Lets discuss how we can help bring your digital vision to life with our expert team and proven processes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center text-text">
          <Button className='bg-white' asChild size="lg" variant="secondary">
            <Link href="/contact">Schedule a Call</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary-500"
          >
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;

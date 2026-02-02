'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Smartphone , Globe2Icon, Server } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card'; // Make sure this path matches your project
import { Button } from '@/components/ui/button'; // Adjust import if needed

// Example services array
const services = [
  {
    icon: <span><Globe2Icon/></span>,
    title: 'Web Development',
    description: 'Building fast and responsive web applications.',
  },
  {
    icon: <span><Smartphone/></span>,
    title: 'Mobile Development',
    description: 'Creating mobile apps for Android and iOS platforms.',
  },
  {
    icon: <span><Server/></span>,
    title: 'Automation',
    description: 'Streamlining operations with automation tools.',
  },
];

const CoreServicesSection = () => {
  return (
    <section className="py-20 bg-white font-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-text max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow rounded duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center text-blue-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-text">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/services" className="inline-flex items-center">
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;

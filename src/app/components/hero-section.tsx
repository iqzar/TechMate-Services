'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '../../components/ui/button';
import hero from '../public/hero.jpeg'

export default function HeroSection() {
  return (
    <section className=" bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-text">
              We build</h1>
              <h1 className="text-blue-300 text-4xl lg:text-6xl font-bold mb-0">future-ready</h1> 
              <h1 className='text-4xl lg:text-6xl font-bold text-text mb-5'>digital solutions
            </h1>
            <p className="text-xl text-text mb-8 leading-relaxed">
              Empowering startups and enterprises with reliable, scalable mobile, web, and backend solutions that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white w-38 rounded">
                <Link href="/contact" className='flex space-x-2 font-bold'>
                  Get Started <ArrowRight className="ml-2 h-5 w-5 mt-1" />
                </Link>
              </Button>
              <Button className='bg-blue-300 w-38 rounded' >
                <Link href="/services" className='text-text hover:text-white'>View Our Services</Link>
              </Button>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-200 to-blue-300 rounded-xl p-7 animate-float">
              <Image
                src={hero}
                alt="Developer working on code"
                width={600}
                height={400}
                className="rounded-lg w-full h-64 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-primary-500" />
                  <span className="font-semibold text-gray-900">Fast Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

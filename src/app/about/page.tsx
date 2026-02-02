'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Zap, Award, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import hero from '../public/about-hero.jpeg'
import cta from '../public/cta.jpeg'

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-300" />,
      title: "Mission Driven",
      description: "To empower startups and enterprises with reliable and scalable digital solutions"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-300" />,
      title: "Client Focused",
      description: "Building long-term partnerships through exceptional service and results"
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-300" />,
      title: "Innovation First",
      description: "Staying ahead with cutting-edge technologies and modern development practices"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-300" />,
      title: "Quality Assured",
      description: "Delivering high-quality solutions through rigorous testing and agile processes"
    }
  ];
{/*
  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
      description: "TechMate Services was established with a vision to provide cutting-edge digital solutions"
    },
    {
      year: "2021",
      title: "First Major Projects",
      description: "Successfully delivered 10+ mobile and web applications for startups"
    },
    {
      year: "2022",
      title: "Team Expansion",
      description: "Grew our expert team and expanded service offerings to include UI/UX design"
    },
    {
      year: "2023",
      title: "Enterprise Solutions",
      description: "Started serving enterprise clients with complex backend and integration projects"
    },
    {
      year: "2024",
      title: "50+ Projects",
      description: "Celebrating 50+ successful projects and 30+ satisfied clients worldwide"
    }
  ];*/}

  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-300">TechMate Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Since 2020, we have been dedicated to empowering businesses with innovative digital solutions. 
                Our mission is to bridge the gap between technology and business success through reliable, 
                scalable, and future-ready applications.
              </p>
              <Button asChild size="lg" className="bg-blue-300 hover:bg-primary-600 rounded">
                <Link href="/contact" className="flex items-center">
                  Work With Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <Image src={hero} width={600} height={200} alt='office building'  className="rounded-2xl shadow-xl"/>
            
              <div className="absolute -bottom-6 -left-6 bg-blue-300 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">4+</div>
                <div className="text-primary-100">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and help us deliver exceptional results for our clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    {/* Our Story Timeline 
    
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a startup idea to a trusted technology partner - here is our story
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-300"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary-500 mb-2">{item.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-300 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
*/}
      {/* Team Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Expert Team & Agile Process
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our team of experienced developers, designers, and project managers follows agile methodologies 
                to ensure efficient delivery and exceptional quality in every project.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300 mb-2">15+</div>
                  <div className="text-gray-600 text-sm">Expert Developers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300 mb-2">10+</div>
                  <div className="text-gray-600 text-sm">Technologies Mastered</div>
                </div>
              </div>

              <Button asChild size="lg" variant="outline" className='rounded'>
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>

            <div className="relative">
             <Image className='rounded' src={cta} width={600} height={200} alt='cta'/>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white bg-blue-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join the growing list of successful businesses that trust SuperFix Services for their digital transformation.
          </p>
          <Button asChild size="lg" variant="secondary" className='bg-slate-50 text-gray-600 rounded' >
            <Link href="/contact">Schedule a Call</Link>
          </Button>
        </div>
      </section>

     
    </div>
  );
};

export default About;

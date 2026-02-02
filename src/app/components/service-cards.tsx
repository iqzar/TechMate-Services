import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Globe, Server, Palette, Cog, ArrowRight } from 'lucide-react';
import image1 from '../../app/public/m1.jpeg';
import image2 from '../../app/public/m2.jpeg';
import image3 from '../../app/public/m3.jpeg';


export default function Cards(){
    return(
        <>
        <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative w-full">
                  <Image
                    src={image1}
                    alt='s1'
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <Smartphone className='text-blue-300 w-12 h-12 font-bold'/>
                    <div>
                      <CardTitle className="lg:text-2xl text-lg font-semibold text-gray-900">
                        <p>Mobile App Development</p>
                      </CardTitle>
                      <p className="text-blue-400 lg:font-medium text-sm">
                      iOS & Android using Flutter and native
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Cross-platform Flutter development</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Native iOS (Swift) and Android (Kotlin)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">App Store and Play Store deployment</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Push notifications and analytics</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Offline functionality and data sync</span>
                      </li>
                  </ul>
                  <Button asChild className="w-full bg-blue-300 rounded hover:bg-primary-600">
                    <Link href="/contact" passHref>
                      <span className="flex items-center justify-center">
                        Get Quote for This Service <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative w-full">
                  <Image
                    src={image2}
                    alt='s2'
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <Globe  className='text-blue-300 w-12 h-12 font-bold'/>
                    <div>
                      <CardTitle className="lg:text-2xl text-lg font-semibold text-gray-900">
                        <p>Web App Development</p>
                      </CardTitle>
                      <p className="text-blue-400 lg:font-medium text-sm">
                      React, Angular, Next.js, Wordpress
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Modern React.js applications</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Angular enterprise solutions</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Next.js for SEO-optimized websites</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Progressive Web Apps (PWA)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Responsive and mobile-first design</span>
                      </li>
                  </ul>
                  <Button asChild className="w-full bg-blue-300 rounded hover:bg-primary-600">
                    <Link href="/contact" passHref>
                      <span className="flex items-center justify-center">
                        Get Quote for This Service <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative w-full">
                  <Image
                    src={image3}
                    alt='s3'
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <Server  className='text-blue-300 w-12 h-12 font-bold'/>
                    <div>
                      <CardTitle className="lg:text-2xl font-semibold text-lg text-gray-900">
                        <p>Backend Development</p>
                      </CardTitle>
                      <p className="text-blue-400 lg:font-medium text-sm">
                      Node.js, Laravel, SupaBase, Firebase
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">RESTful API development</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Node.js and Express.js</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Python Django frameworks</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Firebase integration</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Database design and optimization</span>
                      </li>
                  </ul>
                  <Button asChild className="w-full bg-blue-300 rounded hover:bg-primary-600">
                    <Link href="/contact" passHref>
                      <span className="flex items-center justify-center">
                        Get Quote for This Service <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative w-full">
                  <Image
                    src={image1}
                    alt='s1'
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <Palette  className='text-blue-300 w-12 h-12 font-bold'/>
                    <div>
                      <CardTitle className="lg:text-2xl text-lg font-semibold text-gray-900">
                        <p>UI/UX Design</p>
                      </CardTitle>
                      <p className="text-blue-400 lg:font-medium text-sm">
                      Figma prototyping, design systems
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">User experience research</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Figma prototyping and wireframing</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Design system creation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">User interface design</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Usability testing and optimization</span>
                      </li>
                  </ul>
                  <Button asChild className="w-full bg-blue-300 rounded hover:bg-primary-600">
                    <Link href="/contact" passHref>
                      <span className="flex items-center justify-center">
                        Get Quote for This Service <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative w-full">
                  <Image
                    src={image2}
                    alt='s2'
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <Cog  className='text-blue-300 w-12 h-12 font-bold'/>
                    <div>
                      <CardTitle className="lg:text-2xl font-semibold text-lg text-gray-900">
                        <p>Custom Software Solutions</p>
                      </CardTitle>
                      <p className="text-blue-400 lg:font-medium text-sm">
                      Tailored solutions for your business
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Enterprise software development</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">API integrations and automation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Legacy system modernization</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Cloud migration services</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Custom workflow solutions</span>
                      </li>
                  </ul>
                  <Button asChild className="w-full bg-blue-300 rounded hover:bg-primary-600">
                    <Link href="/contact" passHref>
                      <span className="flex items-center justify-center">
                        Get Quote for This Service <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              
            
          </div>
        </div>
      </section>

        </>
    )
}

'use client';


import { Card, CardContent} from '@/components/ui/card';

import {Phone, MapPin, Clock, Mail } from 'lucide-react';

import React from 'react';



const contactInfo = [
  
  {
    icon: <Phone className="h-6 w-6 text-primary-500" />,
    title: "Call Us",
    details: "0319-8400943",
    description: "Mon-Fri from 9am to 6pm",
  },
  {
    icon: <Mail className="h-6 w-6 text-primary-500" />,
    title: "Email Us",
    details: "techmate022@gmail.com",
    description: "Mon-Fri from 9am to 6pm",
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary-500" />,
    title: "Visit Us",
    details: "Karachi, Pakistan",
    description: "Get directions to our office",
  },
  {
    icon: <Clock className="h-6 w-6 text-primary-500" />,
    title: "Business Hours",
    details: "Mon - Fri: 9AM - 6PM",
    description: "Weekend support available",
  },
];

const faqList = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. Mobile apps typically take 2-4 months, while web applications can take 1-3 months.",
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes, we offer comprehensive support and maintenance services to ensure your application runs smoothly after launch.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in Flutter, React, Angular, Node.js, Python, and modern cloud platforms like Firebase and AWS.",
  },
  {
    question: "How do you ensure project quality?",
    answer: "We follow agile methodologies with regular testing, code reviews, and client feedback loops throughout the development process.",
  },
];

const Contact: React.FC = () => {
  {/*const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Message Sent!", {
        description: "Thank you for your inquiry. We will get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };*/}

  return (
    <div className="min-h-screen bg-white font-custom">
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Lets <span className="text-blue-300">Connect</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge digital solutions? 
            Get in touch with our expert team today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-1 gap-12">
          {/* Form */}
          {/*<Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Send us a message</CardTitle>
              <p className="text-gray-600 text-sm">
                Fill out the form below and we will get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6 ">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-300 hover:bg-primary-600 rounded text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
                </Button>
              </form>
  </CardContent>
          </Card>*/}

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h1>
              <p className="text-gray-600 text-sm">
                We are here to help you bring your digital vision to life.
                Choose the best way to reach us:
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className='text-blue-300'>{info.icon}</div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                        <p className="text-blue-300 font-semibold mb-1 lg:text-xs ">{info.details}</p>
                        <p className="lg:text-xs text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stats */}
            {/*<Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Why Choose SuperFix Services?</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  {[['24h', 'Response Time'], ['50+', 'Projects Delivered'], ['30+', 'Happy Clients'], ['4+', 'Years Experience']].map(([stat, label], i) => (
                    <div key={i}>
                      <div className="text-2xl font-bold text-blue-300">{stat}</div>
                      <div className="text-sm text-gray-600">{label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>*/}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Quick answers to common questions about our services
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqList.map((faq, i) => (
            <Card key={i} className='bg-white'>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;

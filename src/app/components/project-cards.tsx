'use client';

import React from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';

import {
  Smartphone,
  MessageSquare,
  MapPin,
  Heart,
  CreditCard,
  Clock,
  ArrowRight,
} from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

// ==================
// Types
// ==================

interface Project {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  points: string[];
  link: string;
}

// ==================
// Helper
// ==================

const isExternalLink = (url: string) => url.startsWith('http');

// ==================
// Projects Data
// ==================

const projects: Project[] = [
  {
    title: 'Emerald Beauty User App',
    subtitle: 'Flutter Beauty Services App',
    icon: Smartphone,
    points: [
      'Flutter-based mobile application',
      'Stripe & Apple Pay integration',
      'Secure online payments',
      'API integrations',
      'User-friendly booking system',
    ],
    link: 'https://play.google.com/store/apps/details?id=com.emeraldbeauty.user',
  },

  {
    title: 'Emerald Beauty Employee App',
    subtitle: 'Staff Management Application',
    icon: Smartphone,
    points: [
      'Employee scheduling system',
      'Booking management',
      'Payment tracking',
      'Flutter cross-platform app',
      'Client management tools',
    ],
    link: 'https://play.google.com/store/apps/details?id=com.emeraldbeauty.employeefreelancer',
  },

  {
    title: 'HelpDesk Helper',
    subtitle: 'Support Provider App',
    icon: MessageSquare,
    points: [
      'Real-time video calling',
      'Daily.co SDK integration',
      'Ticket workflow system',
      'Live customer support',
      'Flutter-based solution',
    ],
    link: 'https://play.google.com/store/apps/details?id=com.helpdesk.helper',
  },

  {
    title: 'HelpDesk Instant Help',
    subtitle: 'Customer Support App',
    icon: MessageSquare,
    points: [
      'Instant customer assistance',
      'Video & voice calling',
      'Ticket management',
      'Secure communication',
      'Multi-platform support',
    ],
    link: 'https://play.google.com/store/apps/details?id=com.helpdesk.user',
  },

  {
    title: 'Time Management App',
    subtitle: 'Productivity Tool',
    icon: Clock,
    points: [
      'Task management system',
      'Deadline reminders',
      'Progress tracking',
      'Local database (SQLite)',
      'Smart notifications',
    ],
    link: '/contact',
  },

  {
    title: 'QraftConnect',
    subtitle: 'B2B Construction Platform',
    icon: MapPin,
    points: [
      'Firebase real-time chat',
      'Multi-language support',
      'Advanced filtering',
      'Authentication system',
      'B2B workflow tools',
    ],
    link: 'https://apps.apple.com/us/app/qraftconnect/id6503102588',
  },

  {
    title: 'Caretaker App',
    subtitle: 'Elderly Care Solution',
    icon: Heart,
    points: [
      'Live location tracking',
      'Emergency calling',
      'Push notifications',
      'Firebase integration',
      'Care monitoring system',
    ],
    link: '/contact',
  },

  {
    title: 'Tabarru Charity App',
    subtitle: 'Donation Platform',
    icon: CreditCard,
    points: [
      'Secure donations',
      'Stripe & SumUp SDK',
      'Easy payment flow',
      'Mosque support system',
      'Flutter development',
    ],
    link: '/contact',
  },
];

// ==================
// Component
// ==================

export default function ProjectsCards() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const external = isExternalLink(project.link);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass-card rounded-2xl overflow-hidden transition-shadow hover:shadow-xl duration-300"
              >
                {/* Header */}
                <div className="h-32 bg-blue-300 flex items-center justify-center relative overflow-hidden">
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/80 backdrop-blur flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1 text-gray-900">
                    {project.title}
                  </h3>

                  <p className="mb-3 font-medium text-blue-400 text-sm">
                    {project.subtitle}
                  </p>

                  {/* Points */}
                  <ul className="list-disc list-inside space-y-2 mb-5 marker:text-blue-300">
                    {project.points.map((point, i) => (
                      <li key={i} className="text-sm text-gray-600">
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <Button
                    asChild
                    className="w-full rounded bg-blue-400 hover:bg-blue-300 text-white border-0 focus-visible:ring-0"
                  >
                    <Link
                      href={project.link}
                      target={external ? '_blank' : '_self'}
                      rel={external ? 'noopener noreferrer' : undefined}
                    >
                      <span className="flex items-center justify-center text-black">
                        View Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

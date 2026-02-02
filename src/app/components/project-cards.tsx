"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Smartphone,
  MessageSquare,
  MapPin,
  Heart,
  CreditCard,
  Clock,
  ArrowRight,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

// Images
import image1 from "../../app/public/m1.jpeg";
import image2 from "../../app/public/m2.jpeg";
import image3 from "../../app/public/m3.jpeg";


// ==================
// Types
// ==================

interface Project {
  title: string;
  subtitle: string;
  image: StaticImageData;
  icon: LucideIcon;
  points: string[];
  link: string;
}

// ==================
// Helper Function
// ==================

// Check if link is external
const isExternalLink = (url: string) => {
  return url.startsWith("http");
};

// ==================
// Projects Data
// ==================

const projects: Project[] = [
  {
    title: "Emerald Beauty User App",
    subtitle: "Flutter Beauty Services App",
    image: image1,
    icon: Smartphone,
    points: [
      "Flutter-based mobile application",
      "Stripe & Apple Pay integration",
      "Secure online payments",
      "API integrations",
      "User-friendly booking system",
    ],
    link: "https://play.google.com/store/apps/details?id=com.emeraldbeauty.user",
  },

  {
    title: "Emerald Beauty Employee App",
    subtitle: "Staff Management Application",
    image: image2,
    icon: Smartphone,
    points: [
      "Employee scheduling system",
      "Booking management",
      "Payment tracking",
      "Flutter cross-platform app",
      "Client management tools",
    ],
    link: "https://play.google.com/store/apps/details?id=com.emeraldbeauty.employeefreelancer",
  },

  {
    title: "HelpDesk Helper",
    subtitle: "Support Provider App",
    image: image3,
    icon: MessageSquare,
    points: [
      "Real-time video calling",
      "Daily.co SDK integration",
      "Ticket workflow system",
      "Live customer support",
      "Flutter-based solution",
    ],
    link: "https://play.google.com/store/apps/details?id=com.helpdesk.helper",
  },

  {
    title: "HelpDesk Instant Help",
    subtitle: "Customer Support App",
    image: image1,
    icon: MessageSquare,
    points: [
      "Instant customer assistance",
      "Video & voice calling",
      "Ticket management",
      "Secure communication",
      "Multi-platform support",
    ],
    link: "https://play.google.com/store/apps/details?id=com.helpdesk.user",
  },

  {
    title: "Time Management App",
    subtitle: "Productivity Tool",
    image: image2,
    icon: Clock,
    points: [
      "Task management system",
      "Deadline reminders",
      "Progress tracking",
      "Local database (SQLite)",
      "Smart notifications",
    ],
    link: "/contact",
  },

  {
    title: "QraftConnect",
    subtitle: "B2B Construction Platform",
    image: image3,
    icon: MapPin,
    points: [
      "Firebase real-time chat",
      "Multi-language support",
      "Advanced filtering",
      "Authentication system",
      "B2B workflow tools",
    ],
    link: "https://apps.apple.com/us/app/qraftconnect/id6503102588",
  },

  {
    title: "Caretaker App",
    subtitle: "Elderly Care Solution",
    image: image1,
    icon: Heart,
    points: [
      "Live location tracking",
      "Emergency calling",
      "Push notifications",
      "Firebase integration",
      "Care monitoring system",
    ],
    link: "/contact",
  },

  {
    title: "Tabarru Charity App",
    subtitle: "Donation Platform",
    image: image2,
    icon: CreditCard,
    points: [
      "Secure donations",
      "Stripe & SumUp SDK",
      "Easy payment flow",
      "Mosque support system",
      "Flutter development",
    ],
    link: "/contact",
  },
];

// ==================
// Component
// ==================

export default function ProjectsCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {projects.map((project, index) => {
            const Icon = project.icon;
            const external = isExternalLink(project.link);

            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300"
              >

                {/* Image */}
                <div className="aspect-video relative w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Header */}
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">

                    <Icon className="text-blue-400 w-12 h-12" />

                    <div>
                      <CardTitle className="lg:text-2xl text-lg font-semibold text-gray-900">
                        {project.title}
                      </CardTitle>

                      <p className="text-blue-400 text-sm font-medium">
                        {project.subtitle}
                      </p>
                    </div>

                  </div>
                </CardHeader>

                {/* Content */}
                <CardContent>

                  <ul className="space-y-2 mb-6">

                    {project.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start space-x-2"
                      >
                        <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0" />

                        <span className="text-gray-600">
                          {point}
                        </span>
                      </li>
                    ))}

                  </ul>

                  {/* Button */}
                  <Button
                    asChild
                    className="w-full bg-blue-300 hover:bg-blue-400 rounded"
                  >
                    <Link
                      href={project.link}
                      target={external ? "_blank" : "_self"}
                      rel={external ? "noopener noreferrer" : undefined}
                    >
                      <span className="flex items-center justify-center">
                        View Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </Link>
                  </Button>

                </CardContent>

              </Card>
            );
          })}

        </div>

      </div>
    </section>
  );
}

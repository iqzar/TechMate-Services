"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

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

// ==================
// Types
// ==================

type StoreLinkType = "playStore" | "appStore";

interface StoreLink {
  type: StoreLinkType;
  url: string;
}

interface Project {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  points: string[];
  link?: string; // fallback
  storeLinks?: StoreLink[];
}

// ==================
// Device Hook
// ==================

function useDevice() {
  const [device, setDevice] = useState<
    "android" | "ios" | "mac" | "windows" | "other"
  >("other");

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();

    if (/android/.test(ua)) setDevice("android");
    else if (/iphone|ipad|ipod/.test(ua)) setDevice("ios");
    else if (/mac/.test(ua)) setDevice("mac");
    else if (/win/.test(ua)) setDevice("windows");
    else setDevice("other");
  }, []);

  return device;
}

// ==================
// Helper
// ==================

const isExternalLink = (url: string) => url.startsWith("http");

// ==================
// Projects Data
// ==================

const projects: Project[] = [
  {
    title: "Emerald Beauty User App",
    subtitle: "Flutter Beauty Services App",
    icon: Smartphone,
    points: [
      "Flutter-based mobile application",
      "Stripe & Apple Pay integration",
      "Secure online payments",
      "API integrations",
      "User-friendly booking system",
    ],
    storeLinks: [
      {
        type: "playStore",
        url: "https://play.google.com/store/apps/details?id=com.emeraldbeauty.user",
      },
      {
        type: "appStore",
        url: "https://apps.apple.com/us/app/emerald-beauty-user-app/id6743151446",
      },
    ],
  },

  {
    title: "Emerald Beauty Employee App",
    subtitle: "Staff Management Application",
    icon: Smartphone,
    points: [
      "Employee scheduling system",
      "Booking management",
      "Payment tracking",
      "Flutter cross-platform app",
      "Client management tools",
    ],
    storeLinks: [
      {
        type: "playStore",
        url: "https://play.google.com/store/apps/details?id=com.emeraldbeauty.employeefreelancer",
      },
      {
        type: "appStore",
        url: "https://apps.apple.com/us/app/emerald-beauty-employee-app/id6743151533",
      },
    ],
  },

  {
    title: "HelpDesk Helper",
    subtitle: "Support Provider App",
    icon: MessageSquare,
    points: [
      "Real-time video calling",
      "Daily.co SDK integration",
      "Ticket workflow system",
      "Live customer support",
      "Flutter-based solution",
    ],
    storeLinks: [
      {
        type: "playStore",
        url: "https://play.google.com/store/apps/details?id=com.helpdesk.helper",
      },
      {
        type: "appStore",
        url: "https://apps.apple.com/us/app/helpdesk-helper/id6683304947",
      },
    ],
  },

  {
    title: "Time Management App",
    subtitle: "Productivity Tool",
    icon: Clock,
    points: [
      "Task management system",
      "Deadline reminders",
      "Progress tracking",
      "Local database (SQLite)",
      "Smart notifications",
    ],
    link: "/projects",
  },

  {
    title: "QraftConnect",
    subtitle: "B2B Construction Platform",
    icon: MapPin,
    points: [
      "Firebase real-time chat",
      "Multi-language support",
      "Advanced filtering",
      "Authentication system",
      "B2B workflow tools",
    ],
    storeLinks: [
      {
        type: "appStore",
        url: "https://apps.apple.com/us/app/qraftconnect/id6503102588",
      },
    ],
  },

  {
    title: "Caretaker App",
    subtitle: "Elderly Care Solution",
    icon: Heart,
    points: [
      "Live location tracking",
      "Emergency calling",
      "Push notifications",
      "Firebase integration",
      "Care monitoring system",
    ],
    link: "/projects",
  },

  {
    title: "Tabarru Charity App",
    subtitle: "Donation Platform",
    icon: CreditCard,
    points: [
      "Secure donations",
      "Stripe & SumUp SDK",
      "Easy payment flow",
      "Mosque support system",
      "Flutter development",
    ],
    link: "/projects",
  },
];

// ==================
// Component
// ==================

export default function ProjectsCards() {
  const device = useDevice();

  // Pick correct link based on device
  const getProjectLink = (project: Project) => {
    if (project.storeLinks?.length) {
      if (device === "android") {
        return (
          project.storeLinks.find((l) => l.type === "playStore")?.url ||
          project.link ||
          "/projects"
        );
      }

      if (device === "ios" || device === "mac") {
        return (
          project.storeLinks.find((l) => l.type === "appStore")?.url ||
          project.link ||
          "/projects"
        );
      }
    }

    return project.link || "/contact";
  };

  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;

            const finalLink = getProjectLink(project);
            const external = isExternalLink(finalLink);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass-card border rounded-2xl overflow-hidden transition-shadow shadow-sm hover:shadow-xl duration-300"
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
                      href={finalLink}
                      target={external ? "_blank" : "_self"}
                      rel={external ? "noopener noreferrer" : undefined}
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

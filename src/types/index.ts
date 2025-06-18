// src/types/index.ts

import type { Variants } from "framer-motion";

export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link?: string;
  demo?: string;
  featured?: boolean;
}

export interface LayoutProps {
  title: string;
  description?: string;
  ogImage?: string;
  canonicalURL?: string;
}

export interface HeroProps {
  name?: string;
  title?: string;
  subtitle?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface AnimationVariants extends Variants {
  hidden: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      type?: string;
      stiffness?: number;
      damping?: number;
      duration?: number;
      delay?: number;
      staggerChildren?: number;
      delayChildren?: number;
    };
  };
}
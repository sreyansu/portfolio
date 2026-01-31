import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sreyansu.in"),
  title: {
    default: "Sreyansu Sekhar Mohanty | Full Stack Developer | React & Next.js Expert",
    template: "%s | Sreyansu Sekhar Mohanty",
  },
  description:
    "Hi, I'm Sreyansu Sekhar Mohanty - a Full Stack Developer from Odisha, India. I specialize in React.js, Next.js, Node.js, MongoDB, and AI integration. Currently pursuing B.Tech in Computer Science at VSSUT Sambalpur. Explore my projects, experience at Elevate Labs and Skill Dunia, and let's build something amazing together!",
  keywords: [
    // Name variations for personal branding
    "Sreyansu",
    "Sreyansu Sekhar",
    "Sreyansu Sekhar Mohanty",
    "Sreyansu Mohanty",
    "sreyansu.in",

    // Professional titles
    "Full Stack Developer",
    "Full Stack Developer India",
    "Full Stack Developer Odisha",
    "React Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Python Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Software Developer",
    "Software Engineer",

    // Skills & Technologies
    "React.js",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Firebase",
    "Supabase",
    "REST API",
    "OpenAI API",
    "AI Integration",
    "Tailwind CSS",
    "Three.js",
    "Framer Motion",

    // Location-based
    "Developer Odisha",
    "Developer Sambalpur",
    "Developer Bhadrak",
    "Web Developer India",
    "Freelance Developer India",
    "Hire Developer India",

    // Education
    "VSSUT",
    "VSSUT Burla",
    "VSSUT Sambalpur",
    "B.Tech CSE",
    "Computer Science Student",
    "SBD International School",

    // Action keywords
    "Hire Full Stack Developer",
    "Portfolio Website",
    "Developer Portfolio",
    "Best Developer Portfolio",
  ],
  authors: [{ name: "Sreyansu Sekhar Mohanty", url: "https://sreyansu.in" }],
  creator: "Sreyansu Sekhar Mohanty",
  publisher: "Sreyansu Sekhar Mohanty",

  // Open Graph for social sharing
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: "https://sreyansu.in",
    siteName: "Sreyansu Sekhar Mohanty - Full Stack Developer Portfolio",
    title: "Sreyansu Sekhar Mohanty | Full Stack Developer | React & Next.js Expert",
    description:
      "Full Stack Developer from Odisha, India. Specializing in React.js, Next.js, Node.js, MongoDB. B.Tech CSE @ VSSUT. Building production-ready web applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sreyansu Sekhar Mohanty - Full Stack Developer Portfolio",
        type: "image/png",
      },
    ],
    firstName: "Sreyansu",
    lastName: "Mohanty",
    username: "sreyansu",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@sreyansu",
    creator: "@sreyansu",
    title: "Sreyansu Sekhar Mohanty | Full Stack Developer",
    description:
      "Full Stack Developer from India. React.js, Next.js, Node.js expert. Building amazing web experiences.",
    images: {
      url: "/og-image.png",
      alt: "Sreyansu Sekhar Mohanty - Full Stack Developer",
    },
  },

  // Robots - Enhanced
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification
  verification: {
    google: "your-google-verification-code",
  },

  // App icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon-16x16.png",
    apple: [
      { url: "/apple-touch-icon.png" },
      { url: "/apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },

  // Manifest for PWA
  manifest: "/manifest.json",

  // Canonical URL
  alternates: {
    canonical: "https://sreyansu.in",
    languages: {
      "en-IN": "https://sreyansu.in",
      "en-US": "https://sreyansu.in",
    },
  },

  // Category
  category: "technology",

  // Additional meta
  other: {
    "google-site-verification": "your-google-verification-code",
    "msvalidate.01": "your-bing-verification-code",
    "theme-color": "#d946ef",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
  },
};

// Comprehensive JSON-LD Structured Data
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://sreyansu.in/#person",
  name: "Sreyansu Sekhar Mohanty",
  givenName: "Sreyansu",
  familyName: "Mohanty",
  additionalName: "Sekhar",
  url: "https://sreyansu.in",
  image: {
    "@type": "ImageObject",
    url: "https://sreyansu.in/image/Photo_SREYANSU_SEKHAR_MOHANTY_-_Copy-removebg-preview.png",
    width: 400,
    height: 400,
  },
  sameAs: [
    "https://github.com/sreyansu",
    "https://linkedin.com/in/sreyansu",
    "https://twitter.com/sreyansu",
  ],
  jobTitle: "Full Stack Developer",
  description: "Full Stack Developer specializing in React.js, Next.js, Node.js, and MongoDB. Building production-ready web applications with modern technologies.",
  email: "mailto:contact@sreyansu.in",
  nationality: {
    "@type": "Country",
    name: "India",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sambalpur",
    addressRegion: "Odisha",
    addressCountry: "IN",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Veer Surendra Sai University of Technology",
      alternateName: "VSSUT",
      url: "https://vssut.ac.in",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sambalpur",
        addressRegion: "Odisha",
        addressCountry: "IN",
      },
    },
    {
      "@type": "HighSchool",
      name: "SBD International School",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bhadrak",
        addressRegion: "Odisha",
        addressCountry: "IN",
      },
    },
  ],
  knowsAbout: [
    "React.js", "Next.js", "Node.js", "JavaScript", "TypeScript",
    "Python", "MongoDB", "Firebase", "Supabase", "REST APIs",
    "Full Stack Development", "Web Development", "AI Integration",
    "OpenAI", "Computer Vision", "Machine Learning",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "B.Tech in Computer Science and Engineering",
      credentialCategory: "degree",
      educationalLevel: "Bachelor's Degree",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://sreyansu.in/#website",
  url: "https://sreyansu.in",
  name: "Sreyansu Sekhar Mohanty - Full Stack Developer Portfolio",
  description: "Personal portfolio website of Sreyansu Sekhar Mohanty, a Full Stack Developer from India.",
  publisher: {
    "@id": "https://sreyansu.in/#person",
  },
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://sreyansu.in/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://sreyansu.in/#profilepage",
  url: "https://sreyansu.in",
  name: "Sreyansu Sekhar Mohanty - Portfolio",
  description: "Professional portfolio of Sreyansu Sekhar Mohanty, Full Stack Developer",
  mainEntity: {
    "@id": "https://sreyansu.in/#person",
  },
  dateCreated: "2024-01-01",
  dateModified: new Date().toISOString().split('T')[0],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://sreyansu.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://sreyansu.in/#about",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Projects",
      item: "https://sreyansu.in/#projects",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Experience",
      item: "https://sreyansu.in/#experience",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Contact",
      item: "https://sreyansu.in/#contact",
    },
  ],
};

const combinedJsonLd = [personSchema, websiteSchema, profilePageSchema, breadcrumbSchema];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedJsonLd) }}
        />
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS Prefetch for faster loading */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://sreyansu.in" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

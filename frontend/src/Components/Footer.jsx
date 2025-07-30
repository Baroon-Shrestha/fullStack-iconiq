import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import toast from "react-hot-toast";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const pageLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/project" },
  ];

  const workAndServiceLinks = [
    { name: "Work", href: "/project" },
    { name: "Blog", href: "/blog" },
    { name: "Pricing", href: "/pricing" },
  ];

  const bottomLinks = [
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook />,
      href: "https://www.facebook.com/iconiqnp/?rdid=rNX7SW2qKqC4mgto",
      color: "hover:text-white",
      bgcolor: "hover:bg-blue-400",
    },
    {
      name: "Instagram",
      icon: <Instagram />,
      href: "https://www.instagram.com/iconiqnp/#",
      color: "hover:text-white",
      bgcolor: "hover:bg-pink-400",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin />,
      href: "https://www.linkedin.com/in/iconiq/",
      color: "hover:text-white",
      bgcolor: "hover:bg-blue-400",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#C848C1] via-[#8B5CF6] to-[#54A6F9] text-white mt-16 rounded-t-4xl relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-300 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-pink-300 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {/* Main 4-Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* 1st Grid: Logo and Title */}
          <div className="space-y-4">
            <div className="w-18 h-18 md:w-40 md:h-40 rounded-2xl border-2 border-white  overflow-hidden relative z-20 bg-white flex items-center justify-center">
              <div className="text-lg md:text-xl lg:text-2xl font-bold text-purple-600">
                <img src="Uploads/logo_iconiq_final.png" alt="" />
              </div>
            </div>
          </div>

          {/* 2nd Grid: Page Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center">
              Pages
              <ArrowRight className="w-4 h-4 ml-2 opacity-60" />
            </h3>
            <ul className="space-y-2">
              {pageLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-block relative group"
                  >
                    {link.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3rd Grid: Work, Blog & Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center">
              Services
              <ArrowRight className="w-4 h-4 ml-2 opacity-60" />
            </h3>
            <ul className="space-y-2">
              {workAndServiceLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-block relative group"
                  >
                    {link.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4th Grid: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Get in Touch
            </h3>

            {/* Location */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 mb-4">
              <a
                href="https://www.google.com/maps?q=Sankhamul,+Kathmandu"
                target="_blank"
                rel="noopener noreferrer"
                className="block space-y-1 hover:text-yellow-400 transition-colors duration-300"
              >
                <p className="font-semibold text-yellow-200">
                  Sankhamul, Naya Baneshwor
                </p>
                <p className="text-white/90 text-sm">Kathmandu, Nepal</p>
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3 text-sm hover:text-yellow-400 transition-all duration-300 group">
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <a
                href="mailto:iconiqnp@gmail.com"
                className="group-hover:text-yellow-400"
              >
                Iconiqnp@gmail.com
              </a>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start space-x-3 text-sm group">
              <Phone className="w-4 h-4 mt-1 group-hover:scale-110 transition-transform duration-300" />
              <div className="space-y-1 ">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("+977 9864687572");
                    toast.success("Phone number copied to clipboard!");
                  }}
                  className="block hover:text-yellow-400 transition-all duration-300"
                >
                  +977 986‑4687572
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("+977 9705337437");
                    toast.success("Phone number copied to clipboard!");
                  }}
                  className="block hover:text-yellow-400 transition-all duration-300"
                >
                  +977 970-5337437
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 3-Grid Section */}
        <div className="border-t border-white/30 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* 1st Grid: Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-white/80">
                &copy; {currentYear} Iconiq. All rights reserved.
              </p>
            </div>

            {/* 2nd Grid: Bottom Links */}
            <div className="flex justify-center space-x-6">
              {bottomLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.href}
                  className="text-sm hover:text-yellow-400 transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* 3rd Grid: Social Media */}
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className={`${social.color} ${social.bgcolor} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 p-2 rounded-full`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

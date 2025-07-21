import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const initialCards = [
  {
    title: "Web Design",
    description:
      "Creating stunning websites for businesses worldwide. Responsive, SEO-optimized, and built to impress.",
    image:
      "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=800&q=80",
    bgImage: "Uploads/webdev.jpg",
    color: "from-blue-600 to-purple-600",
  },
  {
    title: "Digital Marketing",
    description:
      "Our team crafts digital campaigns that convert visitors into loyal customers across all platforms.",
    bgImage: "Uploads/marketing.avif",
    color: "from-emerald-600 to-teal-600",
  },
  {
    title: "Poster and Motion Graphics",
    description:
      "From concept to launch, we deliver high-performance apps tailored to your unique business needs.",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
    bgImage: "Uploads/reels.jpg",
    color: "from-orange-600 to-red-600",
  },
  {
    title: "Branding & Identity",
    description:
      "We help brands create memorable identities with logos, color palettes, and complete branding kits.",
    image:
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=800&q=80",
    bgImage: "Uploads/branding.png",
    color: "from-pink-600 to-rose-600",
  },
];

export default function ServicesHero() {
  const [currentBg, setCurrentBg] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    let progressInterval;

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentBg((prev) => (prev + 1) % initialCards.length);
        setProgress(0);
      }, 5000);

      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 0.5;
        });
      }, 25);
    }

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isPlaying]);

  const currentCard = initialCards[currentBg];

  return (
    <div className="relative min-h-[60vh] md:min-h-[80vh]  flex flex-col justify-end rounded-3xl text-white overflow-hidden group">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {initialCards.map((card, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentBg
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-3xl"
              style={{
                backgroundImage: `url('${card.bgImage}')`,
              }}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-40 rounded-3xl`}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-3xl" />
      <div className="container mx-auto relative z-10 px-6 md:px-12 pb-16">
        <div className="max-w-4xl">
          <div
            key={`subtitle-${currentBg}`}
            className="text-xs md:text-sm uppercase tracking-widest mb-3 text-gray-300 animate-fadeInUp"
          >
            {currentCard.subtitle}
          </div>

          <h1
            key={`title-${currentBg}`}
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight drop-shadow-2xl mb-4 animate-fadeInUp"
            style={{ animationDelay: "0.1s" }}
          >
            {currentCard.title}
          </h1>

          <p
            key={`description-${currentBg}`}
            className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed font-light animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            {currentCard.description}
          </p>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/50 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-2000" />
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}

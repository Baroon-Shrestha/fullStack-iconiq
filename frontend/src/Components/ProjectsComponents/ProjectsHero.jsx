import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const initialCards = [
  {
    title: "Fashion E-Commerce Platform",
    subtitle: "Design • Development",
    description:
      "We crafted a high-conversion fashion e-commerce site with a custom user experience, seamless checkout, and integrated SEO strategies.",
    bgImage: "/Uploads/services.jpg",
  },
  {
    title: "Social Media Growth Campaign",
    subtitle: "Instagram • Reels • Ads",
    description:
      "Our reels and motion graphics content helped a local brand triple its engagement, gaining over 15K organic followers in 3 months.",
    bgImage: "/Uploads/services3.jpg",
  },
  {
    title: "Brand Identity for Startups",
    subtitle: "Logo • Visuals",
    description:
      "We delivered a complete branding kit including logo, color palette, and social assets—helping the startup stand out in a crowded market.",
    bgImage: "/Uploads/services4.png",
  },
  {
    title: "Poster and Motion Graphics",
    subtitle: "Poster • Brochure • Visuals",
    description:
      "We produced polished explainer videos and product animations for enterprise clients, simplifying complex processes through motion design.",
    bgImage: "/Uploads/reels.jpg",
  },
];

export default function ProjectsHero() {
  const [currentBg, setCurrentBg] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentBg((prev) => (prev + 1) % initialCards.length);
      setProgress(0);
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentBg(
        (prev) => (prev - 1 + initialCards.length) % initialCards.length
      );
      setProgress(0);
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    let interval;
    let progressInterval;

    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide();
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
  }, [isPlaying, isTransitioning]);

  const currentCard = initialCards[currentBg];

  return (
    <div className="relative min-h-[60vh] md:min-h-[80vh] flex flex-col justify-end rounded-3xl text-white overflow-hidden group">
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {/* Current slide */}
        <div
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            isTransitioning
              ? "transform -translate-x-full"
              : "transform translate-x-0"
          }`}
          style={{
            backgroundImage: `url('${currentCard.bgImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br  opacity-40 rounded-3xl`}
          />
        </div>

        {/* Next slide (coming from right) */}
        <div
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            isTransitioning
              ? "transform translate-x-0"
              : "transform translate-x-full"
          }`}
          style={{
            backgroundImage: `url('${
              initialCards[(currentBg + 1) % initialCards.length].bgImage
            }')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              initialCards[(currentBg + 1) % initialCards.length].color
            } opacity-40 rounded-3xl`}
          />
        </div>
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

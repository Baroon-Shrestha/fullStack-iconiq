import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const projectsData = [
  {
    image: "Uploads/momiji2.jpg",
    title: "Momiji International Academy",
    subtitle: "Japan-Focused Educational Consultancy",
    description:
      "We designed a dedicated platform for Momiji International Academy, a reputed Japanese language institute. The website features course information, an intuitive enrollment system, student resources, and a mobile-friendly design to help students prepare for study and work opportunities in Japan.",
    tags: ["Poster and Motion Graphics", "Mobile Responsive Application"],
    year: "2025",
    height: 400,
    category: ["Websites", "Branding"],
    longDescription:
      "Momiji International Academy is a specialized educational consultancy dedicated exclusively to helping Nepali students and job seekers build a future in Japan. With a core focus on Japanese language training, higher education consulting, and career support through the Specified Skilled Worker (SSW) program, Momiji offers a holistic pathway for individuals who aspire to study, live, and work in Japan. Their dedicated team of language experts, cultural advisors, and placement specialists ensure that students are equipped with not just linguistic knowledge but also real-world preparedness to succeed in a foreign environment. Whether you're preparing for JLPT levels or gearing up for interviews under Japan’s SSW framework, Momiji’s support system is robust, practical, and deeply personalized. With a track record of guiding hundreds of students and professionals through this life-changing transition, Momiji stands out as a trustworthy and experienced institution for Japan-bound aspirants.",
    longDescription2:
      "When Momiji approached us at IconiqNP, they had a clear vision: to amplify their digital footprint and make their educational offerings more accessible and interactive. Our collaboration began with a deep understanding of their mission and the unique audience they serve. From there, we conceptualized and built a fully customized, modern, and mobile-responsive website tailored to both desktop and mobile users. The website features essential components such as multilingual course pages, an intuitive inquiry system, and easy-to-navigate resources that cater to prospective students and their guardians. We also incorporated event announcements, language class structures, and a clear pathway for users to explore Japan's study and SSW opportunities. To complement their digital presence, we designed engaging poster and motion graphics for Momiji’s seasonal events, class announcements, and cultural festivals, ensuring consistent visual branding across both print and digital platforms.",
    longDescription3:
      "By choosing to partner with IconiqNP, Momiji International Academy witnessed a transformative uplift in both brand visibility and user engagement. Their website now serves as a streamlined hub for course inquiries, student guidance, and institutional branding. Students can explore opportunities, learn about schedules and fees, and even participate in upcoming events—all from the convenience of their mobile devices. The visual identity across posters and marketing collateral has also become more unified and professional, reinforcing Momiji’s reputation as a credible and student-centric consultancy. Ultimately, our collaboration empowered Momiji to better connect with its community and expand its reach to more aspiring candidates seeking a future in Japan.",
    challenge:
      "Momiji International Academy lacked a scalable and modern digital presence.",
    solution:
      "We developed a responsive platform with a focus on user experience, performance, and accessibility for Momiji International Academy.",
    result:
      "Momiji International Academy experienced improved user interaction, higher engagement, and greater online visibility.",
    mediaAssets: [
      "Uploads/img3.jpeg",
      "Uploads/img1.jpeg",
      "Uploads/kings.png",
      "Uploads/momiji2.png",
      "Uploads/video2.mp4",
    ],
  },
  {
    image: "Uploads/kansai2.jpg",
    title: "Kansai International Japanese Language Center",
    subtitle: "Japanese Language Center",
    description:
      "This website was developed for Kansai International Japanese Language Center to help streamline student access to course details, application forms, and learning materials. The UI was designed to reflect modern minimalism, supporting both native and international users looking to learn Japanese and pursue education in Japan.",
    tags: ["UX/UI Design", "Poster Design", "Mobile Responsive Application"],
    year: "2025",
    height: 500,
    category: "Websites",
    longDescription:
      "This extended description elaborates how we helped Kansai International Japanese Language Center grow its digital presence using tailored design and technology solutions.",
    challenge:
      "Kansai International Japanese Language Center lacked a scalable and modern digital presence.",
    solution:
      "We developed a responsive platform with a focus on user experience, performance, and accessibility for Kansai International Japanese Language Center.",
    result:
      "Kansai International Japanese Language Center experienced improved user interaction, higher engagement, and greater online visibility.",
    mediaAssets: [
      "Uploads/kansai_1.jpg",
      "Uploads/kansai_2.png",
      "Uploads/kansai_demo.mp4",
    ],
  },
  {
    image: "Uploads/kings.png",
    title: "King Motors Pvt. Ltd",
    subtitle: "Premimum Cars Showroom",
    description:
      "We built a powerful web platform for King Motors Pvt. Ltd, enabling them to list their reconditioned car inventory with full specs, real-time updates, and customer support. The platform includes a search and filter system to improve browsing, making the car-buying process smoother for users.",
    tags: ["Inventory Management System", "E-commerce", "Poster Design"],
    year: "2025",
    height: 350,
    category: "Websites",
    longDescription:
      "This extended description elaborates how we helped King Motors Pvt. Ltd grow its digital presence using tailored design and technology solutions.",
    challenge:
      "King Motors Pvt. Ltd lacked a scalable and modern digital presence.",
    solution:
      "We developed a responsive platform with a focus on user experience, performance, and accessibility for King Motors Pvt. Ltd.",
    result:
      "King Motors Pvt. Ltd experienced improved user interaction, higher engagement, and greater online visibility.",
    mediaAssets: [
      "Uploads/king_1.jpg",
      "Uploads/king_2.png",
      "Uploads/king_demo.mp4",
    ],
  },
  {
    image: "Uploads/ns.jpg",
    title: "NS Automobile Pvt. Ltd",
    subtitle: "Certified Auto Dealership – New & Pre-Owned",
    description:
      "For NS Automobile Pvt. Ltd, a leading reconditioned car showroom, we delivered a comprehensive digital presence through strategic digital marketing campaigns, visually engaging posters, motion graphics content, and cohesive branding solutions. Our work enhanced their brand visibility and positioned them more competitively in the automotive retail market.",
    tags: ["Poster Design", "Digital Marketing", "Motion Graphics", "Branding"],
    year: "2025",
    height: 350,
    category: ["Branding"],
    longDescription:
      "This extended description elaborates how we helped NS Automobile Pvt. Ltd grow its digital presence using tailored design and technology solutions.",
    challenge:
      "NS Automobile Pvt. Ltd lacked a scalable and modern digital presence.",
    solution:
      "We developed a responsive platform with a focus on user experience, performance, and accessibility for NS Automobile Pvt. Ltd.",
    result:
      "NS Automobile Pvt. Ltd experienced improved user interaction, higher engagement, and greater online visibility.",
    mediaAssets: [
      "Uploads/ns_1.jpg",
      "Uploads/ns_2.png",
      "Uploads/ns_demo.mp4",
    ],
  },
  {
    image: "Uploads/doller.jpg",
    title: "Doller Sewa",
    subtitle: "Digital Services Platform",
    description:
      "Doller Sewa is an affordable digital service provider catering to small businesses and freelancers. We developed a multi-service platform where users can order design, social media, and web development packages with easy navigation, a built-in messaging system, and integrated payment options.",
    tags: ["E-commerce", "Digital Platform"],
    year: "2025",
    height: 450,
    category: "Websites",
    longDescription:
      "This extended description elaborates how we helped Doller Sewa grow its digital presence using tailored design and technology solutions.",
    challenge: "Doller Sewa lacked a scalable and modern digital presence.",
    solution:
      "We developed a responsive platform with a focus on user experience, performance, and accessibility for Doller Sewa.",
    result:
      "Doller Sewa experienced improved user interaction, higher engagement, and greater online visibility.",
    mediaAssets: [
      "Uploads/doller_1.jpg",
      "Uploads/doller_2.png",
      "Uploads/doller_demo.mp4",
    ],
  },
  {
    image: "Uploads/omni2.png",
    title: "Omni Global International Educational Consultancy",
    subtitle: "Educational Consultancy",
    description:
      "Omni Global offers expert guidance for students aiming to study in Japan. We developed a consultancy platform that simplifies the process of university selection, application, visa processing, and document submission. The website is fully mobile-optimized and includes a content management dashboard for easy updates.",
    tags: ["Mobile Responsive Application"],
    year: "2025",
    height: 380,
    category: "Websites",
    longDescription:
      "This extended description elaborates how we helped Omni Global Consultancy establish a smooth digital onboarding experience for students planning to study in Japan.",
    challenge:
      "Omni Global lacked a centralized digital platform for guiding students through the consultation and application process.",
    solution:
      "We delivered a mobile-optimized website with user-friendly content management and step-by-step guidance workflows.",
    result:
      "Omni Global observed improved inquiry rates and better engagement across all student touchpoints.",
    mediaAssets: [
      "Uploads/omni_1.jpg",
      "Uploads/omni_2.png",
      "Uploads/omni_demo.mp4",
    ],
  },
  {
    image: "Uploads/ghar.jpg",
    title: "Ghar Sansar Pvt. Ltd",
    subtitle: "Hardware & Home Essentials Supplier",
    description:
      "For Ghar Sansar Pvt. Ltd, we built a sleek e-commerce website for showcasing their home improvement products. The platform includes a social-commerce-ready catalog, custom UI/UX for easier ordering, and responsive design for customers browsing on mobile devices.",
    tags: ["UX/UI Design", "Social Commerce", "Mobile Responsive Application"],
    year: "2025",
    height: 380,
    category: "Designing",
    longDescription:
      "This extended description outlines how we helped Ghar Sansar create a professional and scalable digital commerce experience for home and lifestyle products.",
    challenge:
      "Ghar Sansar faced limitations selling their products without a proper e-commerce presence.",
    solution:
      "We developed a responsive e-commerce site with product filtering, easy ordering, and mobile-first design.",
    result:
      "Ghar Sansar experienced growth in online orders and reduced dependency on physical foot traffic.",
    mediaAssets: [
      "Uploads/ghar_1.jpg",
      "Uploads/ghar_2.png",
      "Uploads/ghar_demo.mp4",
    ],
  },
  {
    image: "Uploads/nisani.jpg",
    title: "Nisani Educational Consultancy Pvt. Ltd",
    subtitle: "Japan-Focused Educational Consultancy",
    description:
      "Nisani Educational Consultancy specializes in helping students navigate the Japanese education system. Our team created a clean, accessible platform showcasing available language programs, university guidance, document checklists, and a contact system for one-on-one counseling support.",
    tags: ["Poster and Motion Graphics", "Mobile Responsive Application"],
    year: "2025",
    height: 380,
    category: "Websites",
    longDescription:
      "We supported Nisani Consultancy with a visually clear, mobile-friendly education portal tailored to students interested in Japan-based learning.",
    challenge:
      "They lacked a comprehensive website to communicate their services and application processes clearly.",
    solution:
      "We delivered a responsive, easily navigable platform with downloadable forms, language program details, and contact options.",
    result:
      "Nisani experienced increased student registrations and more streamlined inquiries.",
    mediaAssets: [
      "Uploads/nisani_1.jpg",
      "Uploads/nisani_2.png",
      "Uploads/nisani_demo.mp4",
    ],
  },
  {
    image: "Uploads/sanskar.jpg",
    title: "Sanskar Academy",
    subtitle: "Vastu Related Classes & Training Center",
    description:
      "We created a modern digital presence for Sanskar Academy, a consultancy helping students pursue higher studies and training programs in Japan. The platform includes visual storytelling through posters and motion content, along with informative sections on Japanese culture, language courses, and visa steps.",
    tags: ["Poster and Graphics Design", "Ads and Motion Graphics"],
    year: "2025",
    height: 380,
    category: "Designing",
    longDescription:
      "Sanskar Academy approached us to revamp their brand identity digitally with a strong visual narrative and easy-to-access information.",
    challenge:
      "Their existing platform lacked visual consistency and failed to attract modern learners.",
    solution:
      "We delivered a vibrant UI with animated motion assets, structured training details, and CTA-driven layouts.",
    result:
      "Sanskar Academy witnessed better lead generation and stronger brand recall among students and parents.",
    mediaAssets: [
      "Uploads/sanskar_1.jpg",
      "Uploads/sanskar_2.png",
      "Uploads/sanskar_demo.mp4",
    ],
  },
  {
    image: "Uploads/namodebi.jpg",
    title: "Navadebi Jewellers",
    subtitle: "Jewelry Retailer",
    description:
      "Navadebi Jewellers needed a stylish yet functional site to showcase their traditional and modern collections. We designed a responsive product gallery, added inquiry and appointment booking features, and optimized it for mobile shoppers with clean UI and bold visuals.",
    tags: ["UX/UI Design", "Mobile Responsive Application"],
    year: "2025",
    height: 380,
    category: "Websites",
    longDescription:
      "To elevate their online presence, Navadebi Jewellers wanted a polished digital showcase of their gold and diamond collections.",
    challenge:
      "They lacked a compelling platform to attract younger digital-native buyers.",
    solution:
      "We crafted a modern gallery-first website with booking forms, inquiry options, and performance optimization for mobile.",
    result:
      "Navadebi Jewellers saw a noticeable rise in product inquiries and client walk-ins through online appointments.",
    mediaAssets: [
      "Uploads/navadebi_1.jpg",
      "Uploads/navadebi_2.png",
      "Uploads/navadebi_demo.mp4",
    ],
  },
];

function Cursor({ isVisible, position, text }) {
  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-30 bg-black text-white px-4 py-2 text-sm font-medium"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
      {text}
    </motion.div>
  );
}

function ProjectCard({ project, index, onHover, onLeave, onClick }) {
  return (
    <motion.div
      className="group relative flex flex-col break-inside-avoid mb-12 group"
      layoutId={`card-container-${project.title}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <motion.div
        className="relative overflow-hidden shadow-lg cursor-none rounded-xl"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={onClick}
        layoutId={`card-image-${project.title}`}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
          style={{ height: project.height }}
          layoutId={`image-${project.title}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
          <div className="flex flex-wrap gap-1 mb-2">
            {project.tags.slice(0, 2).map((tag, tagIndex) => (
              <div className="absolute bottom-2 left-6 right-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags &&
                    project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-black/70 backdrop-blur-sm text-xs rounded-full text-white"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
                {/* Description */}
                <p className="text-white text-md font-light leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <div className="mt-4 px-2">
        <motion.h3
          className="text-lg md:text-xl font-semibold text-gray-900 line-clamp-2"
          layoutId={`title-${project.title}`}
        >
          {project.title}
        </motion.h3>
        <div className="w-8 h-1 bg-black/40 rounded-full mt-2 transition-all duration-500 ease-in-out group-hover:w-16 group-hover:bg-black"></div>
      </div>
    </motion.div>
  );
}

export default function AllProjects() {
  const [cursorState, setCursorState] = useState({
    isVisible: false,
    position: { x: 0, y: 0 },
    text: "View Project",
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const [activeCategory, setActiveCategory] = useState("All");

  // Calculate categories with counts
  const categories = useMemo(() => {
    const categoryCount = projectsData.reduce((acc, project) => {
      const categories = Array.isArray(project.category)
        ? project.category
        : [project.category];

      categories.forEach((cat) => {
        acc[cat] = (acc[cat] || 0) + 1;
      });

      return acc;
    }, {});

    return [
      { name: "All", count: projectsData.length },
      ...Object.entries(categoryCount).map(([name, count]) => ({
        name,
        count,
      })),
    ];
  }, []);

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projectsData;
    }
    return projectsData.filter((project) => {
      const categories = Array.isArray(project.category)
        ? project.category
        : [project.category];
      return categories.includes(activeCategory);
    });
  }, [activeCategory]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorState((prev) => ({
        ...prev,
        position: { x: e.clientX, y: e.clientY },
      }));
    };

    if (cursorState.isVisible) {
      document.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorState.isVisible]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const handleMouseEnter = () => {
    setCursorState((prev) => ({ ...prev, isVisible: true }));
    document.body.style.cursor = "none";
  };

  const handleMouseLeave = () => {
    setCursorState((prev) => ({ ...prev, isVisible: false }));
    document.body.style.cursor = "auto";
  };

  const handleProjectClick = (project, index) => {
    setSelectedProject(project);
    setSelectedIndex(index);
    document.body.style.cursor = "auto";
    setCursorState((prev) => ({ ...prev, isVisible: false }));
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setSelectedIndex(null);
  };

  const handleCategoryChange = (categoryName) => {
    setActiveCategory(categoryName);
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    if (selectedProject) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  function SmallerCategories() {
    return <></>;
  }
  return (
    <div className="container mx-auto px-6 py-20 min-h-screen relative">
      <div className="mb-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="flex-1">
          <div className="text-4xl md:text-6xl text-gray-900 mb-4">
            Our{" "}
            <span className="logo bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-bold">
              Projects
            </span>
          </div>
          <div className="max-w-2xl text-lg md:text-xl font-extralight text-gray-600">
            Showcasing our collection of ideas that we've brought to life —
            crafted with strategy, creativity, and purpose.
          </div>
        </div>

        {/* Categories */}
        <div className="lg:ml-8">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                onClick={() => handleCategoryChange(category.name)}
                className={`flex items-center justify-between w-full text-left transition-all duration-300 group ${
                  activeCategory === category.name
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text"
                    : "text-gray-700 hover:text-gray-900"
                }`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-medium">{category.name}</span>
                <motion.span
                  className={`ml-20 px-2 py-1 rounded-full  text-md font-semibold minw-[24px] text-center ${
                    activeCategory === category.name
                      ? "bg-white/20"
                      : "text-gray-600"
                  }`}
                  layout
                >
                  {category.count}
                </motion.span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {windowWidth >= 768 && (
        <AnimatePresence>
          <Cursor
            isVisible={cursorState.isVisible}
            position={cursorState.position}
            text={cursorState.text}
          />
        </AnimatePresence>
      )}

      {/* Masonry Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-0"
          style={{ columnFill: "balance" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${activeCategory}`}
              project={project}
              index={index}
              onHover={handleMouseEnter}
              onLeave={handleMouseLeave}
              onClick={() => handleProjectClick(project, index)}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Modal */}
      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Modal Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[9998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleCloseModal}
            />

            {/* Modal Content */}
            <motion.div
              className="fixed inset-0 z-[9999] overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close button */}
              <motion.button
                className="fixed top-6 right-6 z-[10000] text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-white/10 backdrop-blur-sm"
                onClick={handleCloseModal}
                initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>

              <div className="min-h-screen flex flex-col">
                {/* Hero Section */}
                <div className="flex-1 flex items-center justify-center p-6 md:p-8">
                  <div className="max-w-7xl w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                      {/* Image */}
                      <motion.div
                        className="relative overflow-hidden rounded-2xl shadow-2xl"
                        layoutId={`card-image-${selectedProject.title}`}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        <motion.img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                          layoutId={`image-${selectedProject.title}`}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </motion.div>

                      {/* Content */}
                      <div className="text-white space-y-6">
                        <motion.div
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                        >
                          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                            <span className="bg-white/10 px-2 py-1 rounded">
                              {selectedProject.year}
                            </span>
                            <span>•</span>
                            <span>{selectedProject.title}</span>
                          </div>

                          <motion.h1
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
                            layoutId={`title-${selectedProject.title}`}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                          >
                            {selectedProject.title}
                          </motion.h1>

                          <motion.p
                            className="text-lg md:text-xl text-gray-300 mb-6"
                            layoutId={`subtitle-${selectedProject.title}`}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                          >
                            {selectedProject.subtitle}
                          </motion.p>
                        </motion.div>

                        {/* Short Description */}
                        <motion.p
                          className="text-base md:text-lg text-gray-200 leading-relaxed"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 0.6 }}
                        >
                          {selectedProject.description}
                        </motion.p>

                        {/* Tags */}
                        <motion.div
                          className="flex flex-col"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7, duration: 0.6 }}
                        >
                          {/* <div className="mb-3">What we did:</div> */}
                          <div className="flex items-center gap-2 flex-wrap">
                            {selectedProject.tags.map((tag, tagIndex) => (
                              <motion.span
                                key={tagIndex}
                                className="px-3 py-1 bg-white/10 text-white rounded-full text-sm backdrop-blur-sm border border-white/20"
                                whileHover={{
                                  scale: 1.05,
                                  backgroundColor: "rgba(255,255,255,0.2)",
                                }}
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Challenge / Solution / Result */}
                <motion.div
                  className="bg-white/5 backdrop-blur-sm p-6 md:p-8 border-t border-white/10"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                >
                  <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-white">
                      {["challenge", "solution", "result"].map(
                        (key, i) =>
                          selectedProject[key] && (
                            <motion.div
                              key={key}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                delay: 1.3 + i * 0.1,
                                duration: 0.6,
                              }}
                            >
                              <h3
                                className={`text-lg font-semibold mb-3 ${
                                  key === "challenge"
                                    ? "text-purple-400"
                                    : key === "solution"
                                    ? "text-blue-400"
                                    : "text-green-400"
                                }`}
                              >
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                              </h3>
                              <p className="text-gray-300 text-sm md:text-base">
                                {selectedProject[key]}
                              </p>
                            </motion.div>
                          )
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Media Assets Section */}
                {selectedProject.mediaAssets?.length > 0 && (
                  <motion.div
                    className="bg-white/5 backdrop-blur-sm py-10 px-6 md:px-10 border-t border-white/10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7, duration: 0.6 }}
                  >
                    <motion.div
                      className="container mx-auto flex flex-col gap-6 mb-12"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55, duration: 0.6 }}
                    >
                      {selectedProject.longDescription && (
                        <motion.div
                          className="space-y-6 container mx-auto px-4 md:px-6 py-8 bg-black/40 backdrop-blur rounded-2xl shadow-lg"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                        >
                          {/* Main Heading */}
                          <motion.h2
                            className="text-2xl md:text-3xl font-bold text-white"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                          >
                            Works for {selectedProject.title}
                          </motion.h2>

                          {/* Section 1: About the Client */}
                          <motion.div
                            className="space-y-2"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                          >
                            <h3 className="text-lg md:text-xl font-bold text-gray-300">
                              About Momiji International Academy
                            </h3>
                            <p className="text-base md:text-lg text-gray-200 leading-relaxed text-justify">
                              {selectedProject.longDescription}
                            </p>
                          </motion.div>

                          {/* Section 2: What We Did */}
                          <motion.div
                            className="space-y-2"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                          >
                            <h3 className="text-lg md:text-xl font-bold text-gray-300">
                              Our Approach & Solution
                            </h3>
                            <p className="text-base md:text-lg text-gray-200 leading-relaxed text-justify">
                              {selectedProject.longDescription2}
                            </p>
                          </motion.div>

                          {/* Section 3: Outcome */}
                          <motion.div
                            className="space-y-2"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                          >
                            <h3 className="text-lg md:text-xl font-bold text-gray-300">
                              Results & Impact
                            </h3>
                            <p className="text-base md:text-lg text-gray-200 leading-relaxed text-justify">
                              {selectedProject.longDescription3}
                            </p>
                          </motion.div>
                        </motion.div>
                      )}

                      {/* Tags */}
                      <motion.div
                        className="flex flex-col"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                      >
                        <div className="mb-3 text-lg md:text-xl mt-4 font-bold text-white">
                          What we did:
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          {selectedProject.tags.map((tag, tagIndex) => (
                            <motion.span
                              key={tagIndex}
                              className="px-3 py-1 bg-white/10 text-white rounded-full text-sm backdrop-blur-sm border border-white/20"
                              whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(255,255,255,0.2)",
                              }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                    <div className="max-w-7xl mx-auto">
                      <h2 className="text-white text-2xl md:text-3xl  font-bold mb-6">
                        Project Visuals & Media
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {selectedProject.mediaAssets.map((media, i) =>
                          media.endsWith(".mp4") ? (
                            <video
                              key={i}
                              src={media}
                              autoPlay
                              muted
                              loop
                              playsInline
                              className="rounded-lg w-full h-auto max-h-[300px] object-cover"
                            />
                          ) : (
                            <img
                              key={i}
                              src={media}
                              alt={`media-${i}`}
                              className="rounded-lg w-full h-auto max-h-[300px] object-cover"
                            />
                          )
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

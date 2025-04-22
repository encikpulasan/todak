import { useEffect, useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

// Define the slide content based on investor_pitch.md
const slides = [
  {
    id: "intro",
    title: "EduPath Malaysia",
    subtitle: "Connecting Education to Careers",
    content: "",
    className: "bg-gradient-to-br from-blue-600 to-indigo-700 text-white",
    image: "/images/edupath-logo-large.svg",
    imageAlt: "EduPath Malaysia Logo",
    imageClass:
      "w-64 h-64 mx-auto mt-8 animate__animated animate__fadeIn animate__delay-1s",
  },
  {
    id: "problem",
    title: "The Opportunity",
    subtitle: "Problem",
    content: [
      "Malaysian secondary students face critical educational decision-making challenges",
      "Limited guidance for subject selection and career planning",
      "Disconnect between education and employment market needs",
      "Fragmented information about post-SPM pathways",
      "Parents lack access to current job market data",
    ],
    className: "bg-white dark:bg-gray-800",
    image: "/images/educational-challenges.svg",
    imageAlt: "Students facing educational decision challenges",
    imageClass:
      "w-full mx-auto animate__animated animate__fadeIn animate__delay-2s",
  },
  {
    id: "market",
    title: "The Opportunity",
    subtitle: "Market Size",
    content: [
      "2 million+ secondary school students in Malaysia",
      "400,000+ students making post-SPM choices yearly",
      "1,000+ higher education institutions nationwide",
      "Growing demand for TVET graduates (1.3 million projected need)",
    ],
    className: "bg-blue-50 dark:bg-gray-900",
    image: "/images/market-size-chart.svg",
    imageAlt: "Malaysian education market size chart",
    imageClass:
      "w-full mx-auto animate__animated animate__fadeIn animate__delay-2s",
  },
  {
    id: "solution",
    title: "The Opportunity",
    subtitle: "Solution: EduPath Malaysia",
    content: [
      "Comprehensive digital platform connecting education and careers",
      "Personalized educational pathway recommendations",
      "Subject-career connections visualization",
      "Multi-stakeholder approach involving students, parents, and educators",
      "Real-time job market insights",
    ],
    className: "bg-white dark:bg-gray-800",
    image: "/images/platform-preview.svg",
    imageAlt: "EduPath platform preview",
    imageClass:
      "w-full mx-auto animate__animated animate__fadeIn animate__delay-2s",
  },
  {
    id: "value-prop",
    title: "Our Unique Value Proposition",
    subtitle: "Key Differentiators",
    content: [
      "<strong>Subject-Career Pathway Visualizer</strong>: </br>Interactive tool showing connections between subjects and career paths",
      "<strong>Alumni Testimonial System</strong>: </br>Authentic, experience-based insights unavailable elsewhere",
      "<strong>Malaysian-specific Context</strong>: </br>Tailored to local educational system and job market",
      "<strong>TVET Pathway Emphasis</strong>: </br>Highlighting technical education alongside traditional academic routes",
    ],
    className: "bg-blue-50 dark:bg-gray-900",
    image: "/images/pathway-visualizer.svg",
    imageAlt: "Subject-Career Pathway Visualizer example",
    imageClass:
      "w-full mx-auto animate__animated animate__fadeIn animate__delay-2s",
  },
  {
    id: "competition",
    title: "Our Unique Value Proposition",
    subtitle: "Competitive Landscape",
    content: [
      "No current solution integrates early subject selection guidance with career pathway visualization",
      "Existing products focus either on university applications OR career guidance, not both",
      "EduPath Malaysia is the first platform to connect all stakeholders in a unified ecosystem",
    ],
    className: "bg-white dark:bg-gray-800",
    image: "/images/competitive-landscape.svg",
    imageAlt: "Competitive landscape comparison chart",
    imageClass:
      "w-full mx-auto animate__animated animate__fadeIn animate__delay-2s",
  },
  {
    id: "business-model",
    title: "Business Model",
    subtitle: "Multiple Revenue Streams",
    content: [
      "<strong>1. Freemium Model</strong><br>• Basic features free for all users<br>• Premium features via tiered subscription",
      "<strong>2. Institutional Subscriptions</strong><br>• School-wide access packages<br>• Administrator dashboards and analytics",
      "<strong>3. Advertising</strong><br>• Ethical promotion of educational programs<br>• Targeted scholarship opportunities",
      "<strong>4. Corporate Partnerships</strong><br>• Early talent pipeline access<br>• Industry-specific insights",
      "<strong>5. Data Insights</strong><br>• Anonymized trend data for institutions<br>• Labor market intelligence",
    ],
    className: "bg-blue-50 dark:bg-gray-900",
    image: "/images/revenue-streams.svg",
    imageAlt: "Revenue streams diagram",
    imageClass:
      "w-full mx-auto animate__animated animate__fadeIn animate__delay-2s",
  },
  {
    id: "roadmap",
    title: "Development Roadmap",
    subtitle: "Phased Implementation (36 months)",
    content: [
      "<strong>Research & Foundation</strong> (0-6 months)<br>• Initial partnerships and data framework<br>• User research and prototype development",
      "<strong>MVP Development</strong> (7-12 months)<br>• Core features implementation<br>• Alpha/beta testing with select institutions",
      "<strong>Platform Launch</strong> (13-24 months)<br>• Public release and marketing campaign<br>• Expansion to cover 50% of institutions",
      "<strong>Feature Expansion</strong> (25-36 months)<br>• Advanced analytics and visualization tools<br>• AI-powered guidance and recommendation systems",
    ],
    className: "bg-white dark:bg-gray-800",
    image: "/images/development-roadmap.svg",
    imageAlt: "Development roadmap timeline",
    imageClass:
      "w-full mx-auto animate__animated animate__fadeIn animate__delay-2s",
  },
  {
    id: "investment",
    title: "Investment Opportunity",
    subtitle: "Funding Requirements",
    specialContent: "table",
    tableData: {
      headers: ["Phase", "Timeline", "Amount (MYR)", "Primary Use"],
      rows: [
        ["Seed", "Current", "1-2M", "Research, Foundation & MVP"],
        ["Series A", "12-18 months", "5-8M", "Launch & Initial Scaling"],
        ["Series B", "24-30 months", "10-15M", "Expansion & Enhancement"],
      ],
    },
    content: [
      "<strong>Use of Funds</strong>",
      "40% - Product Development & Engineering",
      "25% - Data Acquisition & Partnerships",
      "20% - Marketing & User Acquisition",
      "15% - Operations & Administration",
    ],
    className: "bg-blue-50 dark:bg-gray-900",
    image: "/images/funding-allocation.svg",
    imageAlt: "Funding allocation pie chart",
    imageClass:
      "w-full mx-auto animate__animated animate__fadeIn animate__delay-2s",
    imagePosition: "right",
  },
  {
    id: "returns",
    title: "Returns & Benefits",
    subtitle: "Investor Returns",
    content: [
      "Path to profitability by month 30",
      "Multiple exit strategies within 5-7 years:",
      "Acquisition by educational technology companies",
      "Strategic sale to educational publishers",
      "Expansion to other ASEAN markets",
    ],
    className: "bg-white dark:bg-gray-800",
    image: "/images/growth-projection.svg",
    imageAlt: "Growth projection graph",
    imageClass:
      "w-full mx-auto animate__animated animate__fadeIn animate__delay-2s",
  },
  {
    id: "early-investor",
    title: "Returns & Benefits",
    subtitle: "Early Investor Benefits",
    specialContent: "table",
    tableData: {
      headers: ["Tier", "Investment (MYR)", "Key Benefits"],
      rows: [
        [
          "Seed Supporter",
          "100K-500K",
          "15-20% equity discount, quarterly advisory sessions",
        ],
        [
          "Growth Partner",
          "500K-2M",
          "10-15% equity discount, observer seat in strategic meetings",
        ],
        [
          "Strategic Ally",
          "2M-5M",
          "Board seat consideration, custom data dashboard",
        ],
        [
          "Anchor Investor",
          "5M+",
          "Guaranteed board representation, right of first refusal for future rounds",
        ],
      ],
    },
    className: "bg-blue-50 dark:bg-gray-900",
    image: "/images/investor-benefits.svg",
    imageAlt: "Investor benefits comparison",
    imageClass:
      "w-full mx-auto animate__animated animate__fadeIn animate__delay-2s",
  },
  {
    id: "team",
    title: "Team & Advisors",
    subtitle: "Leadership Team",
    content: [
      "<strong>[Founder Name]</strong>: Education technology expert with [X] years experience",
      "<strong>[Co-Founder Name]</strong>: Background in Malaysian education system and policy",
      "<strong>[Technical Lead]</strong>: [X] years developing data-driven educational platforms",
    ],
    secondarySubtitle: "Strategic Advisors",
    secondaryContent: [
      "<strong>[Advisor Name]</strong>: Former Ministry of Education official",
      "<strong>[Advisor Name]</strong>: Higher education institution leadership",
      "<strong>[Advisor Name]</strong>: Industry connection to employment sectors",
    ],
    className: "bg-white dark:bg-gray-800",
    image: "/images/team-structure.svg",
    imageAlt: "Team structure and expertise",
    imageClass:
      "w-full mx-auto animate__animated animate__fadeIn animate__delay-2s",
  },
  {
    id: "impact",
    title: "Social Impact",
    subtitle: "Beyond Financial Returns",
    content: [
      "Empowering informed educational decisions for Malaysian youth",
      "Addressing skills mismatch in Malaysian employment market",
      "Increasing awareness and adoption of TVET pathways",
      "Creating data-driven educational planning ecosystem",
      "Supporting national educational and workforce development goals",
    ],
    secondarySubtitle: "Measurable Impact Metrics",
    secondaryContent: [
      "Student decision satisfaction rates",
      "Career pathway alignment improvements",
      "TVET adoption increases",
      "Institution-student matching optimization",
      "Employment outcomes for platform users",
    ],
    className: "bg-blue-50 dark:bg-gray-900",
    image: "/images/social-impact.svg",
    imageAlt: "Social impact visualization",
    imageClass:
      "w-full mx-auto animate__animated animate__fadeIn animate__delay-2s",
  },
  {
    id: "next-steps",
    title: "Next Steps",
    subtitle: "Immediate Opportunities",
    content: [
      "Join our early investor group with tier-based benefits",
      "Participate in upcoming development workshops",
      "Connect us with potential educational institution partners",
      "Schedule a detailed walkthrough of our technical architecture",
    ],
    secondarySubtitle: "Contact",
    secondaryContent: [
      "<strong>Email</strong>: contact@edupathmalaysia.com",
      "<strong>Phone</strong>: +60-XX-XXX-XXXX",
      "<strong>Website</strong>: www.edupathmalaysia.com",
    ],
    className: "bg-white dark:bg-gray-800",
    image: "/images/next-steps.svg",
    imageAlt: "Next steps roadmap",
    imageClass:
      "w-full mx-auto animate__animated animate__fadeIn animate__delay-2s",
  },
  {
    id: "closing",
    title: "",
    subtitle: "",
    content: [
      "<em>\"EduPath Malaysia: Guiding today's educational choices toward tomorrow's career success\"</em>",
    ],
    className: "bg-gradient-to-br from-blue-600 to-indigo-700 text-white",
    image: "/images/edupath-logo-white.svg",
    imageAlt: "EduPath Malaysia Logo",
    imageClass:
      "w-40 h-40 mx-auto mt-8 animate__animated animate__pulse animate__infinite",
  },
];

export default function InvestorPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const totalSlides = slides.length;

  // Preload all images once the component mounts
  useEffect(() => {
    if (!IS_BROWSER) return;

    // Create an array of all image URLs used in slides
    const imageUrls = slides
      .map((slide) => slide.image)
      .filter((url): url is string => !!url);

    let loadedCount = 0;
    const totalImages = imageUrls.length;

    console.log(`Starting to preload ${totalImages} images`);

    const loadImage = (url: string) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          console.log(`Loaded image ${loadedCount}/${totalImages}: ${url}`);
          resolve();
        };
        img.onerror = (err) => {
          console.error(`Failed to load image: ${url}`, err);
          // Still increment counter and resolve promise to continue loading other images
          loadedCount++;
          resolve();
        };
        img.src = url;
      });
    };

    // Load all images concurrently
    Promise.all(imageUrls.map(loadImage))
      .then(() => {
        console.log("All images loaded successfully");
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.error("Error loading images:", error);
        // Set images as loaded anyway so placeholders aren't shown forever
        setImagesLoaded(true);
      });
  }, []);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1 && !isAnimating) {
      setIsAnimating(true);
      setAnimationClass("animate__animated animate__fadeOutLeft");
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
        setAnimationClass("animate__animated animate__fadeInRight");
        // Force a repaint to ensure animations restart
        setTimeout(() => {
          const animElements = document.querySelectorAll(".animate__animated");
          animElements.forEach((el) => {
            el.classList.remove("animate__animated");
            void (el as HTMLElement).offsetWidth; // Trigger reflow
            el.classList.add("animate__animated");
          });
          setIsAnimating(false);
        }, 500);
      }, 500);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0 && !isAnimating) {
      setIsAnimating(true);
      setAnimationClass("animate__animated animate__fadeOutRight");
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1);
        setAnimationClass("animate__animated animate__fadeInLeft");
        // Force a repaint to ensure animations restart
        setTimeout(() => {
          const animElements = document.querySelectorAll(".animate__animated");
          animElements.forEach((el) => {
            el.classList.remove("animate__animated");
            void (el as HTMLElement).offsetWidth; // Trigger reflow
            el.classList.add("animate__animated");
          });
          setIsAnimating(false);
        }, 500);
      }, 500);
    }
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlide && !isAnimating) {
      setIsAnimating(true);
      setAnimationClass("animate__animated animate__fadeOut");
      setTimeout(() => {
        setCurrentSlide(index);
        setAnimationClass("animate__animated animate__fadeIn");
        // Force a repaint to ensure animations restart
        setTimeout(() => {
          const animElements = document.querySelectorAll(".animate__animated");
          animElements.forEach((el) => {
            el.classList.remove("animate__animated");
            void (el as HTMLElement).offsetWidth; // Trigger reflow
            el.classList.add("animate__animated");
          });
          setIsAnimating(false);
        }, 500);
      }, 500);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (!IS_BROWSER) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlide, isAnimating]);

  const slide = slides[currentSlide];

  // Render table for special content type
  const renderTable = (tableData: { headers: string[]; rows: string[][] }) => {
    return (
      <div className="overflow-x-auto w-full mb-6">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              {tableData.headers.map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {tableData.rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0
                  ? "bg-white dark:bg-gray-800"
                  : "bg-gray-50 dark:bg-gray-900"}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Render image with placeholder or fallback
  const renderImage = (
    image: string | undefined,
    alt: string | undefined,
    className: string | undefined,
  ) => {
    if (!image) return null;

    // Using a placeholder if images haven't loaded yet or for development
    const imageSrc = imagesLoaded
      ? image
      : `https://via.placeholder.com/600x400?text=${
        encodeURIComponent(alt || "Loading...")
      }`;

    // For development: log image path to console
    if (IS_BROWSER) {
      console.log(`Attempting to load image: ${image}`);
    }

    // Add key with current slide to force re-render and animation restart
    return (
      <div className={className} key={`img-${currentSlide}-${image}`}>
        <img
          src={imageSrc}
          alt={alt || "Presentation illustration"}
          className="max-w-full h-auto object-contain"
          onLoad={(e) => {
            if (IS_BROWSER) {
              console.log(`Successfully loaded: ${image}`);
            }
          }}
          onError={(e) => {
            // Fallback to placeholder on error
            const target = e.target as HTMLImageElement;
            if (IS_BROWSER) {
              console.error(`Failed to load image: ${image}`);
            }
            target.src = `https://via.placeholder.com/600x400?text=${
              encodeURIComponent(alt || "Image Unavailable")
            }`;
          }}
        />
      </div>
    );
  };

  // Determine if we should render the image before or after the content
  const shouldRenderImageFirst = (slide: any) => {
    return slide.imagePosition === "top" || !slide.imagePosition;
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen overflow-hidden">
      {/* Top navigation bar */}
      <div className="w-full bg-blue-900 dark:bg-gray-900 text-white px-4 py-2 flex justify-between items-center shadow-lg z-10">
        <div className="font-bold text-xl">EduPath Malaysia</div>
        <div className="hidden sm:flex space-x-1">
          {slides.map((s, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                currentSlide === index
                  ? "bg-blue-300"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="text-sm">
          Slide {currentSlide + 1} of {totalSlides}
        </div>
      </div>

      {/* Main slide content */}
      <div
        className={`flex-grow w-full ${slide.className} ${animationClass} overflow-y-auto`}
      >
        <div className="container mx-auto px-8 py-16 min-h-full flex flex-col justify-center">
          {slide.title && (
            <h1
              className={`text-4xl md:text-5xl font-bold mb-2 ${
                slide.className.includes("text-white")
                  ? "text-white"
                  : "text-blue-900 dark:text-blue-100"
              } animate__animated animate__fadeInUp`}
            >
              {slide.title}
            </h1>
          )}

          {slide.subtitle && (
            <h2
              className={`text-2xl md:text-3xl font-semibold mb-8 ${
                slide.className.includes("text-white")
                  ? "text-blue-200"
                  : "text-blue-700 dark:text-blue-300"
              } animate__animated animate__fadeInUp animate__delay-1s`}
            >
              {slide.subtitle}
            </h2>
          )}

          <div
            className={`flex flex-col md:flex-row ${
              slide.imagePosition === "left" ? "md:flex-row-reverse" : ""
            } gap-8 items-center`}
          >
            {/* Content section */}
            <div className="flex-1 flex flex-col">
              {slide.specialContent === "table" && slide.tableData &&
                renderTable(slide.tableData)}

              {Array.isArray(slide.content) && (
                <div className="space-y-4 mb-8 max-w-4xl animate__animated animate__fadeInUp animate__delay-2s">
                  {slide.content.map((item, index) => (
                    <div
                      key={`content-${currentSlide}-${index}`}
                      className={`${
                        slide.className.includes("text-white")
                          ? "text-white"
                          : "text-gray-700 dark:text-gray-200"
                      } text-lg md:text-xl flex items-start`}
                    >
                      {!item.includes("<strong>") && !item.includes("<em>") &&
                        item.charAt(0) !== "•" && (
                        <>
                          <div className="text-blue-500 dark:text-blue-400 mr-3 text-xl">
                            •
                          </div>
                          <div dangerouslySetInnerHTML={{ __html: item }} />
                        </>
                      )}
                      {(item.includes("<strong>") || item.includes("<em>") ||
                        item.charAt(0) === "•") && (
                        <div dangerouslySetInnerHTML={{ __html: item }} />
                      )}
                    </div>
                  ))}
                </div>
              )}

              {slide.secondarySubtitle && (
                <h3
                  className={`text-xl md:text-2xl font-semibold mb-4 mt-8 ${
                    slide.className.includes("text-white")
                      ? "text-blue-200"
                      : "text-blue-700 dark:text-blue-300"
                  } animate__animated animate__fadeInUp animate__delay-3s`}
                >
                  {slide.secondarySubtitle}
                </h3>
              )}

              {Array.isArray(slide.secondaryContent) && (
                <div className="space-y-4 max-w-4xl animate__animated animate__fadeInUp animate__delay-3s">
                  {slide.secondaryContent.map((item, index) => (
                    <div
                      key={`content-${currentSlide}-${index}`}
                      className={`${
                        slide.className.includes("text-white")
                          ? "text-white"
                          : "text-gray-700 dark:text-gray-200"
                      } text-lg md:text-xl flex items-start`}
                    >
                      {!item.includes("<strong>") && !item.includes("<em>") &&
                        item.charAt(0) !== "•" && (
                        <>
                          <div className="text-blue-500 dark:text-blue-400 mr-3 text-xl">
                            •
                          </div>
                          <div dangerouslySetInnerHTML={{ __html: item }} />
                        </>
                      )}
                      {(item.includes("<strong>") || item.includes("<em>") ||
                        item.charAt(0) === "•") && (
                        <div dangerouslySetInnerHTML={{ __html: item }} />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Image section */}
            {slide.image && (
              <div className="md:w-1/2">
                {renderImage(slide.image, slide.imageAlt, slide.imageClass)}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom controls */}
      <div className="w-full bg-gray-100 dark:bg-gray-800 p-4 flex justify-between items-center shadow-lg z-10">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0 || isAnimating}
          className={`px-6 py-2 rounded-full flex items-center space-x-2 ${
            currentSlide === 0 || isAnimating
              ? "bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500"
              : "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>Previous</span>
        </button>

        <div className="space-x-1 hidden md:flex">
          {slides.map((s, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full ${
                currentSlide === index
                  ? "bg-blue-600"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1 || isAnimating}
          className={`px-6 py-2 rounded-full flex items-center space-x-2 ${
            currentSlide === totalSlides - 1 || isAnimating
              ? "bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500"
              : "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
          }`}
        >
          <span>Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

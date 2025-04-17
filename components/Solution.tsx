import { useEffect, useState } from "preact/hooks";
import { JobMarketChart } from "./JobMarketChart.tsx";
import { ChartLibLoader } from "./ChartLibLoader.tsx";

const stats = [
  { id: 1, name: "Public Universities", value: "20" },
  { id: 2, name: "Private Higher Ed Institutions", value: "103" },
  { id: 3, name: "TVET Institutions", value: "1,000+" },
  { id: 4, name: "TVET Students", value: "230,000" },
  { id: 5, name: "Polytechnics", value: "36" },
  { id: 6, name: "Community Colleges", value: "105" },
];

function PlatformChart() {
  const [chartLoaded, setChartLoaded] = useState(false);
  const [chartRendered, setChartRendered] = useState(false);

  useEffect(() => {
    if (!chartLoaded || typeof window === "undefined") return;

    // Create modern platform visualization with HTML/CSS instead of Chart.js
    setChartRendered(true);
  }, [chartLoaded]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-300 p-4">
      <ChartLibLoader onLoad={() => setChartLoaded(true)} />

      {chartLoaded
        ? (
          <div className="platform-chart">
            {/* Main Platform Box */}
            <div className="mx-auto max-w-3xl">
              {/* Platform Core */}
              <div className="bg-yellow-400 dark:bg-yellow-500 p-4 rounded-lg text-center font-bold shadow-lg mb-8 text-gray-800 dark:text-gray-900">
                EduPath Malaysia Platform
              </div>

              {/* Four main modules in a row */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="bg-blue-500 dark:bg-blue-600 p-3 rounded-lg text-center text-white shadow-md">
                  Educational Planning
                </div>
                <div className="bg-pink-500 dark:bg-pink-600 p-3 rounded-lg text-center text-white shadow-md">
                  Career & Market
                </div>
                <div className="bg-teal-500 dark:bg-teal-600 p-3 rounded-lg text-center text-white shadow-md">
                  Institution Database
                </div>
                <div className="bg-purple-500 dark:bg-purple-600 p-3 rounded-lg text-center text-white shadow-md">
                  Community Engagement
                </div>
              </div>

              {/* Features in a grid */}
              <div className="grid grid-cols-4 gap-4">
                {/* Educational Planning Features */}
                <div className="space-y-2">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded text-xs sm:text-sm text-blue-800 dark:text-blue-200 shadow">
                    Subject-Career Visualizer
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded text-xs sm:text-sm text-blue-800 dark:text-blue-200 shadow">
                    Personalized Roadmap
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded text-xs sm:text-sm text-blue-800 dark:text-blue-200 shadow">
                    Assessment Tools
                  </div>
                </div>

                {/* Career & Market Features */}
                <div className="space-y-2">
                  <div className="bg-pink-100 dark:bg-pink-900 p-2 rounded text-xs sm:text-sm text-pink-800 dark:text-pink-100 shadow flex items-center">
                    Job Market Insights
                  </div>
                  <div className="bg-pink-100 dark:bg-pink-900 p-2 rounded text-xs sm:text-sm text-pink-800 dark:text-pink-100 shadow">
                    Skills Gap Analysis
                  </div>
                  <div className="bg-pink-100 dark:bg-pink-900 p-2 rounded text-xs sm:text-sm text-pink-800 dark:text-pink-100 shadow">
                    Future Trends
                  </div>
                  <div className="bg-pink-100 dark:bg-pink-900 p-2 rounded text-xs sm:text-sm text-pink-800 dark:text-pink-100 shadow">
                    Salary Data
                  </div>
                </div>

                {/* Institution Database Features */}
                <div className="space-y-2">
                  <div className="bg-teal-100 dark:bg-teal-900 p-2 rounded text-xs sm:text-sm text-teal-800 dark:text-teal-200 shadow">
                    Institution Profiles
                  </div>
                  <div className="bg-teal-100 dark:bg-teal-900 p-2 rounded text-xs sm:text-sm text-teal-800 dark:text-teal-200 shadow flex items-center">
                    Program Details
                  </div>
                  <div className="bg-teal-100 dark:bg-teal-900 p-2 rounded text-xs sm:text-sm text-teal-800 dark:text-teal-200 shadow flex items-center">
                    Comparison Tools
                  </div>
                  <div className="bg-teal-100 dark:bg-teal-900 p-2 rounded text-xs sm:text-sm text-teal-800 dark:text-teal-200 shadow flex items-center">
                    TVET Showcase
                  </div>
                  <div className="bg-teal-100 dark:bg-teal-900 p-2 rounded text-xs sm:text-sm text-teal-800 dark:text-teal-200 shadow">
                    Scholarship
                  </div>
                </div>

                {/* Community Engagement Features */}
                <div className="space-y-2">
                  <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded text-xs sm:text-sm text-purple-800 dark:text-purple-200 shadow">
                    Forums
                  </div>
                  <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded text-xs sm:text-sm text-purple-800 dark:text-purple-200 shadow">
                    Expert Connect
                  </div>
                  <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded text-xs sm:text-sm text-purple-800 dark:text-purple-200 shadow">
                    Parent Portal
                  </div>
                  <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded text-xs sm:text-sm text-purple-800 dark:text-purple-200 shadow">
                    Alumni Testimonials
                  </div>
                  <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded text-xs sm:text-sm text-purple-800 dark:text-purple-200 shadow">
                    Mentorship Matching
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        : (
          <div className="overflow-auto">
            <pre className="font-mono text-xs text-gray-600 dark:text-gray-300 whitespace-pre">
{`┌───────────────────────────────────────────────────────────────────────────┐
  │                          EDUPATH MALAYSIA PLATFORM                        │
  └───────────────────────────────────────────────────────────────────────────┘
                                      │
    ┌───────────────────┬─────────────┴───────────────┬──────────────────┐
    │                   │                             │                  │
    ▼                   ▼                             ▼                  ▼
┌─────────────┐  ┌────────────────┐  ┌─────────────────────┐  ┌───────────────┐
│ EDUCATIONAL │  │   CAREER &     │  │    INSTITUTION      │  │   COMMUNITY   │
│   PLANNING  │  │   MARKET       │  │      DATABASE       │  │  ENGAGEMENT   │
└──────┬──────┘  └───────┬────────┘  └──────────┬──────────┘  └───────┬───────┘
       │                 │                      │                      │
       ▼                 ▼                      ▼                      ▼
┌───────────────┐ ┌─────────────────┐ ┌───────────────────────┐ ┌─────────────────┐
│• Subject-     │ │• Job Market     │ │• Institution Profiles │ │• Forums         │
│  Career       │ │  Insights       │ │• Program Details      │ │• Expert Connect │
│  Visualizer   │ │• Skills Gap     │ │• Comparison Tools     │ │• Parent Portal  │
│• Personalized │ │  Analysis       │ │• TVET Showcase        │ │• Alumni         │
│  Roadmap      │ │• Future Trends  │ │• Virtual Tours        │ │  Testimonials   │
│• Assessment   │ │• Salary Data    │ │• Scholarship Database │ │• Mentorship     │
│  Tools        │ │                 │ │                       │ │  Matching       │
└───────────────┘ └─────────────────┘ └───────────────────────┘ └─────────────────┘`}
            </pre>
          </div>
        )}
    </div>
  );
}

export function Solution() {
  const [isAnimated, setIsAnimated] = useState(false);

  // Set up the observer when component mounts using useEffect to ensure browser environment
  useEffect(() => {
    // Check if we're in a browser environment where IntersectionObserver is available
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) {
          setIsAnimated(true);
        }
      };

      const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      });

      const solutionElement = document.getElementById("solution");
      if (solutionElement) {
        observer.observe(solutionElement);
      }

      return () => {
        if (solutionElement) {
          observer.unobserve(solutionElement);
        }
      };
    } else {
      // Fallback for environments without IntersectionObserver (including SSR)
      setIsAnimated(true);
    }
  }, []);

  return (
    <section
      id="solution"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Solution: EduPath Malaysia
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            A comprehensive platform designed to provide personalized
            educational guidance, career pathway visualization, and centralized
            information.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Approach
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              EduPath Malaysia is a comprehensive mobile and web application
              designed to guide Malaysian secondary school students through
              educational decisions and career planning, serving as a
              centralized hub for information while providing personalized
              guidance.
            </p>

            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-2">
                  Personalized Guidance
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Assessment tools to identify student aptitudes and interests
                  with customized recommendations based on academic performance
                  and career goals.
                </p>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg border border-indigo-100 dark:border-indigo-800">
                <h4 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400 mb-2">
                  Centralized Information Hub
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Consolidated database of higher education institutions,
                  comprehensive listings of programs, and information on
                  scholarships and financial assistance.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg border border-purple-100 dark:border-purple-800">
                <h4 className="text-lg font-semibold text-purple-700 dark:text-purple-400 mb-2">
                  TVET Awareness
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Highlight technical and vocational pathways as viable
                  alternatives, showcasing success stories and career
                  progression through TVET.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="bg-gray-50 dark:bg-gray-800 px-4 py-6 rounded-lg text-center"
                >
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                    {stat.name}
                  </dt>
                  <dd className="mt-2 text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className={`transition-all duration-1000 ${
                isAnimated
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <PlatformChart />
            </div>

            <div
              className={`mt-6 transition-all duration-1000 delay-300 ${
                isAnimated
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300 dark:border-gray-700">
                  </div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-3 bg-white dark:bg-gray-900 text-lg font-medium text-gray-900 dark:text-white">
                    Competitive Advantage
                  </span>
                </div>
              </div>

              <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 transition-colors duration-300">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    EduPath Malaysia
                  </div>
                  <div className="text-sm text-green-600 dark:text-green-400 font-semibold">
                    Comprehensive
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Early Subject Selection Guidance
                      </span>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        Unique Feature
                      </span>
                    </div>
                    <div className="mt-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "100%" }}
                      >
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Real-time Job Market Insights
                      </span>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        Advanced
                      </span>
                    </div>
                    <div className="mt-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "90%" }}
                      >
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        TVET Pathway Showcase
                      </span>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        Industry Leading
                      </span>
                    </div>
                    <div className="mt-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "95%" }}
                      >
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Multi-stakeholder Access
                      </span>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        Comprehensive
                      </span>
                    </div>
                    <div className="mt-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "85%" }}
                      >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {
          /* <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Job Market Insights
          </h3>
          <p className="text-center max-w-3xl mx-auto mb-8 text-gray-600 dark:text-gray-300">
            EduPath Malaysia provides real-time data on job market demands and
            growth trends to help students make informed decisions about their
            educational pathways.
          </p>
          <JobMarketChart />
        </div> */
        }
      </div>
    </section>
  );
}

import { useState } from "preact/hooks";

type Feature = {
  id: number;
  name: string;
  description: string;
  icon: string;
  details: string[];
  color: string;
};

const features: Feature[] = [
  {
    id: 1,
    name: "Subject-Career Pathway Visualizer",
    description:
      "Interactive tool showing connections between elective subjects and potential career paths.",
    icon:
      "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
    details: [
      "Visual mapping of how subject combinations lead to specific post-secondary programs",
      "Filter system to explore careers based on interests, aptitudes, and market demand",
      "Real-time updates to reflect changing industry trends",
    ],
    color: "blue",
  },
  {
    id: 2,
    name: "Personalized Education Roadmap",
    description:
      "Assessment tools to evaluate student interests, strengths, and learning styles.",
    icon:
      "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2",
    details: [
      "AI-powered recommendation engine for subject selection based on career goals",
      "Customized post-SPM pathway suggestions aligned with student profiles",
      "Goal-setting and milestone tracking features",
    ],
    color: "indigo",
  },
  {
    id: 3,
    name: "Institution and Program Database",
    description:
      "Comprehensive catalog of Malaysian universities, colleges, and TVET institutions.",
    icon:
      "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    details: [
      "Detailed information on programs, entry requirements, tuition fees, and scholarships",
      "Advanced search and comparison tools for educational institutions",
      "Alumni success stories and employment statistics for each program",
    ],
    color: "purple",
  },
  {
    id: 4,
    name: "Job Market Insights Dashboard",
    description:
      "Real-time data visualizations of current and projected job market demands.",
    icon:
      "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    details: [
      "Salary information and employment rates by industry and profession",
      "Skills gap analysis for various careers in the Malaysian context",
      "Emerging industry trends and future job projections",
    ],
    color: "green",
  },
  {
    id: 5,
    name: "TVET Showcase",
    description:
      "Dedicated section highlighting technical and vocational education options.",
    icon:
      "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
    details: [
      "Virtual tours of TVET institutions and workshops",
      "TVET graduate profiles and success stories",
      "Industry partnership information and direct employment pathways",
    ],
    color: "amber",
  },
  {
    id: 6,
    name: "Community and Expert Connection",
    description:
      "Forums for students, parents, and educators to discuss educational pathways.",
    icon:
      "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    details: [
      "Virtual mentorship connections with industry professionals",
      "Live Q&A sessions with career counselors and university representatives",
      "Parent portal with resources to support educational decision-making",
    ],
    color: "pink",
  },
];

export function Features() {
  const [selectedFeature, setSelectedFeature] = useState<Feature>(features[0]);

  const getColorClass = (
    color: string,
    isBackground = false,
    isHover = false,
    isDark = false,
  ) => {
    const prefix = isBackground ? "bg" : isHover ? "hover:bg" : "text";
    const darkPrefix = isDark ? "dark:" : "";
    const shade = isBackground
      ? (isDark ? "-700" : "-500")
      : (isDark ? "-400" : "-600");
    return `${darkPrefix}${prefix}-${color}${shade}`;
  };

  return (
    <section
      id="features"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Core Features
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            EduPath Malaysia offers a comprehensive set of features designed to
            guide students through educational and career planning.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              onClick={() => setSelectedFeature(feature)}
              className={`relative rounded-xl border p-8 cursor-pointer transition-all duration-300 ${
                selectedFeature.id === feature.id
                  ? `border-${feature.color}-400 dark:border-${feature.color}-700 shadow-md`
                  : "border-gray-200 dark:border-gray-700 hover:shadow-md"
              } bg-white dark:bg-gray-700`}
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 ${
                  getColorClass(feature.color, true)
                } ${getColorClass(feature.color, true, false, true)}`}
              >
              </div>

              <div>
                <div
                  className={`inline-flex items-center justify-center rounded-md p-2 ${
                    getColorClass(feature.color, true, false, false)
                  } ${getColorClass(feature.color, true, false, true)}`}
                >
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div
            className={`transition-all duration-500 bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden border-t-4 ${
              getColorClass(selectedFeature.color, true)
            } ${getColorClass(selectedFeature.color, true, false, true)}`}
          >
            <div className="px-6 py-8">
              <div className="flex items-center">
                <div
                  className={`p-2 rounded-md ${
                    getColorClass(selectedFeature.color, true)
                  } ${getColorClass(selectedFeature.color, true, false, true)}`}
                >
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={selectedFeature.icon}
                    />
                  </svg>
                </div>
                <h3 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedFeature.name}
                </h3>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
                  Key Benefits
                </h4>
                <ul className="space-y-4">
                  {selectedFeature.details.map((detail, index) => (
                    <li key={index} className="flex">
                      <div
                        className={`flex-shrink-0 ${
                          getColorClass(selectedFeature.color)
                        } ${
                          getColorClass(
                            selectedFeature.color,
                            false,
                            false,
                            true,
                          )
                        }`}
                      >
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-600 dark:text-gray-300">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-between">
                  <div className="flex items-center">
                    <svg
                      className="h-8 w-8 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <p className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                      This feature addresses key challenges identified in our
                      research and provides a unique solution for Malaysian
                      students.
                    </p>
                  </div>
                  <button
                    className={`px-4 py-2 rounded-md text-white ${
                      getColorClass(selectedFeature.color, true)
                    } ${
                      getColorClass(selectedFeature.color, true, true)
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      getColorClass(selectedFeature.color, false)
                    }`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

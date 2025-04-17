import { useState } from "preact/hooks";

type PhaseType = {
  id: number;
  title: string;
  timeline: string;
  description: string;
  milestones: {
    title: string;
    features: string[];
    data: string[];
    experience: string[];
  }[];
};

const phases: PhaseType[] = [
  {
    id: 1,
    title: "Research and Foundation",
    timeline: "0-6 months",
    description:
      "Establish the foundational elements of EduPath Malaysia through research, partnerships, and initial development.",
    milestones: [
      {
        title: "Initial Setup (Month 1-2)",
        features: [
          "Initial database schema design",
          "API architecture planning",
        ],
        data: [
          "Begin partnerships with 3-5 key educational institutions",
          "Manual collection of basic institution data",
        ],
        experience: [
          "User research with students, parents, and educators",
          "Initial UI/UX wireframing",
        ],
      },
      {
        title: "Core Framework (Month 3-4)",
        features: [
          "Core user authentication system",
          "Basic profile management",
          "Alumni feedback framework design",
        ],
        data: [
          "Develop standardized data templates",
          "Initial subject-career mapping framework",
        ],
        experience: [
          "Interactive prototyping",
          "User testing with student focus groups",
        ],
      },
      {
        title: "Infrastructure Setup (Month 5-6)",
        features: [
          "Database infrastructure setup",
          "Content management system",
        ],
        data: [
          "Manual curation of top university programs",
          "Basic job market data collection",
          "Alumni testimonial schema design",
        ],
        experience: [
          "Design system creation",
          "Mobile and web responsive design",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "MVP Development and Testing",
    timeline: "7-12 months",
    description:
      "Develop the minimum viable product with core features and begin initial testing with a limited audience.",
    milestones: [
      {
        title: "Basic Features (Month 7-8)",
        features: [
          "Basic Subject-Career Pathway Visualizer",
          "Simple Institution Database",
        ],
        data: [
          "Integration of core educational data",
          "Initial assessment framework",
        ],
        experience: [
          "Alpha testing with selected schools",
          "Feedback collection system",
        ],
      },
      {
        title: "Enhanced Functionality (Month 9-10)",
        features: [
          "Simple interest assessment tools",
          "Institution comparison tool",
          "Basic alumni testimonial submission system",
        ],
        data: [
          "Implementation of data validation protocols",
          "Integration with 5-10 additional institutions",
          "Seed alumni testimonials from early partners",
        ],
        experience: [
          "Iteration based on alpha feedback",
          "Usability improvements",
        ],
      },
      {
        title: "Beta Release Preparation (Month 11-12)",
        features: [
          "Basic student dashboard",
          "Parent/guardian view",
          "Alumni testimonial moderation tools",
        ],
        data: [
          "Quality assurance of initial dataset",
          "Simple recommendation algorithm",
          "Testimonial verification protocols",
        ],
        experience: [
          "Beta launch with limited user group",
          "User onboarding flows",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Launch and Initial Scaling",
    timeline: "13-24 months",
    description:
      "Launch the platform to the public and begin scaling operations, expanding features and data coverage.",
    milestones: [
      {
        title: "Public Launch (Month 13-15)",
        features: [
          "Full Subject-Career Pathway Visualizer",
          "Comprehensive Institution Database",
          "Enhanced alumni testimonial platform",
        ],
        data: [
          "Automated data collection from partners",
          "Expanded job market dataset",
          "Alumni outreach campaigns",
        ],
        experience: [
          "Official public launch",
          "Marketing campaign",
        ],
      },
      {
        title: "Feature Expansion (Month 16-18)",
        features: [
          "Personalized Education Roadmap",
          "Basic Job Market Insights",
          "Alumni success story showcase",
        ],
        data: [
          "Integration with government data sources",
          "User-generated content collection begins",
          "Structured testimonial collection framework",
        ],
        experience: [
          "Analytics implementation",
          "User retention strategies",
        ],
      },
      {
        title: "Community Building (Month 19-24)",
        features: [
          "TVET Showcase",
          "Basic Community Forums",
          "Alumni-student connection features",
          "Expert connection platform",
        ],
        data: [
          "Expansion to cover 50% of institutions",
          "Initial alumni testimonial collection",
          "Testimonial categorization by field/institution",
        ],
        experience: [
          "Community moderation systems",
          "Engagement optimization",
          "Feature usage analytics",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Feature Expansion and Enhancement",
    timeline: "25-36 months",
    description:
      "Expand and enhance the platform with advanced features, intelligent systems, and comprehensive coverage.",
    milestones: [
      {
        title: "Advanced Visualization (Month 25-27)",
        features: [
          "Advanced visualization tools",
          "Virtual institution tours",
          "Alumni mentorship program",
        ],
        data: [
          "Basic LLM integration for personalized guidance",
          "Preliminary predictive analytics",
          "AI-powered testimonial summarization",
        ],
        experience: [
          "Expansion to all accredited institutions",
          "Comprehensive TVET coverage",
          "Alumni network mapping",
        ],
      },
      {
        title: "AI Integration (Month 28-33)",
        features: [
          "Mentorship matching system",
          "Scholarship database",
          "Career progression simulator",
          "Interactive skill gap analyzer",
        ],
        data: [
          "Enhanced recommendation algorithms",
          "Personalized content generation",
          "Advanced LLM with RAG implementation",
          "Predictive career pathway modeling",
        ],
        experience: [
          "Real-time job market data integration",
          "Industry partnership expansion",
          "Integration with employment platforms",
        ],
      },
      {
        title: "Comprehensive Platform (Month 34-36)",
        features: [
          "AR/VR career exploration",
          "Comprehensive mobile app with offline features",
          "Alumni virtual mentorship environments",
        ],
        data: [
          "Full AI-powered guidance system",
          "Multi-language support with local dialects",
          "Advanced alumni insights generation",
        ],
        experience: [
          "Complete educational ecosystem coverage",
          "Continuous data refresh protocols",
          "Comprehensive alumni impact analytics",
        ],
      },
    ],
  },
];

export function Roadmap() {
  const [activePhase, setActivePhase] = useState<number>(1);
  const [activeMilestone, setActiveMilestone] = useState<number>(0);

  const currentPhase = phases.find((phase) => phase.id === activePhase) ||
    phases[0];
  const currentMilestone = currentPhase.milestones[activeMilestone];

  return (
    <section
      id="roadmap"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Development Roadmap
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            The development of EduPath Malaysia will follow a phased approach
            over 36 months.
          </p>
        </div>

        <div className="mt-12">
          <div className="flex justify-between items-center overflow-x-auto pb-4 mb-8 space-x-2 md:space-x-4">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => {
                  setActivePhase(phase.id);
                  setActiveMilestone(0);
                }}
                className={`py-2 px-4 rounded-full transition-all duration-300 whitespace-nowrap ${
                  activePhase === phase.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <span className="font-medium">{phase.title}</span>
                <span
                  className={`ml-2 text-xs ${
                    activePhase === phase.id
                      ? "text-blue-100"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {phase.timeline}
                </span>
              </button>
            ))}
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 transition-colors duration-300">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Phase {currentPhase.id}: {currentPhase.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {currentPhase.description}
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="space-y-2">
                  {currentPhase.milestones.map((milestone, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveMilestone(index)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                        activeMilestone === index
                          ? "bg-blue-600 text-white"
                          : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                      }`}
                    >
                      <h4 className="font-medium">{milestone.title}</h4>
                    </button>
                  ))}
                </div>

                <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-100 dark:border-blue-800">
                  <div className="flex items-center mb-2">
                    <svg
                      className="h-5 w-5 text-blue-600 dark:text-blue-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="ml-2 text-sm font-medium text-blue-800 dark:text-blue-300">
                      Implementation Focus
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Each phase builds upon the previous, with increasing
                    complexity and integration as the platform matures.
                  </p>
                </div>
              </div>

              <div className="md:w-2/3 bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md transition-colors duration-300">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {currentMilestone.title}
                </h4>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase mb-3">
                      Feature Development
                    </h5>
                    <ul className="space-y-2">
                      {currentMilestone.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-blue-500 dark:text-blue-400 mt-0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="ml-2 text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-sm font-medium text-indigo-600 dark:text-indigo-400 uppercase mb-3">
                      Data Implementation
                    </h5>
                    <ul className="space-y-2">
                      {currentMilestone.data.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-indigo-500 dark:text-indigo-400 mt-0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="ml-2 text-gray-600 dark:text-gray-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-sm font-medium text-purple-600 dark:text-purple-400 uppercase mb-3">
                      User Experience
                    </h5>
                    <ul className="space-y-2">
                      {currentMilestone.experience.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-purple-500 dark:text-purple-400 mt-0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="ml-2 text-gray-600 dark:text-gray-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Progress through Phase {currentPhase.id}
                    </div>
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {currentPhase.timeline}
                    </div>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{
                        width: `${
                          ((activeMilestone + 1) /
                            currentPhase.milestones.length) * 100
                        }%`,
                      }}
                    >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "preact/hooks";
import { EducationPathwayChart } from "./EducationPathwayChart.tsx";

type Challenge = {
  id: number;
  title: string;
  description: string;
  impact: string[];
  icon: string;
};

const challenges: Challenge[] = [
  {
    id: 1,
    title: "Lack of Structured Planning",
    description:
      "Students choose elective subjects without understanding future implications, with limited guidance on subject-career alignment.",
    impact: [
      "Misalignment between subjects and career goals",
      "Limited future educational options",
      "Reduced academic motivation",
    ],
    icon:
      "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    id: 2,
    title: "Career Path Uncertainty",
    description:
      "Insufficient exposure to diverse career options and limited understanding of emerging industries.",
    impact: [
      "Narrow career aspirations",
      "Pursuit of oversaturated fields",
      "Skill mismatches with job market",
    ],
    icon:
      "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    id: 3,
    title: "Parental Concerns About Job Market",
    description:
      "Parents lack access to current job market data and struggle with the disconnect between expectations and market realities.",
    impact: [
      "Conflict between student interest and parental guidance",
      "Stress and anxiety for students",
      "Perpetuation of outdated career perceptions",
    ],
    icon:
      "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    id: 4,
    title: "Absence of Centralized Information",
    description:
      "Fragmented information about post-SPM pathways and difficulty comparing institutions and programs.",
    impact: [
      "Overwhelming decision process",
      "Uninformed educational choices",
      "Underutilization of suitable pathways",
    ],
    icon:
      "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
];

export function Challenges() {
  const [activeChallenge, setActiveChallenge] = useState<number>(1);

  return (
    <section
      id="challenge"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Key Educational Challenges
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Secondary school students in Malaysia face several critical
            challenges when making educational and career decisions.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="space-y-4">
              {challenges.map((challenge) => (
                <button
                  key={challenge.id}
                  onClick={() => setActiveChallenge(challenge.id)}
                  className={`flex items-start p-4 rounded-lg w-full text-left transition-colors duration-300 ${
                    activeChallenge === challenge.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 h-6 w-6 mr-4 mt-1 ${
                      activeChallenge === challenge.id
                        ? "text-white"
                        : "text-blue-500 dark:text-blue-400"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={challenge.icon}
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{challenge.title}</h3>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="col-span-2">
            {challenges.map((challenge) => (
              challenge.id === activeChallenge && (
                <div
                  key={challenge.id}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 h-full transition-opacity duration-300 animate-fadeIn"
                >
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {challenge.description}
                  </p>

                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Impact:
                  </h4>
                  <ul className="space-y-2">
                    {challenge.impact.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 dark:text-blue-400 mr-2">
                          •
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 h-2 bg-blue-100 dark:bg-blue-900 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full animate-pulse"
                      style={{
                        width: `${(challenge.id / challenges.length) * 100}%`,
                      }}
                    >
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Understanding the Malaysian Education System
          </h3>
          <p className="text-center max-w-3xl mx-auto mb-8 text-gray-600 dark:text-gray-300">
            A comprehensive understanding of Malaysia's education pathways is
            essential for guiding students toward informed decisions about their
            future.
          </p>

          <EducationPathwayChart />
        </div>
      </div>
    </section>
  );
}

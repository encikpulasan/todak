import { useEffect, useRef, useState } from "preact/hooks";
import { ChartLibLoader } from "./ChartLibLoader.tsx";

export function EducationPathwayChart() {
  const [isBrowser, setIsBrowser] = useState(false);

  // Check if we're in a browser environment
  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);

  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transition-colors duration-300">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Malaysian Education Pathway
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        A comprehensive overview of educational pathways in Malaysia, from
        primary school through higher education
      </p>

      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Modern pathway visualization using Tailwind CSS */}
          <div className="flex flex-col items-center">
            {/* Timeline bar */}
            <div className="w-2 bg-blue-500 dark:bg-blue-600 h-8 rounded-t-full">
            </div>

            {/* Primary Education */}
            <div className="w-full max-w-xl bg-blue-100 dark:bg-blue-900/30 rounded-lg p-5 relative border-2 border-blue-500 dark:border-blue-700">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 dark:bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Step 1
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white text-center">
                Primary Education
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-center mb-2">
                (6 Years)
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Standard 1-6 (Ages 7-12)</li>
                  <li>National, Chinese, or Tamil schools</li>
                  <li>UPSR examination (discontinued in 2021)</li>
                  <li>
                    Core subjects: Bahasa Malaysia, English, Mathematics,
                    Science
                  </li>
                </ul>
              </div>
            </div>

            {/* Connector */}
            <div className="w-2 bg-blue-500 dark:bg-blue-600 h-8"></div>

            {/* Lower Secondary */}
            <div className="w-full max-w-xl bg-indigo-100 dark:bg-indigo-900/30 rounded-lg p-5 relative border-2 border-indigo-500 dark:border-indigo-700">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-500 dark:bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Step 2
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white text-center">
                Lower Secondary Education
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-center mb-2">
                (Form 1-3, Ages 13-15)
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <ul className="list-disc pl-5 space-y-1">
                  <li>National secondary schools or private institutions</li>
                  <li>PT3 assessment (replaced PMR in 2014)</li>
                  <li>Core subjects plus electives</li>
                </ul>
              </div>
            </div>

            {/* Connector */}
            <div className="w-2 bg-indigo-500 dark:bg-indigo-600 h-8"></div>

            {/* Upper Secondary - Main node */}
            <div className="w-full max-w-xl bg-purple-100 dark:bg-purple-900/30 rounded-lg p-5 relative border-2 border-purple-500 dark:border-purple-700">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 dark:bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Step 3
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white text-center">
                Upper Secondary Education
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-center mb-2">
                (Form 4-5, Ages 16-17)
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Academic stream: Science, Arts, or Technical stream</li>
                  <li>SPM (Sijil Pelajaran Malaysia) examination</li>
                  <li>Compulsory subjects + electives based on stream</li>
                </ul>
              </div>
            </div>

            {/* Multiple path indicator */}
            <div className="flex items-center justify-center w-full my-4">
              <div className="w-1/3 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
              <div className="px-4 text-gray-500 dark:text-gray-400 text-sm font-medium">
                Multiple Pathways
              </div>
              <div className="w-1/3 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
            </div>

            {/* Pathway Options - 3 columns */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* TVET Pathway */}
              <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border-2 border-green-500 dark:border-green-700">
                <h4 className="text-md font-bold text-gray-900 dark:text-white text-center">
                  TVET Pathway
                </h4>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Certificate (SKM 1-3)</li>
                    <li>Diploma Programs</li>
                    <li>Advanced Diploma</li>
                    <li>Duration: 6 months - 3 years</li>
                    <li>Focus on technical skills</li>
                  </ul>
                </div>
              </div>

              {/* Pre-University */}
              <div className="bg-pink-100 dark:bg-pink-900/30 rounded-lg p-4 border-2 border-pink-500 dark:border-pink-700">
                <h4 className="text-md font-bold text-gray-900 dark:text-white text-center">
                  Pre-University
                </h4>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>STPM (Form 6, 1.5 years)</li>
                    <li>Matriculation (1 year)</li>
                    <li>Foundation Programs (1 year)</li>
                    <li>A-Levels (1.5-2 years)</li>
                    <li>International Baccalaureate</li>
                  </ul>
                </div>
              </div>

              {/* Direct Entry */}
              <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-4 border-2 border-yellow-500 dark:border-yellow-700">
                <h4 className="text-md font-bold text-gray-900 dark:text-white text-center">
                  Direct Entry Options
                </h4>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Diploma Programs</li>
                    <li>Private College Certificates</li>
                    <li>Professional Certificates</li>
                    <li>International Program Entry</li>
                    <li>Duration: 1-3 years</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Connector to Higher Education */}
            <div className="w-2 bg-gray-400 dark:bg-gray-500 h-8 mt-4"></div>

            {/* Higher Education */}
            <div className="w-full max-w-xl bg-blue-100 dark:bg-blue-900/30 rounded-lg p-5 relative border-2 border-blue-500 dark:border-blue-700 mt-4">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 dark:bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Final Step
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white text-center">
                Higher Education
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-center mb-2">
                (Tertiary Education)
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Bachelor's Degree (3-5 years)</li>
                  <li>Diploma Programs (2-3 years)</li>
                  <li>Professional Qualifications</li>
                  <li>Public or Private Universities/Colleges</li>
                </ul>
              </div>
            </div>

            {/* Connector to Employment */}
            <div className="w-2 bg-blue-500 dark:bg-blue-600 h-8"></div>

            {/* Employment */}
            <div className="w-full max-w-xl bg-green-100 dark:bg-green-900/30 rounded-lg p-5 relative border-2 border-green-500 dark:border-green-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white text-center">
                Employment
              </h4>
              <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Entry into workforce with various qualifications based on
                educational pathway
              </div>
              <div className="flex justify-center mt-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                  <svg
                    className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 8 8"
                  >
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                  Career Advancement
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
        Source: Ministry of Education Malaysia (2023) - Updated Education
        Pathway Structure
      </div>
    </div>
  );
}

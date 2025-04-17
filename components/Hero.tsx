export function Hero() {
  return (
    <section
      id="overview"
      className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">EduPath Malaysia</span>
              <span className="block mt-2 text-blue-600 dark:text-blue-400">
                Connecting Education to Careers
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
              Empowering Malaysian students to make informed educational and
              career decisions through personalized guidance, comprehensive
              information, and real-world insights.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#solution"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              >
                Explore Solution
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                View Features
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-xl overflow-hidden">
              <div className="bg-blue-100 dark:bg-blue-900 h-full w-full flex items-center justify-center p-6 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto max-h-56"
                  viewBox="0 0 1200 800"
                  fill="none"
                >
                  <path
                    d="M600 350C600 350 500 250 400 250C300 250 200 350 200 350C200 350 300 450 400 450C500 450 600 350 600 350Z"
                    fill="#4F46E5"
                    fillOpacity="0.7"
                  />
                  <path
                    d="M600 350C600 350 700 250 800 250C900 250 1000 350 1000 350C1000 350 900 450 800 450C700 450 600 350 600 350Z"
                    fill="#2563EB"
                    fillOpacity="0.7"
                  />
                  <path
                    d="M600 450C600 450 500 550 400 550C300 550 200 450 200 450C200 450 300 350 400 350C500 350 600 450 600 450Z"
                    fill="#7C3AED"
                    fillOpacity="0.7"
                  />
                  <path
                    d="M600 450C600 450 700 550 800 550C900 550 1000 450 1000 450C1000 450 900 350 800 350C700 350 600 450 600 450Z"
                    fill="#8B5CF6"
                    fillOpacity="0.7"
                  />
                  <path
                    d="M600 350C600 350 550 300 500 300C450 300 400 350 400 350C400 350 450 400 500 400C550 400 600 350 600 350Z"
                    fill="#3B82F6"
                    fillOpacity="0.7"
                  />
                  <path
                    d="M600 350C600 350 650 300 700 300C750 300 800 350 800 350C800 350 750 400 700 400C650 400 600 350 600 350Z"
                    fill="#6366F1"
                    fillOpacity="0.7"
                  />
                  <path
                    d="M600 450C600 450 550 500 500 500C450 500 400 450 400 450C400 450 450 400 500 400C550 400 600 450 600 450Z"
                    fill="#4F46E5"
                    fillOpacity="0.7"
                  />
                  <path
                    d="M600 450C600 450 650 500 700 500C750 500 800 450 800 450C800 450 750 400 700 400C650 400 600 450 600 450Z"
                    fill="#4338CA"
                    fillOpacity="0.7"
                  />
                  <circle cx="600" cy="400" r="50" fill="#2563EB" />
                  <text
                    x="600"
                    y="400"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontWeight="bold"
                    fontSize="14"
                  >
                    EduPath
                  </text>
                </svg>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 dark:opacity-40">
            </div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-gradient-to-tr from-blue-500 to-green-400 rounded-full opacity-20 dark:opacity-40">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

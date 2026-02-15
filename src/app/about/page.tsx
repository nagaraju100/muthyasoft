export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-blue-100">
            Manager-level Data Engineer with 10+ years of enterprise experience
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Nagaraju Gajula</h2>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              I'm a passionate data engineer with over a decade of experience building large-scale data systems at leading technology companies.
            </p>

            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold text-xl mb-3">Professional Experience</h3>
                <ul className="space-y-2 ml-4">
                  <li><strong>LatentView Analytics</strong> - Manager, Data Engineer (5+ years)</li>
                  <li><strong>YASKAWA India</strong> - Principal Data Architect</li>
                  <li><strong>Goldman Sachs</strong> - Data Engineering</li>
                  <li><strong>Texas Instruments</strong> - Software Development</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">Expertise</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Core Technologies</h4>
                    <ul className="ml-4 space-y-1">
                      <li>• Python & SQL</li>
                      <li>• PySpark & Spark</li>
                      <li>• Apache Airflow</li>
                      <li>• Databricks</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cloud Platforms</h4>
                    <ul className="ml-4 space-y-1">
                      <li>• Amazon Web Services</li>
                      <li>• Google Cloud Platform</li>
                      <li>• Microsoft Azure</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">Why Work With Me?</h3>
                <ul className="space-y-2 ml-4">
                  <li><strong>Real Production Experience</strong> - I've built and maintained data systems processing terabytes of data at enterprise scale</li>
                  <li><strong>Deep Technical Knowledge</strong> - Over 10 years working with modern data engineering stack</li>
                  <li><strong>Teaching Experience</strong> - Active on YouTube (TechGeniusMinds) and Medium with practical tutorials</li>
                  <li><strong>Industry-Tested Practices</strong> - I teach what actually works in production, not just theory</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Connect With Me</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.youtube.com/@TechGeniusMinds"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              YouTube
            </a>
            <a
              href="https://medium.com/@nagarajugajula100"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition"
            >
              Medium
            </a>
            <a
              href="https://www.linkedin.com/in/nagaraju-gajula-0a408427/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Learn?</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Let's discuss how I can help you achieve your data engineering goals
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}

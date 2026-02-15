import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Master Data Engineering with Industry Expertise
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Learn from a Manager-level Data Engineer with 10+ years at Goldman Sachs, LatentView Analytics, and more
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition"
          >
            Start Your Journey
          </a>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What You'll Master</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Core Technologies</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Python & SQL</li>
                <li>• PySpark</li>
                <li>• Apache Airflow</li>
                <li>• Databricks</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Cloud Platforms</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• AWS</li>
                <li>• Google Cloud (GCP)</li>
                <li>• Microsoft Azure</li>
                <li>• Cloud-native patterns</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Advanced Skills</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Data Pipeline Design</li>
                <li>• ETL/ELT Patterns</li>
                <li>• Performance Optimization</li>
                <li>• Production Best Practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Your Instructor</h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Nagaraju Gajula</h3>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              Manager - Data Engineer with 10+ years of enterprise experience
            </p>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h4 className="font-semibold text-lg mb-2">Professional Experience</h4>
                <ul className="space-y-1 ml-4">
                  <li>• LatentView Analytics - Manager, Data Engineer (5+ years)</li>
                  <li>• Goldman Sachs - Data Engineering</li>
                  <li>• YASKAWA India - Principal Data Architect</li>
                  <li>• Texas Instruments - Software Development</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">Why Learn From Me?</h4>
                <ul className="space-y-1 ml-4">
                  <li>• Real production experience at enterprise scale</li>
                  <li>• Deep expertise in modern data engineering stack</li>
                  <li>• Proven teaching approach through YouTube & Medium</li>
                  <li>• Focus on practical, industry-tested knowledge</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">How Tutoring Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Personalized 1-on-1</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Individual attention tailored to your learning goals and pace
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Real-World Focus</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Learn patterns and practices used in production environments
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Flexible Schedule</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Sessions scheduled around your availability and timeline
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Get Started Today</h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Connect With Me</h3>
            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="https://www.youtube.com/@TechGeniusMinds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                YouTube - TechGeniusMinds
              </a>
              <a
                href="https://medium.com/@nagaraju100"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                Medium Blog
              </a>
              <a
                href="https://www.linkedin.com/in/nagaraju-gajula/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Nagaraju Gajula. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

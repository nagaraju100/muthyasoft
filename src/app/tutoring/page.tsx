import Link from 'next/link';

export default function Tutoring() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-950 dark:to-pink-950">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Personalized Data Engineering Tutoring</h1>
          <p className="text-xl text-blue-100">
            1-on-1 mentorship to master modern data engineering from an industry expert
          </p>
        </div>
      </section>

      {/* What You'll Master */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What You'll Master</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Core Technologies</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Python & SQL</li>
                <li>• PySpark & Spark SQL</li>
                <li>• Apache Airflow</li>
                <li>• Databricks Platform</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Cloud Platforms</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Amazon Web Services (AWS)</li>
                <li>• Google Cloud Platform (GCP)</li>
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

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">How Tutoring Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized 1-on-1</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Individual attention tailored to your learning goals and pace
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Real-World Focus</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Learn patterns and practices used in production environments
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Schedule</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Sessions scheduled around your availability and timeline
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Who Is This For?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Beginners</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Starting your data engineering journey and want to build a strong foundation
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Career Switchers</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Transitioning from software development or data analysis to data engineering
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Mid-Level Engineers</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Want to level up skills and learn enterprise-scale best practices
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Interview Prep</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Preparing for data engineering interviews at top companies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact me to discuss your learning goals and schedule a session
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}

export default function Videos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-50 dark:from-slate-900 dark:via-red-950 dark:to-orange-950">
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-600 via-rose-600 to-pink-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Video Tutorials</h1>
          <p className="text-xl text-blue-100">
            Free data engineering tutorials on YouTube
          </p>
        </div>
      </section>

      {/* YouTube Channel */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <div className="text-6xl mb-6">📹</div>
            <h2 className="text-3xl font-bold mb-4">TechGeniusMinds</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Subscribe to my YouTube channel for regular tutorials on data engineering, Python, PySpark, cloud platforms, and more.
            </p>
            <a
              href="https://www.youtube.com/@TechGeniusMinds"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition"
            >
              Visit YouTube Channel
            </a>
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Topics Covered</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Python for Data Engineering',
              'PySpark Fundamentals',
              'Apache Airflow Workflows',
              'Databricks Platform',
              'AWS Data Services',
              'ETL Pipeline Design',
              'Data Modeling',
              'Performance Optimization',
              'Best Practices & Patterns',
            ].map((topic) => (
              <div key={topic} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <p className="font-semibold text-lg">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Want Personalized Learning?</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Get 1-on-1 tutoring for focused, hands-on learning tailored to your goals
          </p>
          <a
            href="/tutoring"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
          >
            Learn About Tutoring
          </a>
        </div>
      </section>
    </div>
  );
}

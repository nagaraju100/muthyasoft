export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-purple-50 dark:from-slate-900 dark:via-violet-950 dark:to-purple-950">
      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Blog & Articles</h1>
          <p className="text-xl text-blue-100">
            In-depth articles on data engineering best practices and patterns
          </p>
        </div>
      </section>

      {/* Coming Soon Blog Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <div className="text-6xl mb-6">✍️</div>
            <h2 className="text-3xl font-bold mb-4">Technical Blog</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
              Our engineering team is preparing in-depth articles covering data engineering best practices, real-world solutions, and lessons learned from production systems.
            </p>
            <p className="text-amber-600 dark:text-amber-400 font-semibold text-lg">
              Coming Soon
            </p>
          </div>
        </div>
      </section>

      {/* Article Topics */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Topics We Cover</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Data Pipeline Architecture',
              'PySpark Optimization',
              'Cloud Best Practices',
              'ETL/ELT Patterns',
              'Data Quality',
              'Databricks Tips & Tricks',
              'Airflow Orchestration',
              'Performance Tuning',
              'Real-World Case Studies',
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
          <h2 className="text-3xl font-bold mb-4">Need Help with Implementation?</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Get personalized guidance to apply these concepts to your projects
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}

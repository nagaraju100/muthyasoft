import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Master Data Engineering with Industry Expertise
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Learn from a Manager-level Data Engineer with 10+ years at Goldman Sachs, LatentView Analytics, and more
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tutoring"
              className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition"
            >
              Start Learning
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-blue-700 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What I Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/services" className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold mb-3">Services</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Professional data engineering services including pipeline development, consulting, and cloud migration.
              </p>
            </Link>

            <Link href="/tutoring" className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold mb-3">Tutoring</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Personalized 1-on-1 tutoring for data engineering topics. Learn at your own pace with industry-tested knowledge.
              </p>
            </Link>

            <Link href="/videos" className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">📹</div>
              <h3 className="text-2xl font-bold mb-3">Videos</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Free tutorials on TechGeniusMinds YouTube channel covering data engineering, Python, PySpark, and more.
              </p>
            </Link>

            <Link href="/blog" className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-2xl font-bold mb-3">Blog</h3>
              <p className="text-gray-700 dark:text-gray-300">
                In-depth articles on Medium about data engineering best practices, patterns, and real-world solutions.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Technologies I Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Python', 'PySpark', 'Databricks', 'Apache Airflow', 'AWS', 'GCP', 'Azure', 'SQL'].map((tech) => (
              <div key={tech} className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center shadow">
                <p className="font-semibold text-lg">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Level Up Your Skills?</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Join students who are mastering data engineering with personalized guidance from an industry expert.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}

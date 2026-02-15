import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-32 px-4 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative">
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
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What I Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/services" className="group bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 dark:border-blue-800 hover:scale-105">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💼</div>
              <h3 className="text-2xl font-bold mb-3 text-blue-700 dark:text-blue-300">Services</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Professional data engineering services including pipeline development, consulting, and cloud migration.
              </p>
            </Link>

            <Link href="/tutoring" className="group bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 dark:border-purple-800 hover:scale-105">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎓</div>
              <h3 className="text-2xl font-bold mb-3 text-purple-700 dark:text-purple-300">Tutoring</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Personalized 1-on-1 tutoring for data engineering topics. Learn at your own pace with industry-tested knowledge.
              </p>
            </Link>

            <Link href="/videos" className="group bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-red-100 dark:border-red-800 hover:scale-105">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📹</div>
              <h3 className="text-2xl font-bold mb-3 text-red-700 dark:text-red-300">Videos</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Free tutorials on TechGeniusMinds YouTube channel covering data engineering, Python, PySpark, and more.
              </p>
            </Link>

            <Link href="/blog" className="group bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100 dark:border-emerald-800 hover:scale-105">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">✍️</div>
              <h3 className="text-2xl font-bold mb-3 text-emerald-700 dark:text-emerald-300">Blog</h3>
              <p className="text-gray-700 dark:text-gray-300">
                In-depth articles on Medium about data engineering best practices, patterns, and real-world solutions.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 dark:from-slate-800 dark:via-gray-800 dark:to-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technologies I Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Python', 'PySpark', 'Databricks', 'Apache Airflow', 'AWS', 'GCP', 'Azure', 'SQL'].map((tech, index) => (
              <div key={tech} className={`bg-white dark:bg-slate-700 p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 ${
                index % 4 === 0 ? 'border-blue-500' :
                index % 4 === 1 ? 'border-purple-500' :
                index % 4 === 2 ? 'border-pink-500' :
                'border-indigo-500'
              }`}>
                <p className="font-semibold text-lg">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white dark:bg-slate-900">
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

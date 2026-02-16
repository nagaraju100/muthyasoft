import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100">
            Comprehensive data engineering and AI automation solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Creator's Brief */}
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-violet-100 dark:border-violet-800 hover:scale-105">
              <div className="text-4xl mb-4">📰</div>
              <h2 className="text-2xl font-bold mb-4">AI Creator's Brief</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Daily curated content and insights for content creators leveraging AI.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>• AI industry news & trends</li>
                <li>• Content creation ideas & strategies</li>
                <li>• AI tools for creators</li>
                <li>• Platform-specific insights</li>
                <li>• Trending topics & viral content analysis</li>
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Subscribe Now
              </Link>
            </div>

            {/* AI SaaS Builder */}
            <div className="bg-gradient-to-br from-sky-50 to-cyan-50 dark:from-sky-900/20 dark:to-cyan-900/20 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-sky-100 dark:border-sky-800 hover:scale-105">
              <div className="text-4xl mb-4">🤖</div>
              <h2 className="text-2xl font-bold mb-4">AI SaaS Builder</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Build and launch AI-powered SaaS products with expert guidance and tools.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>• AI model integration</li>
                <li>• Full-stack development</li>
                <li>• API design & development</li>
                <li>• Scalable infrastructure setup</li>
                <li>• Product launch strategy</li>
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Build Your SaaS
              </Link>
            </div>

            {/* AI Automation Agency Academy */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100 dark:border-green-800 hover:scale-105">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold mb-4">AI Automation Agency Academy</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Learn to build and scale your own AI automation agency from scratch.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>• Agency business model training</li>
                <li>• Client acquisition strategies</li>
                <li>• AI automation workflows</li>
                <li>• Service delivery frameworks</li>
                <li>• Scaling & operations management</li>
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Join Academy
              </Link>
            </div>

            {/* AI Consulting Academy */}
            <div className="bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-fuchsia-900/20 dark:to-pink-900/20 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-fuchsia-100 dark:border-fuchsia-800 hover:scale-105">
              <div className="text-4xl mb-4">💼</div>
              <h2 className="text-2xl font-bold mb-4">AI Consulting Academy</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Master AI consulting and help businesses implement AI solutions effectively.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>• AI strategy development</li>
                <li>• Consulting methodology training</li>
                <li>• Enterprise AI implementation</li>
                <li>• ROI analysis & reporting</li>
                <li>• Client relationship management</li>
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Start Learning
              </Link>
            </div>

            {/* 1-on-1 Tutoring */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 dark:border-blue-800 hover:scale-105">
              <div className="text-4xl mb-4">🎓</div>
              <h2 className="text-2xl font-bold mb-4">1-on-1 Tutoring</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Personalized data engineering tutoring sessions tailored to your learning goals and pace.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>• Customized learning path</li>
                <li>• Real-world projects and examples</li>
                <li>• Hands-on coding sessions</li>
                <li>• Interview preparation</li>
                <li>• Flexible scheduling</li>
              </ul>
              <Link
                href="/tutoring"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Learn More
              </Link>
            </div>

            {/* Data Pipeline Development */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 dark:border-purple-800 hover:scale-105">
              <div className="text-4xl mb-4">🔧</div>
              <h2 className="text-2xl font-bold mb-4">Data Pipeline Development</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                End-to-end data pipeline design and implementation for your business needs.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>• ETL/ELT pipeline design</li>
                <li>• Real-time data streaming</li>
                <li>• Batch processing workflows</li>
                <li>• Data quality checks</li>
                <li>• Pipeline monitoring & optimization</li>
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Get Quote
              </Link>
            </div>

            {/* Cloud Migration */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-cyan-100 dark:border-cyan-800 hover:scale-105">
              <div className="text-4xl mb-4">☁️</div>
              <h2 className="text-2xl font-bold mb-4">Cloud Migration & Setup</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Migrate your data infrastructure to cloud platforms with best practices.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>• AWS, GCP, Azure migration</li>
                <li>• Cloud architecture design</li>
                <li>• Cost optimization</li>
                <li>• Security best practices</li>
                <li>• Infrastructure as Code (IaC)</li>
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Get Quote
              </Link>
            </div>

            {/* Technical Consulting */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-100 dark:border-amber-800 hover:scale-105">
              <div className="text-4xl mb-4">💡</div>
              <h2 className="text-2xl font-bold mb-4">Technical Consulting</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Expert advice and guidance on data engineering projects and architecture.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>• Architecture reviews</li>
                <li>• Technology stack selection</li>
                <li>• Performance optimization</li>
                <li>• Best practices & standards</li>
                <li>• Team training & mentoring</li>
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Get Quote
              </Link>
            </div>

            {/* Corporate Training */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100 dark:border-emerald-800 hover:scale-105">
              <div className="text-4xl mb-4">👥</div>
              <h2 className="text-2xl font-bold mb-4">Corporate Training</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Team training programs for companies looking to upskill their workforce.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>• Customized curriculum</li>
                <li>• On-site or remote training</li>
                <li>• Hands-on workshops</li>
                <li>• Real-world case studies</li>
                <li>• Post-training support</li>
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Get Quote
              </Link>
            </div>

            {/* Code Review & Optimization */}
            <div className="bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-900/20 dark:to-red-900/20 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-rose-100 dark:border-rose-800 hover:scale-105">
              <div className="text-4xl mb-4">🔍</div>
              <h2 className="text-2xl font-bold mb-4">Code Review & Optimization</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Professional review and optimization of your data engineering code.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>• Code quality assessment</li>
                <li>• Performance bottleneck analysis</li>
                <li>• PySpark optimization</li>
                <li>• Best practices implementation</li>
                <li>• Detailed improvement report</li>
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Work With */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 dark:from-slate-800 dark:via-gray-800 dark:to-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Technologies We Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'Python',
              'PySpark',
              'SQL',
              'Databricks',
              'Apache Airflow',
              'AWS',
              'GCP',
              'Azure',
              'Kafka',
              'Docker',
              'Kubernetes',
              'Terraform',
              'OpenAI',
              'LangChain',
              'Claude AI',
              'ChatGPT',
              'Next.js',
              'React',
            ].map((tech) => (
              <div key={tech} className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center shadow">
                <p className="font-semibold">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Muthya Soft?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-3">10+ Years Experience</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Proven track record at Goldman Sachs, LatentView Analytics, and more
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3">Production-Grade Solutions</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Enterprise-scale experience with real-world best practices
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Modern Tech Stack</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Latest tools and technologies for cutting-edge solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Let's discuss how we can help you achieve your data engineering goals
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}

import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100">
            Comprehensive data engineering solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* 1-on-1 Tutoring */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
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
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
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
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
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
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
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

            {/* Data Engineering Training */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
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
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
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
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
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
            ].map((tech) => (
              <div key={tech} className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center shadow">
                <p className="font-semibold">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
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
      <section className="py-16 px-4 bg-blue-600 text-white">
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

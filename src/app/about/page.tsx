export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-orange-50 dark:from-slate-900 dark:via-amber-950 dark:to-orange-950">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About Muthya Soft</h1>
          <p className="text-xl text-blue-100">
            Enterprise-level Data Engineering Expertise & Practical Mentorship
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              Muthya Soft is dedicated to empowering engineers with production-grade data skills. Our instructors bring over a decade of real-world experience building large-scale data platforms for enterprise companies.
            </p>

            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold text-xl mb-3">Enterprise Industry Experience</h3>
                <ul className="space-y-2 ml-4 list-disc">
                  <li>Data Engineering & Pipeline Design for <strong>Global Investment Banks</strong></li>
                  <li>Solution Architecture & Consulting for <strong>Leading Analytics firms</strong></li>
                  <li>Data Infrastructure Design for <strong>Industrial Automation leaders</strong></li>
                  <li>Software & Platform Engineering at <strong>Semiconductor Pioneers</strong></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">Technical Domain Focus</h3>
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
                <h3 className="font-semibold text-xl mb-3">Why Work With Us?</h3>
                <ul className="space-y-2 ml-4 list-disc">
                  <li><strong>Real Production Experience</strong> - We teach patterns built for handling terabytes of data at enterprise scale</li>
                  <li><strong>Deep Technical Knowledge</strong> - Over 10 years working with modern data engineering stack</li>
                  <li><strong>Industry-Tested Practices</strong> - Focus on what actually works in production environments, not just code snippets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Learn?</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Let's discuss how we can help you achieve your data engineering goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

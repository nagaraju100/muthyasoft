import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100">
            AI-powered solutions and enterprise data engineering for modern businesses
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">

            {/* AI Services */}
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-violet-100 dark:border-violet-800 hover:scale-105">
              <div className="text-4xl mb-4">🤖</div>
              <h2 className="text-2xl font-bold mb-4">AI Services</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Build intelligent systems with cutting-edge AI — from model integration to production-grade deployments.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>• LLM integration (OpenAI, Claude, open-source models)</li>
                <li>• RAG pipelines and knowledge retrieval systems</li>
                <li>• AI-powered SaaS product development</li>
                <li>• Prompt engineering and fine-tuning</li>
                <li>• AI agent workflows and orchestration</li>
                <li>• Vector databases (Pinecone, Weaviate, pgvector)</li>
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Get Quote
              </Link>
            </div>

            {/* Data Engineering */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 dark:border-blue-800 hover:scale-105">
              <div className="text-4xl mb-4">⚙️</div>
              <h2 className="text-2xl font-bold mb-4">Data Engineering</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                End-to-end data infrastructure — from pipeline design to production monitoring at enterprise scale.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>• ETL/ELT pipeline design and implementation</li>
                <li>• Real-time streaming and batch processing</li>
                <li>• Cloud architecture (AWS, GCP, Azure)</li>
                <li>• Data quality checks and observability</li>
                <li>• Performance optimization for PySpark/Spark</li>
                <li>• Infrastructure as Code (Terraform, CloudFormation)</li>
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Get Quote
              </Link>
            </div>

            {/* AI + Data Integration */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-100 dark:border-amber-800 hover:scale-105">
              <div className="text-4xl mb-4">🔗</div>
              <h2 className="text-2xl font-bold mb-4">AI + Data Integration</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Bridge the gap between data infrastructure and AI — make your data AI-ready.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>• AI-ready data pipelines and feature stores</li>
                <li>• LLM-powered analytics and reporting</li>
                <li>• Data-to-insights automation</li>
                <li>• Custom AI tooling for your data stack</li>
                <li>• MCP (Model Context Protocol) integrations</li>
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Get Quote
              </Link>
            </div>

            {/* Technical Consulting */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100 dark:border-emerald-800 hover:scale-105">
              <div className="text-4xl mb-4">💡</div>
              <h2 className="text-2xl font-bold mb-4">Technical Consulting</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Expert guidance on architecture, tech stack selection, and data/AI strategy.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>• Architecture reviews and design</li>
                <li>• Technology stack assessment</li>
                <li>• Data/AI roadmap planning</li>
                <li>• Performance bottleneck analysis</li>
                <li>• Migration and modernization strategy</li>
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
              'Claude AI',
              'LangChain',
              'Vector DBs',
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
          <h2 className="text-4xl font-bold text-center mb-12">Why Muthya Soft?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-3">10+ Years Experience</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Proven track record with major financial institutions, tech leaders, and analytics consultancies
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
              <h3 className="text-xl font-bold mb-3">AI-First Approach</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Modern data infrastructure designed for the AI era — from day one
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
            Let's discuss how we can help you achieve your AI and data engineering goals
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

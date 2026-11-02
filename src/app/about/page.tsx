export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-orange-50 dark:from-slate-900 dark:via-amber-950 dark:to-orange-950">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About Muthya Soft</h1>
          <p className="text-xl text-blue-100">
            AI-powered solutions and enterprise data engineering
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">What We Do</h2>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              Muthya Soft helps organizations build intelligent, AI-ready data infrastructure. We combine deep data engineering expertise with modern AI/LLM integration to deliver production-grade solutions at enterprise scale.
            </p>

            <div className="space-y-6 text-gray-700 dark:text-gray-300">

              <div>
                <h3 className="font-semibold text-xl mb-3">AI Services</h3>
                <ul className="space-y-2 ml-4 list-disc">
                  <li><strong>LLM Integration</strong> — OpenAI, Claude, open-source models</li>
                  <li><strong>RAG Pipelines</strong> — Knowledge retrieval and document AI</li>
                  <li><strong>AI Product Development</strong> — Full-stack AI-powered applications</li>
                  <li><strong>AI Agents & Workflows</strong> — Orchestration and automation</li>
                  <li><strong>Vector Databases</strong> — Pinecone, Weaviate, pgvector</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">Data Engineering</h3>
                <ul className="space-y-2 ml-4 list-disc">
                  <li><strong>Pipeline Design</strong> — ETL/ELT, streaming, batch processing</li>
                  <li><strong>Cloud Architecture</strong> — AWS, GCP, Azure modernization</li>
                  <li><strong>Performance Optimization</strong> — PySpark, Spark, distributed systems</li>
                  <li><strong>Data Observability</strong> — Quality checks, monitoring, alerting</li>
                  <li><strong>Infrastructure as Code</strong> — Terraform, CloudFormation</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">Enterprise Track Record</h3>
                <ul className="space-y-2 ml-4 list-disc">
                  <li>Global investment banks — large-scale data platforms</li>
                  <li>Leading analytics consultancies — full-stack consulting</li>
                  <li>Semiconductor and industrial automation — data infrastructure</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">Why Muthya Soft?</h3>
                <ul className="space-y-2 ml-4 list-disc">
                  <li><strong>Production-First</strong> — Solutions built for real-world scale, not demos</li>
                  <li><strong>AI-Ready Data</strong> — Infrastructure designed for the AI era</li>
                  <li><strong>10+ Years</strong> — Enterprise experience across multiple industries</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Together</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            From data infrastructure to AI integration — let's discuss your project.
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

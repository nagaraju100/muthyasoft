import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 dark:from-slate-900 dark:via-emerald-950 dark:to-teal-950">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-blue-100">
            Let's discuss how we can help you achieve your data engineering goals
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Whether you're interested in our services, have questions about data engineering, or want to collaborate, we'd love to hear from you.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* FAQ or Quick Info */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">What technologies do you work with?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We work with Python, PySpark, Databricks, Apache Airflow, AWS, GCP, Azure, Kafka, Docker, Kubernetes, and Terraform across full-stack data engineering and AI solutions.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">What types of services do you offer?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We offer data pipeline development, cloud migration, technical consulting, AI automation, and code review services. Visit our Services page for details on each offering.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">What's your response time?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We typically respond to inquiries within 24 hours. Feel free to use the contact form above for direct communication.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 dark:from-slate-900 dark:via-emerald-950 dark:to-teal-950">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-blue-100">
            Let's discuss how I can help you achieve your data engineering goals
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Send Me a Message</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Whether you're interested in tutoring, have questions about data engineering, or want to collaborate, I'd love to hear from you.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Other Ways to Connect */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Other Ways to Connect</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="https://www.youtube.com/@TechGeniusMinds"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">📹</div>
              <h3 className="text-xl font-bold mb-2">YouTube</h3>
              <p className="text-gray-700 dark:text-gray-300">
                TechGeniusMinds
              </p>
            </a>

            <a
              href="https://medium.com/@nagarajugajula100"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-bold mb-2">Medium</h3>
              <p className="text-gray-700 dark:text-gray-300">
                @nagarajugajula100
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/nagaraju-gajula-0a408427/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nagaraju Gajula
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ or Quick Info */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">What topics do you cover in tutoring?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                I cover all aspects of modern data engineering including Python, PySpark, Databricks, Airflow, cloud platforms (AWS/GCP/Azure), and production best practices.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">How are tutoring sessions conducted?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Sessions are conducted online via video call, allowing for screen sharing and hands-on coding. We'll work together on real-world problems tailored to your goals.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">What's your response time?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                I typically respond to inquiries within 24 hours. Feel free to use the contact form above or connect via LinkedIn for faster communication.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

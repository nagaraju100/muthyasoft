export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <main className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Data Engineering Tutoring
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Learn from an experienced industry practitioner
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <p className="text-lg">
            Welcome to your data engineering learning journey.
            Master modern data stacks, pipelines, and production patterns.
          </p>
        </div>
      </main>
    </div>
  );
}

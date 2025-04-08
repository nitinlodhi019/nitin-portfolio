// src/components/Certifications.tsx
export default function Certifications() {
    return (
      <section
        id="certifications"
        className="py-20 px-8 bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-12">
            Certifications
          </h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold">Machine Learning – Coursera</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Completed: March 2023</p>
              <a
                href="https://coursera.org/verify/example-link"
                target="_blank"
                className="text-indigo-600 text-sm underline"
              >
                View Certificate
              </a>
            </div>
  
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold">Python for Data Science – IBM</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Completed: July 2022</p>
              <a
                href="https://www.credly.com/badges/example-link"
                target="_blank"
                className="text-indigo-600 text-sm underline"
              >
                View Certificate
              </a>
            </div>
  
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold">Deep Learning Specialization – Coursera</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Completed: January 2024</p>
              <a
                href="https://coursera.org/verify/example-link"
                target="_blank"
                className="text-indigo-600 text-sm underline"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
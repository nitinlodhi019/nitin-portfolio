// src/components/Education.tsx
export default function Education() {
    return (
      <section id="education" className="py-20 px-8 bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-12">
            Education
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">Bachelor of Technology in Computer Science</h3>
              <p className="text-gray-600 dark:text-gray-300">XYZ University, India</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2020 – 2024</p>
              <p className="mt-2 text-gray-700 dark:text-gray-200">
                CGPA: 8.6/10 – Focused on Machine Learning, Data Science, and Software Development.
              </p>
            </div>
  
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">Senior Secondary (12th Grade)</h3>
              <p className="text-gray-600 dark:text-gray-300">ABC Senior Secondary School</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2018 – 2020</p>
              <p className="mt-2 text-gray-700 dark:text-gray-200">
                Score: 92% – Science with Mathematics and Computer Science.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
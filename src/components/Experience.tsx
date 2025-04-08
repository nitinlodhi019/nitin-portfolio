// src/components/Experience.tsx
export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-12">
          Experience
        </h2>

        <div className="space-y-8">
          <div className="border-l-4 border-indigo-600 pl-4">
            <h3 className="text-xl font-semibold">Data Science Intern</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Unified Mentor | November 2024 - December 2023
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>
                Developed a machine learning model using Python and advanced
                techniques.
              </li>
              <li>
                Worked on data analysis and machine learning projects, gaining
                hands-on experience in building predictive models.
              </li>
              <li>Improved accuracy by 3% through ensemble learning.</li>
            </ul>
          </div>

          {/* Add more experiences as needed */}
        </div>
      </div>
    </section>
  );
}

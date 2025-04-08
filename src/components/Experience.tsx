// src/components/Experience.tsx
export default function Experience() {
    return (
      <section id="experience" className="py-20 px-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-12">Experience</h2>
  
          <div className="space-y-8">
            <div className="border-l-4 border-indigo-600 pl-4">
              <h3 className="text-xl font-semibold">Software Developer Intern</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">ABC Company | June 2023 - August 2023</p>
              <ul className="list-disc list-inside mt-2">
                <li>Built a Book Recommendation System using KNN algorithm.</li>
                <li>Collaborated on the UI using React with Anshika Verma.</li>
                <li>Deployed project on Render platform.</li>
              </ul>
            </div>
  
            {/* Add more experiences as needed */}
          </div>
        </div>
      </section>
    );
  }
  
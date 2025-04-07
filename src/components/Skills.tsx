// src/components/Skills.tsx

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-8 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-12">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Programming & Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Programming & Tools</h3>
            <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
              <li>Python</li>
              <li>SQL</li>
              <li>Pandas</li>
              <li>NumPy</li>
              <li>Scikit-learn</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

          {/* Machine Learning */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Machine Learning</h3>
            <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
              <li>Supervised Learning</li>
              <li>Unsupervised Learning</li>
              <li>Ensemble Learning</li>
              <li>Clustering</li>
              <li>Deep Learning</li>
              <li>TensorFlow</li>
              <li>Keras</li>
              <li>Data Preprocessing</li>
            </ul>
          </div>

          {/* Data Science */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Data Science</h3>
            <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
              <li>Data Science</li>
              <li>Data Analytics</li>
              <li>Data Visualization</li>
              <li>Computer Vision</li>
              <li>Descriptive Statistics</li>
              <li>Predictive Statistics</li>
            </ul>
          </div>

          {/* Version Control */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Version Control</h3>
            <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
              <li>Git</li>
              <li>GitHub</li>
              <li>CI/CD Basics</li>
              <li>Branch Management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

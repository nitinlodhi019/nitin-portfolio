// src/components/Projects.tsx
type Project = {
  title: string;
  description: string;
  github: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Book Recommendation System",
    description:
      "Collaborative filtering-based recommendation system using KNN.",
    github: "https://github.com/nitinlodhi019/Book-Recommendation-System",
    demo: "https://book-recommendation-system-94gz.onrender.com/",
  },
  {
    title: "Handwritten Digit Classifier",
    description: "A 97% accurate ANN model for handwritten digit recognition.",
    github: "https://github.com/nitinlodhi019/Digit-Classifier-ANN",
  },
  {
    title: "Iris Classification",
    description:
      "Built a machine learning model using Scikit-learn to classify iris species.",
    github: "https://github.com/nitinlodhi019/Iris-Classification",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 bg-gray-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline"
                >
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

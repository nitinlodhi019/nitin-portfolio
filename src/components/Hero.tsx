export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="text-center py-20 px-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Nitin 👋</h1>
      <p className="text-lg md:text-2xl mb-8">
        A passionate developer skilled in React, TypeScript, Python, and Machine
        Learning.
      </p>
      <button
        onClick={scrollToProjects}
        className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition"
      >
        See My Work
      </button>
    </section>
  );
}

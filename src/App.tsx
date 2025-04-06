import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white min-h-screen">
      <Navbar />

      {/* Hero / Welcome Section */}
      <section
        id="hero"
        className="flex items-center justify-center h-screen text-4xl font-bold"
      >
        🚀 Tailwind CSS with TypeScript!
      </section>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

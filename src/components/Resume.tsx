export default function Resume() {
    return (
      <section id="resume" className="py-20 px-8 bg-gray-100 text-gray-800 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6">My Resume</h2>
          <p className="mb-6">Want to know more about my experience and background?</p>
          <a
            href="/Nitin-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-indigo-700 transition"
          >
            View Resume
          </a>
        </div>
      </section>
    );
  }
  
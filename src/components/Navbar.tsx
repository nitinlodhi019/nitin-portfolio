// src/components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">MyPortfolio</h1>
      <ul className="flex gap-4 text-gray-700 font-medium">
        <li>
          <a href="#about">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

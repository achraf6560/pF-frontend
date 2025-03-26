import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-blue-600">EcLosia</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/internships" className="hover:text-blue-600">Internships</Link></li>
          <li><Link to="/how-it-works" className="hover:text-blue-600">How It Works</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
        </ul>
        <div>
          <Link to="/login" className="text-blue-600 hover:underline">Log In</Link>
          <Link to="/signup" className="ml-4 px-4 py-2 bg-blue-600 text-white rounded">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

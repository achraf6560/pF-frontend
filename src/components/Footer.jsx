import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-10">
      <div className="container mx-auto flex justify-between">
        <div>
          <h2 className="text-lg font-bold">EcLosia</h2>
          <p className="text-sm">Simplifying academic internships & projects.</p>
        </div>
        <div>
          <h3 className="font-semibold">Resources</h3>
          <ul className="text-sm">
            <li>Help Center</li>
            <li>Documentation</li>
            <li>Guides</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Company</h3>
          <ul className="text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-xs mt-4">© 2025 EcLosia. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

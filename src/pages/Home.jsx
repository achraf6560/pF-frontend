import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <header className="bg-blue-100 text-center py-20">
        <h1 className="text-4xl font-bold text-blue-900">
          Transforming Academic Internship Management
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          A centralized platform that connects students, educators, and companies.
        </p>
        <div className="mt-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mr-4">
            Get Started
          </button>
          <button className="border border-blue-600 px-6 py-3 rounded-lg">
            Explore Features
          </button>
        </div>
      </header>

      <section className="container mx-auto my-16 text-center">
        <h2 className="text-3xl font-semibold">Platform Features</h2>
        <p className="text-gray-700 mt-2">Everything You Need in One Place</p>
        <div className="grid grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="font-bold">Search & Apply</h3>
            <p className="text-sm text-gray-600">Find internships based on skills & location.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="font-bold">Real-time Notifications</h3>
            <p className="text-sm text-gray-600">Get instant alerts on your applications.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="font-bold">AI Recommendations</h3>
            <p className="text-sm text-gray-600">Smart internship matches for students.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-semibold">Tailored for Everyone</h2>
        <div className="grid grid-cols-3 gap-8 mt-8 px-16">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="font-bold">For Students</h3>
            <p className="text-sm">Find and apply for internships easily.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="font-bold">For Educators</h3>
            <p className="text-sm">Monitor and evaluate student internships.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="font-bold">For Companies</h3>
            <p className="text-sm">Post internships and connect with students.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

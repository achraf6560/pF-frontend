import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
      <Card 
        image="https://source.unsplash.com/random/400x300" 
        title="StageHub" 
        description="Une plateforme pour gérer vos stages facilement."
      />
    </section>
  );
};

export default Home;

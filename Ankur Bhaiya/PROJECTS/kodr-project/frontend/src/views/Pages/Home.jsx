import React from "react";
import NavBar from "../../components/others/NavBar";

const Home = () => {

  return (
    <main className="flex min-h-screen bg-gray-900">
   <NavBar/>
    {/* Your Home Page Content */}
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-white">Welcome to Your Home Page</h1>
    </div>
  </main>
  
  );
};

export default Home;

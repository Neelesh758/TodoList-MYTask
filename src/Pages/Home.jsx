import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto min-h-[80vh] bg-violet-100 p-8 my-6 rounded-xl flex flex-col items-center justify-center text-center">
      
      <div className="my-10">
         <span className='font-bold text-red-700 font-3xl'>my</span><span className='font-extrabold text-4xl'>Task</span>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Stay organized and productive — manage your daily tasks easily and efficiently.
        </p>
        <button
          onClick={() => navigate("/task")}
          className="mt-6 bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-all"
        >
          Go to My Tasks
        </button>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full max-w-5xl">
        <div className="bg-violet-200 p-6 rounded-xl shadow-md hover:scale-105 transition-transform">
          <h2 className="font-bold text-xl mb-2 text-blue-800">✅ Create Tasks</h2>
          <p className="text-gray-700">
            Quickly add your todos and stay on track with your goals.
          </p>
        </div>

        <div className="bg-violet-200 p-6 rounded-xl shadow-md hover:scale-105 transition-transform">
          <h2 className="font-bold text-xl mb-2 text-blue-800">✏️ Edit & Delete</h2>
          <p className="text-gray-700">
            Easily update or remove completed tasks anytime you like.
          </p>
        </div>

        <div className="bg-violet-200 p-6 rounded-xl shadow-md hover:scale-105 transition-transform">
          <h2 className="font-bold text-xl mb-2 text-blue-800">💾 Auto Save</h2>
          <p className="text-gray-700">
            Your todos stay safe even after you refresh or close the tab.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center italic text-gray-600">
        "Small daily improvements lead to stunning results." 🌱
      </div>
    </div>
  );
};

export default Home;

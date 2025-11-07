import React from 'react';
import { Link } from 'react-router-dom';

const Welcome: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 bg-gray-50">
      
      {/* Welcome Card */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-500 mb-4">Welcome to Smart-Blog!</h1>
        <p className="text-gray-700 text-lg">
          Here you can manage your account, view your dashboard, and explore features.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/login"
          className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Register
        </Link>
      </div>

    </div>
  );
};

export default Welcome;

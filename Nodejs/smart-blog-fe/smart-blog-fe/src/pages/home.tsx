import React from "react";
import { FiFileText, FiUsers, FiEdit3, FiBarChart2 } from "react-icons/fi";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Navigation Bar */}
      <header className="bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-600">Smart Blog Dashboard</h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="flex-1 p-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-gray-500">Total Posts</h3>
              <FiFileText className="text-blue-500 text-xl" />
            </div>
            <p className="text-3xl font-semibold text-gray-800">34</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-gray-500">Users</h3>
              <FiUsers className="text-green-500 text-xl" />
            </div>
            <p className="text-3xl font-semibold text-gray-800">1,204</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-gray-500">Drafts</h3>
              <FiEdit3 className="text-yellow-500 text-xl" />
            </div>
            <p className="text-3xl font-semibold text-gray-800">8</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-gray-500">Views</h3>
              <FiBarChart2 className="text-purple-500 text-xl" />
            </div>
            <p className="text-3xl font-semibold text-gray-800">12.4k</p>
          </div>
        </div>

        {/* Recent Posts Table */}
        <section className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="pb-3">Title</th>
                <th className="pb-3">Author</th>
                <th className="pb-3">Date</th>
                <th className="pb-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3">Exploring React Best Practices</td>
                <td>Jane Doe</td>
                <td>Nov 6, 2025</td>
                <td className="text-right text-green-600 font-medium">Published</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3">10 Tips for Writing Clean Code</td>
                <td>John Smith</td>
                <td>Nov 4, 2025</td>
                <td className="text-right text-yellow-500 font-medium">Draft</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3">Understanding Tailwind CSS</td>
                <td>Amy White</td>
                <td>Oct 31, 2025</td>
                <td className="text-right text-green-600 font-medium">Published</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Home;

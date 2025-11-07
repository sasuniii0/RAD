import { useNavigate } from 'react-router-dom';
import {register} from '../services/auth';
import React, { type FormEvent } from 'react';


const Register: React.FC = () => {

    // State variables for form fields (not yet connected)
    // state -> component data
    // useState -> hook to manage state in functional components

    const navigate = useNavigate();

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [role, setRole] = React.useState('User');


    const handleRegister = async (e : FormEvent) => {
        e.preventDefault(); // ignore the page reloading on form submit

        if (!firstName || !lastName || !email || !password || !confirmPassword || !role) {
            alert("Please fill in all fields");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try{
            const obj = {
                firstName:firstName,
                lastName:lastName,
                email:email,
                password:password,
                role:role.toLocaleUpperCase(),
            }
            const response:any = await register(obj);
            console.log(response.data);

            alert("Registration successful! You can now log in.");
            navigate('/login');
            return;
        }catch (error) {
            console.error("Registration failed:", error);
            alert("Registration failed. Please try again.");
            return;
        }


    }

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-green-500 mb-6">Register</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="First Name"
            value = {firstName}
            onChange = {(e) => setFirstName(e.target.value)}
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange = {(e) => setLastName(e.target.value)}
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange = {(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange = {(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange = {(e) => setConfirmPassword(e.target.value)}
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
           
          <label htmlFor="role" className="font-medium text-gray-700">
            Select Role
          </label>
          <select value={role} onChange={(e) => setRole(e.target.value)} className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400">
            <option value="author">Author</option>
            <option value="user">User</option>
          </select>
          <button
            type="submit"
            onClick={handleRegister}
            className="bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-green-600 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

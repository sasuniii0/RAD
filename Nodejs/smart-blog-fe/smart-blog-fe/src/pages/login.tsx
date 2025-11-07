import React from 'react';
import { useNavigate } from 'react-router-dom';
import {getMydetails, login} from '../services/auth';
import { useAuth } from '../context/authContext';

const Login: React.FC = () => {

    const navigate = useNavigate();

    // context eka athule ewa eliyta gnnwa
    const {user , setUser} = useAuth()

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Please fill in all fields");
            return;
        }

        try{
            const obj = {
                email:email,
                password:password,
            }
            const response:any = await login(obj.email, obj.password);

            const token = response.data.accessToken

            if(!token) {
                alert("Login failed. Please try again.");
                return;
            }

            await localStorage.setItem('token', token);

            const details = await getMydetails()
            setUser(details.data)
            console.log(details.data)

            console.log(response.data);
            alert("Login successful!");
            navigate('/home');
            return;
        }catch (error) {
            console.error("Login failed:", error);
            alert("Login failed. Please try again.");
            return;
        }
    }


  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-green-500 mb-6">Login</h1>
        <form className="flex flex-col gap-4">
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
          <button
            type="submit"
            onClick={handleLogin}
            className="bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-green-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

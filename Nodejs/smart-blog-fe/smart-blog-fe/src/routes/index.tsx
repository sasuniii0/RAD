import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Suspense, lazy } from 'react';


const Home = lazy(() => import('../pages/home'));
const Login = lazy(() => import('../pages/login'));
const Register = lazy(() => import('../pages/register'));
const Welcome = lazy(() => import('../pages/welcome'));

export default function Router (){
   return(
    <BrowserRouter>
      <Suspense fallback={<div className="text-center mt-20 text-xl">Loading...</div>}>
        {/* Header / Navigation */}
        <header className="bg-green-500 sticky top-0 z-50 shadow-md">
          <nav className="container mx-auto flex justify-center py-4">
            <ul className="flex gap-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-white font-bold underline'
                      : 'text-white font-bold hover:underline'
                  }
                >
                  Welcome
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-white font-bold underline'
                      : 'text-white font-bold hover:underline'
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-white font-bold underline'
                      : 'text-white font-bold hover:underline'
                  }
                >
                  Register
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-white font-bold underline'
                      : 'text-white font-bold hover:underline'
                  }
                >
                  Home
                </NavLink>
              </li> */}
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="container mx-auto p-6 min-h-[70vh]">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 text-gray-700 py-4 text-center">
          <p>© 2025 Your Name. All rights reserved.</p>
        </footer>
      </Suspense>
    </BrowserRouter>
   )
}
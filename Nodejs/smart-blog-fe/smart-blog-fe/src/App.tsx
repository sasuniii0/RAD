import { AuthProvider } from './context/authContext';
import Router from './routes';

function App() {
  return (
    <AuthProvider>
      <Router/>
    </AuthProvider>
  );
}

export default App;

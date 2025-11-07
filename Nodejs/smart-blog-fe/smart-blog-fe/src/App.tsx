import { AuthProvider } from './context/authContext';
import Router from './routes';

function App() {

  // context ek athule tiyna dewal meken access krnn ba wrapp wela tiynna one..

  return (
    <AuthProvider>
      <Router/>
    </AuthProvider>
  );
}

export default App;

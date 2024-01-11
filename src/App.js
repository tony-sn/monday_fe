import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/signup/Signup';
import SignUpEmail from './pages/signupEmail/SignUpEmail';

function App() {
  return (
    <>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signup-email' element={<SignUpEmail />} />
      </Routes>
    </>
  );
}

export default App;

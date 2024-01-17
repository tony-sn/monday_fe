import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/signup/Signup';
import SignUpEmail from './pages/signupEmail/SignUpEmail';
import Invitation from './pages/invitation/Invitation';

function App() {
  return (
    <>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signup-email' element={<SignUpEmail />} />
        <Route path='/invitation' element={<Invitation />} />
      </Routes>
    </>
  );
}

export default App;


import SignUpForm from "./components/SignUp";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./components/Login";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;

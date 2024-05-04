
import SignUpForm from "./components/SignUp";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </>
  );
}

export default App;

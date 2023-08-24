import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
// import Register from "./pages/Register";
import Register from "./pages/Register/register"
import MainHomePage from "./pages/MainHomePage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<MainHomePage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

// connect mongodb  

//C:\Exam\SGP\client -npm start

//C:\Exam\SGP -npm start / npm run start
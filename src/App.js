
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./components/Auth";
import ProfileSwitcher from './components/ProfileSwitcher';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/multi-profile/:email" element={<ProfileSwitcher />} />
      <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import "bootstrap/dist/css/bootstrap.min.css"
import 'font-awesome/css/font-awesome.min.css'; // FontAwesome CSS

import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./components/Auth";
import ProfileSwitcher from './components/ProfileSwitcher';
import Home from './components/Home';
import CertificationProgram from './components/CertificationProgram';
import CertificationProgramDetail from './components/CertificationProgramDetail';
import Dashboard from './components/Dashboard';
import Theme from "./components/Theme";
import LessonList from './components/LessonList';
import CourseList from './components/CourseList';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/multi-profile/:email" element={<ProfileSwitcher />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/theme" element={<Theme/>} />
      <Route path="/course" element={<CourseList/>} />
      <Route path="/lessons/:courseId" element={<LessonList/>} />
      <Route path="/program" element={<CertificationProgram/>} />
      <Route path="/program-detail/:certificate_type_id" element={<CertificationProgramDetail/>} />
      
      </Routes>
    </BrowserRouter>
  )
}

export default App
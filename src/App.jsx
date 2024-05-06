import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/pages/developer/database/home/Home'
import Project from './components/pages/developer/database/project/Project'
import Contact from './components/pages/developer/database/contact/Contact'
import Skills from "./components/pages/developer/database/skills/Skills"

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  </>
  )
}

export default App
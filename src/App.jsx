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
        <Route path="/database/home" element={<Home/>}/>
        <Route path="/database/skills" element={<Skills/>}/>
        <Route path="/database/project" element={<Project/>}/>
        <Route path="/database/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  </>
  )
}

export default App
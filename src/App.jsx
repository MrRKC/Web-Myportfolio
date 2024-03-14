import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Exprience from './pages/Exprience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';
import './App.css';

function App() {
    return (
        <div className="app">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/projects" element={<Projects/>} />
                    <Route path="/project/:id" element={<ProjectDisplay/>} />
                    <Route path="/exprience" element={<Exprience/>} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default App;

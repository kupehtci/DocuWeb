// Main import
import {BrowserRouter, Routes, Route} from "react-router";

// Views
import Home from './views/Home';
import View404 from './views/View404';

// Cross-SPA components
import Navbar from './components/Navbar';

// Custom CSS
import './App.css'

function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <main className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<View404 />} />
            </Routes>
        </main>
    </BrowserRouter>
  )
}

export default App

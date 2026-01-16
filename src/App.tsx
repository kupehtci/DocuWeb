// Main import
import {BrowserRouter, Routes, Route} from "react-router";

// Views
import Home from './views/Home';
import View404 from './views/View404';

// Cross-SPA components
import {Navbar, SideBar} from './components/';

// Custom CSS
import './App.css'

function App() {

  return (
    <BrowserRouter>
        <div className="app">
            <Navbar />
            <SideBar />
            <main className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<View404 />} />
                </Routes>
            </main>
        </div>
    </BrowserRouter>
  )
}

export default App

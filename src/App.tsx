// Main import
import {BrowserRouter, Routes, Route} from "react-router";

// Views
import Home from './views/Home';
import View404 from './views/View404';

// Custom CSS
import './App.css'

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<View404 />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

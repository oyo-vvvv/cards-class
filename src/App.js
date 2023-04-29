import './App.css';
import Cv from './pages/Cv/Cv'; 
import { Routes, Route} from "react-router-dom"
import PageError from './pages/PageError/PageError';
import Blog from './pages/Blog/Blog';
import Card from './pages/Card/Card';
import Navbar from './components/Navbar/Navbar';
import List from './components/List/List'
import Counter from './components/Counter/Counter';
import ExampleObject from './components/ExampleObject/ExampleObject';
import Toogle from './components/Toogle/Toogle'
import UseEffectCompo from './pages/UseEffectCompo/UseEffectCompo'
import Articles from './pages/Article/Articles';
import SetIntervalCompo from './pages/SetIntervalCompo/SetIntervalCompo';
import MouseMove from './pages/MouseMove/MouseMove';

function App() {

  return (
      <Routes>
        <Route index element={<Card />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/card" element={<Card />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/SetIntervalCompo" element={<SetIntervalCompo />} />
        <Route path="/exampleObject" element={<ExampleObject/>}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/toogle" element={<Toogle/>} />
        <Route path="/useEffectCompo" element={<UseEffectCompo />} />
        <Route path="/articles/:id" element={<Articles />} />
        <Route path="/list" element={<List/>}/>
        <Route path="*" element={<PageError />} />
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/MouseMove" element={<MouseMove />} />

      </Routes>
  );
}

export default App;
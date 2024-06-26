import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Dashboard from './components/Dashboard';
import Skills from './components/Skills';
import Blog from './components/Blog';
import BlogDashboard from './components/BlogDashboard'
function App() {
  return (
   <>
    <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element= {<Home/>}/> 
          <Route path="about" index element= {<About/>}/> 
          <Route path="contact" index element= {<Contact/>}/> 
          <Route path="portfolio" index element= {<Portfolio/>}/> 
          <Route path="dashboard" index element= {<Dashboard/>}/>
          <Route path="bdashboard" index element= {<BlogDashboard/>}/>

          <Route path='blog' index element= {<Blog/>}/> 
          <Route path='skills' index element= {<Skills/>}/> 
        </Route>
    </Routes>
   </>
  );
}

export default App;


import './App.css';
import NavBar from './components/navbar/NavBar'
import Home from './components/home/Home'
import Explore from './components/explore/Explore'
import Book from './components/book/Book'
import About from './components/about/About'
import WhyUs from './components/whyUs/WhyUs';
import Footer from './components/Footer';
import { useEffect } from 'react';
import Login from './components/login/Login';

// const cors = require('cors')
// app.use(cors())
function App() {
  // useEffect(() => {
  //   fetch('https://dogs-app200.herokuapp.com/dogs')
  //   .then(res => res.json())
  //   .then(console.log)
  // }, [])
  return (
    <>
       <Login />
     <NavBar />
     <section className='sections'>
       <Home />
       <Explore />
       <WhyUs />
       <Book />
       <About />
       <Footer />
     </section>
    </>
  );
}

export default App;

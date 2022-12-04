
import './App.css';
import NavBar from './components/navbar/NavBar'
import Home from './components/home/Home'
import Explore from './components/explore/Explore'
import Book from './components/book/Book'
import About from './components/about/About'
import WhyUs from './components/whyUs/WhyUs';

function App() {

  return (
    <>
     <NavBar />

     <section className='sections'>
       <Home />
       <Explore />
       <WhyUs />
       <Book />
       <About />
     </section>
    </>
  );
}

export default App;

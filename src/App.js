
import './App.css';
import NavBar from './components/navbar/NavBar'
import Main from './components/main/Main';
import Ticket from './components/ticket/Ticket'
import { Route, Routes } from 'react-router-dom';
// import Login from './components/login/Login';

function App() {
  return (
    <>
    {/* Uncomment the Login part to finish up with Authentications */}
    
     {/* <Login /> */}
     <NavBar />
     <section className='sections'>
       <Routes>
          <Route path='/' element={<Main />}  />
          <Route path='/ticket' element={<Ticket />} />
       </Routes>
     </section>
    </>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/AboutUs';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import CheckOut from './Pages/CheckOut/CheckOut';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Services from './Pages/Home/Services/Services';
import Review from './Pages/Review/Review';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/aboutus' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/reviews' element={<Review></Review>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

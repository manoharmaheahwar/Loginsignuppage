
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import ProductList from './components/ProductList';
import AddProducts from './components/AddProducts';
import UpdateProduct from './components/UpdateProduct';



function App() {
  let data=window.location.pathname;
  return (
    
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>

            <Route exact path="/login" element={<Login/>} />
            <Route path='/signup' element={<SignUp/>}/>

            <Route element={<PrivateComponent/>}>
              <Route path='/' element={<ProductList/>} />
              <Route path='/add' element={<AddProducts/>}/>
              <Route path='/update/:id' element={<UpdateProduct/>}/>
              <Route path='/logout' element={<h1>logout</h1>}/>
              <Route path='/profile' element={<h1>profile</h1>}/>
            </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

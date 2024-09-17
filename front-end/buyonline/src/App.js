import logo from './logo.svg';
import './App.css';
import Login from '../src/comp/Login'
import ProductList from './comp/Features/Product/ProductList';
import SignUp from './comp/SignUp';
import AddProduct from './comp/Features/Product/AddProduct';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './comp/Users';
import Orders from './comp/Orders'
import BasicTable from './comp/Features/User/BasicTable';
import CollapsibleTable from './comp/Features/Order/CollapsibleTable';
import ButtonAppBar from './comp/ButtonAppBar';
import ColumnGroupingTable from './comp/ColumnGroupingTable';
import Grafic from './comp/Grafic';





function App() {
  return (
    <div className="App">

      {/* <Grafic></Grafic> */}
      <BrowserRouter>
      
      <ButtonAppBar></ButtonAppBar>
     
        <Routes>
          <Route path="Login" element={<Login />}></Route>
          <Route path='/Users' element={<BasicTable />}></Route>
          <Route path="/" element={<ProductList />}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/Orders' element={<CollapsibleTable />}></Route>
          <Route path='/ButtonAppBar' element={<ButtonAppBar />}></Route>
          <Route path='/ProductList' element={<ProductList />}></Route>
          <Route path='/BasicTable' element={<BasicTable />}></Route>
          <Route path='/AddProduct' element={<AddProduct />}></Route>
        </Routes>

      </BrowserRouter> 
    </div>
  );
}

export default App;

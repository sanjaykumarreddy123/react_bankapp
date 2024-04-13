import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddBankAccount from './components/AddBankAccount';
import BankAccountInfo from './components/BankAccountInfo';
import BankAccountList from './components/BankAccountList';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <Header />
      </div>
      <div className='row'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/home" element={<HomePage/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/list" element={<BankAccountList/>}></Route>
            <Route path="/update/:id" element={<AddBankAccount/>}></Route>
            <Route path="/info/:id" element={<BankAccountInfo/>}></Route>
            <Route path="/addbankaccount" element={<AddBankAccount/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <div className='row'> 
      <Footer />
      </div>


    </div>
  );
}

export default App;

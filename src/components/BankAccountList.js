import React, { useEffect, useState } from 'react';
import {Link , useNavigate } from 'react-router-dom';
import { deleteBankAccount, getAllAccounts } from '../services/BankAccountService';
import './BankAccountList';

export default function BankAccountList() {
    const [accounts, setAccounts] = useState([]);
    const navigate = useNavigate();
    // const { id } = useParams();
    const addAccount = () => {
        navigate('/addBankAccount')
    }
    const updateAccount=(id)=>{
        navigate(`/update/${id}`)
    }
    const accountInfo=(id)=>{
        navigate(`/info/${id}`)
    }
    const deleteAccount = (id) => {
        navigate('/list')
        deleteBankAccount(id)
            .then((res) => {
                // alert("account deleted")
                getAllAccountsInfo();
            }).catch((error) => console.log("unable to delete" + error))

    }
    useEffect(() => {
        getAllAccountsInfo();
    }, []
    )
    const getAllAccountsInfo = () => {
        getAllAccounts()
            .then((res) => {
                setAccounts(res.data);
                console.log(res.data)
            })
            .catch((error) => { console.log(error) })
    }


    return (<>
        <div className='bg-dark d-flex align-items-center justify-content-between px-lg-5'>
            
            
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <h2 className='py-3 text-white'>Bank Account List</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Link className="navbar-brand" to="/home">Home</Link>&nbsp;&nbsp;&nbsp;
                <button className='navbar-brand ' onClick={addAccount}>Add Account</button>&nbsp;&nbsp;&nbsp;
                <Link className="navbar-brand" to="#">About</Link>&nbsp;&nbsp;&nbsp;
                <Link className="navbar-brand" to="#">Contact Us</Link>&nbsp;&nbsp;
                <form className="d-flex ms-auto">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                    </nav>
        </div>
        <div className='container'>
            <table className="table table-striped table-hover" style={{  border: "black 3px solid"}}>
                <thead>
                    <th style={{color:"black"}}>Account Number</th>
                    <th style={{color:"black"}}>Account Holder Name</th>
                    <th style={{color:"black"}}>Bank Name</th>
                    <th style={{color:"black"}}>Actions</th>
                </thead>
                <tbody>
                    {accounts.map((account) => (
                        <tr key={account.accountNum}>
                            <td style={{color:"black"}}>{account.accountNum}</td>
                            <td style={{color:"black"}}>{account.accountHolderName}</td>
                            <td style={{color:"black"}}>{account.bankName}</td>
                            <td>
                                <button className="btn btn-primary me-lg-3" onClick={()=>updateAccount(account.accountNum)}>Update</button>
                                <button className='btn btn-danger  me-lg-3' onClick={()=>deleteAccount(account.accountNum)}>Delete</button>
                                <button className="btn btn-info  me-lg-3" onClick={()=>accountInfo(account.accountNum)}>Info</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div></>
    )
}

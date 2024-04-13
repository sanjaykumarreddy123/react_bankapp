import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBankAccountByAccountNum, insertBankAccount, updateBankAccount } from '../services/BankAccountService';



export default function AddBankAccount() {

    const [accountHolderName, setAccountHolderName] = useState('');
    const [accountNum, setaccountNum] = useState('');
    const [bankName, setBankName] = useState('');
    const [ifscnum, setIFSCNum] = useState('');
    const [location, setLocation] = useState('');
    const [accountHolderMobileNum, setAccountHolderMobileNum] = useState('');
    const [accountHolderEmail, setAccountHolderEmail] = useState('');
    const [panNum, setPanNum] = useState('');
    const [aadharNum, setAadharNum] = useState(0);

    const navigate = useNavigate(null);
    const { id } = useParams();
    const saveOrUpdateAccounts = (e) => {
        e.preventDefault();
        const account = { accountHolderName, bankName, accountNum, ifscnum, location, accountHolderMobileNum, accountHolderEmail, panNum, aadharNum }
        if (id) {
            updateBankAccount(id, account).then((response) => {
                navigate('/list')
                console.log(response.id)
            }).catch(error => {
                console.log(error)
            })
        } else {
            insertBankAccount(account).then((response) => {
                console.log(response.data)
                navigate('/list');
            }).catch(error => {
                console.log(error)
            })
        }

    }

    useEffect(() => {

        if (id) {
            getBankAccountByAccountNum(id).then((response) => {
                setAccountHolderName(response.data.accountHolderName)
                setaccountNum(response.data.accountNum)
                setBankName(response.data.bankName)
                setIFSCNum(response.data.ifscnum)
                setLocation(response.data.location)
                setAccountHolderMobileNum(response.data.accountHolderMobileNum)
                setAccountHolderEmail(response.data.accountHolderEmail)
                setPanNum(response.data.panNum)
                setAadharNum(response.data.aadharNum)
            }).catch((error) => {
                console.log(error)
            })
        }

    }, [id])

    const pageTitle = (id) => {

        if (id) {
            return <h2>Update Bank Account</h2>
        } else {
            return <h2>Add Bank Account</h2>
        }
    }


    return (
        <>
            <div className='mb-1 bg-dark'>
                <h2 className='py-3 ms-5 text-white'>{pageTitle}</h2>
            </div>
            <div className='container'>
                <div className='row mx-lg-5 py-3'>
                    <form  >
                        <div className="mb-3 container">
                            <label htmlFor="accountHolderName" className="form-label" style={{color:"black"}}>Account Holder Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="accountHolderName"
                                name="accountHolderName"
                                value={accountHolderName}
                                onChange={(e) => setAccountHolderName(e.target.value)}
                                placeholder="Enter account holder name"

                            />
                        </div>
                        <div className="mb-3 container">
                            <label htmlFor="accountNum" className="form-label" style={{color:"black"}}>Account Number</label>
                            <input
                                type="text"
                                className="form-control"
                                id="accountNum"
                                name="accountNum"
                                value={accountNum}
                                onChange={(e) => setaccountNum(e.target.value)}
                                placeholder="Enter account number"

                            />
                        </div>
                        <div className="mb-3 container">
                            <label htmlFor="bankName" className="form-label" style={{color:"black"}}>Bank Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="bankName"
                                name="bankName"
                                value={bankName}
                                onChange={(e) => setBankName(e.target.value)}
                                placeholder="Enter Bank Name"

                            />
                        </div>
                        <div className="mb-3 container">
                            <label htmlFor="IFSCNum" className="form-label" style={{color:"black"}}>IFSC number</label>
                            <input
                                type="text"
                                className="form-control"
                                id="IFSCNum"
                                name="IFSCNum"
                                value={ifscnum}
                                onChange={(e) => setIFSCNum(e.target.value)}
                                placeholder="Enter ifsc number"

                            />
                        </div>
                        <div className="mb-3 container">
                            <label htmlFor="location" className="form-label" style={{color:"black"}}>Location</label>
                            <input
                                type="text"
                                className="form-control"
                                id="location"
                                name="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="Enter location"

                            />

                        </div>
                        <div className="mb-3 container">
                            <label htmlFor="accountHolderMobileNum" className="form-label" style={{color:"black"}}>Mobile number</label>
                            <input
                                type="text"
                                className="form-control"
                                id="accountHolderMobileNum"
                                name="accountHolderMobileNum"
                                value={accountHolderMobileNum}
                                onChange={(e) => setAccountHolderMobileNum(e.target.value)}
                                placeholder="Enter mobile number"

                            />

                        </div>
                        <div className="mb-3 container">
                            <label htmlFor="accountHolderEmail" className="form-label" style={{color:"black"}}>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="accountHolderEmail"
                                name="accountHolderEmail"
                                value={accountHolderEmail}
                                onChange={(e) => setAccountHolderEmail(e.target.value)}
                                placeholder="Enter email address"

                            />
                        </div>


                        <div className="mb-3 container">
                            <label htmlFor="panNum" className="form-label" style={{color:"black"}}>PAN number</label>
                            <input
                                type="text"
                                className="form-control"
                                id="panNum"
                                name="panNum"
                                value={panNum}
                                onChange={(e) => setPanNum(e.target.value)}
                                placeholder="Enter pan number"

                            />
                        </div>

                        <div className="form-group mb-2 container">
                            <label className="form-label" htmlFor="aadharNum" style={{color:"black"}}>Aadhar Number</label>
                            <input
                                type="text"
                                placeholder="Enter Aadhar number"
                                name="aadharNum"
                                className="form-control"
                                value={aadharNum}
                                onChange={(e) => setAadharNum(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className='container'>
                            <button type="submit" className="btn btn-success mt-3 " onClick={(e) => saveOrUpdateAccounts(e)} >Submit </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

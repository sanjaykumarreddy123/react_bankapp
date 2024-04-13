import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getBankAccountByAccountNum } from "../services/BankAccountService";

const BankAccountInfo = () => {

    const [accountHolderName, setAccountHolderName] = useState('');
    const [accountNum, setaccountNum] = useState('');
    const [bankName, setBankName] = useState('');
    const [ifscnum, setIFSCNum] = useState('');
    const [location, setLocation] = useState('');
    const [accountHolderMobileNum, setAccountHolderMobileNum] = useState('');
    const [accountHolderEmail, setAccountHolderEmail] = useState('');
    const [panNum, setPanNum] = useState('');
    const [aadharNum, setAadharNum] = useState(0);
    const { id } = useParams();

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
    console.log(aadharNum)

    return (
        <div className="container">
            <div className="my-5 mx-auto">
            <div className="container">
            <h1 className="text-center my-4" style={{color:"black"}}>Bank Account Information</h1>
                <table className="table-light ">
                    <tr>
                        <td className="ps-5 pt-3" style={{color:"black"}}>Account Holder Name :</td>
                        <td className="pt-3" style={{color:"black"}}>{accountHolderName}</td>
                    </tr>
                    <tr>
                        <td className="ps-5" style={{color:"black"}}>Account Number :</td>
                        <td style={{color:"black"}}>{accountNum}</td>
                    </tr>
                    <tr>
                        <td className="ps-5" style={{color:"black"}}>Bank Name :</td>
                        <td style={{color:"black"}}>{bankName}</td>
                    </tr>
                    <tr>
                        <td className="ps-5" style={{color:"black"}}>IFSC Number :</td>
                        <td style={{color:"black"}}>{ifscnum}</td>
                    </tr>
                    <tr>
                        <td className="ps-5" style={{color:"black"}}>Location :</td>
                        <td style={{color:"black"}}>{location}</td>
                    </tr>
                    <tr>
                        <td className="ps-5" style={{color:"black"}}>Mobile Number :</td>
                        <td style={{color:"black"}}>{accountHolderMobileNum}</td>
                    </tr>
                    <tr>
                        <td className="ps-5" style={{color:"black"}}>Email Address :</td>
                        <td style={{color:"black"}}>{accountHolderEmail}</td>
                    </tr>
                    <tr>
                        <td className="ps-5 pb-3" style={{color:"black"}}>PanCard Number :</td>
                        <td className="pb-3" style={{color:"black"}}>{panNum}</td>
                    </tr>
                    <tr>
                        <td className="ps-5 pb-3" style={{color:"black"}}>Aadhar Number :</td>
                        <td className="pb-3" style={{color:"black"}}>{aadharNum}</td>
                    </tr>
                </table>
                </div>
            </div>
        </div>
    )
}

export default BankAccountInfo


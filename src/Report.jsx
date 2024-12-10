import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Report.css"
function Report(){
    const [userReport,setuserReport]=useState([])
    const [access,setaccess] = useState('')
    useEffect(()=>{
        getdata()
    },[])
    async function getdata() {
        const data = await axios(`http://localhost:4000/report`,{
            headers:{
              Authorization: `Bearer ${localStorage.getItem('token')}`, 
            }
          });
          console.log(data)
          if(data.data.message){
            setuserReport(data.data.message);
            console.log(data.data.message)
          }else{
            setaccess('Not access, Only admin can access')
          }
    }
    return (
        <>
        <h1>weather's report</h1>
        <center>
        <table>
            <tr>
                <th>email</th>
                <th>city</th>
                <th>created_at</th>
            </tr>
           {userReport.map((elem)=>{
            return (
                <tr>
                    <td>{elem.email}</td>
                    <td>{elem.city}</td>
                    <td>{elem.created_at}</td>
                </tr>
            )
           })}
        </table>
        </center>
        <p>{access}</p>
        </>

    )
}
export default Report;
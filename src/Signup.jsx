import { useState } from "react";
import Form from "./Component/Form"
import axios from "axios";

function Signup(){
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
   async function handleSignup(event){
        event.preventDefault();
        const data = await axios.post(`http://localhost:4000/auth/signup?email=${email}&password=${password}`)
        alert(data.data.message)
        setemail('')
        setpassword('')
    }
    return  (
        <div>
           <h1>Sign up page</h1>
           <Form page="signup" func = {handleSignup} email = {email} setemail ={setemail} password={password} setpassword={setpassword}/>
        </div>
    )
}
export default Signup
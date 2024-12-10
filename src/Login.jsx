import { useState } from "react";
import Form from "./Component/Form"
import axios from "axios";
import { useNavigate } from "react-router";


function Login(){
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const navigate = useNavigate();
  async function handleLogin(e){
        e.preventDefault();
        const data = await axios.post(`http://localhost:4000/auth/login?email=${email}&password=${password}`)
        if(data.data.token){
            localStorage.setItem('token',data.data.token)
            navigate('/home')

        }
        console.log(data.data)
        alert(data.data.message)
    }
    return  (
        <div>
            <h1>Login page</h1>
            <Form page = "login" func = {handleLogin} email = {email} setemail ={setemail} password={password} setpassword={setpassword}/>
        </div>
    )
}
export default Login
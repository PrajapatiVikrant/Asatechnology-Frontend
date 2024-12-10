import { Link } from "react-router";
import "./Form.css"
const Form = ({func,setemail,email,password,setpassword,page})=>{

    return (
        <center>
        <form onSubmit={func} className="formctn">
            <br /><br />
            <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setemail(e.target.value)} />
            <br />
            <input type="password" placeholder="Enter your password" value={password}  onChange={(e)=>setpassword(e.target.value)}/>
            <br />
            <button >{(page=="login")?"Login":"Sign up"}</button>
            {(page=="login")?(
                <p>If you have no account <Link to="/signup">Sign up</Link></p>
            ):(
                <p>If you have already account <Link to="/">Login</Link></p>
            )}
        </form>
        </center>

    )
}
export default Form;
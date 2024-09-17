import { Password } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { useDispatch ,useSelector} from "react-redux";
import { Button } from "semantic-ui-react";
import { addNewUser } from "./Features/User/UserSlice";
import Alert from '@mui/material/Alert';
import './All.css'



const SignUp = () => {
    const dis= useDispatch()
    const status=useSelector(s=>s.user.status)
    let user={
        tz:"",
        name:"",
        Password:"",
        telephone:""
    }
    return ( 
        <>
         <br/><br/><br/><br/>
        <form>
            <div className="signUp">
        <TextField id="outlined-basic" label="ID" variant="outlined" onChange={(e)=>{user.tz=e.target.value}}></TextField>
            <TextField id="outlined-basic" label="user-name" variant="outlined" onChange={(e)=>{user.name=e.target.value}}></TextField><br/><br/>
            <TextField id="outlined-basic" label="password" variant="outlined" onChange={(e)=>{user.password=e.target.value}}></TextField>
            <TextField id="outlined-basic" label="phone" variant="outlined" onChange={(e)=>{user.telephone=e.target.value}}></TextField>
            <br/><br/>
            <Button onClick={()=>{dis(addNewUser(user))}}>Sign Up</Button>
            {status == "user" && <Alert severity="success">המשתמש נרשם בהצלחה.</Alert>}
            </div>
        </form>
        
        </>
     );
}
 
export default SignUp;
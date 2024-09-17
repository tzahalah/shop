import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { changeStatus ,clearCurrentUser} from './Features/User/UserSlice'
import NavBar from './NavBar';
import { useNavigate } from "react-router"
import { createSvgIcon } from '@mui/material/utils';
import { useLocation } from 'react-router-dom';

const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  'Home',
);
export default function ButtonAppBar() {
  const i = 2
  const location = useLocation()
  const status = useSelector(s => s.user.status)
  const userName = useSelector(s => s.user.currentUser)
  let nav = useNavigate()
  const [message, setMessage] = useState('');
  const dis = useDispatch()
  let product = {

    name: "",
    description: "",
    imgUrl: "",
    content: "",
    price: "",
    isCooling: "",
    company: "",
    prodDate: ""
  }
  let title;
  switch (location.pathname) {
    case '/':
      title = "All Products"; break;
    case '/ProductList':
      title = "All Products"; break;

    case '/Orders':
      title = "All Orders"; break;

    case '/Users':
      title = "All Users"; break;

    case '/Login':
      title = "Login"; break;

    case '/SignUp':
      title = "sign up"; break;

    case '/BasicTable': title = "my order"


  }
  const shopEnd = () => {
    if (status != "Admin" && status != "user")
      setMessage("יש להרשם בשביל לקנות")
    else
      nav("/BasicTable", { state: { kind: "cart" } })
  }
  // const addProduct=()=>{ }
  const toUsers = () => {
    nav('/Users', { state: { kind: "user" } })

  }
  const toOrders = () => {
    nav('/Orders')

  }
  const toLogin = () => {
    nav("/Login");

  }
  const toLogUp = () => {
    dis(clearCurrentUser())
    nav('/SignUp')

  }
  const toLogOut = () => {
    dis(changeStatus("guest"))
    nav('/ProductList')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          {status != "Admin" && <Button color="inherit" disabled={status != "user"} onClick={shopEnd} >סיום קניה</Button>}
          {message && <p>message</p>}
          {status == "Admin" && title == "All Products" && < Fab color="secondary" aria-label="add" onClick={() => nav("/AddProduct", { state: { product } })}>
            <AddIcon />
          </Fab>}
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {status == "Admin" && <Button color="inherit" onClick={toOrders}>All orders</Button>}
          {status == "Admin" && <Button color="inherit" onClick={toUsers}>All users</Button>}
          {status != "Admin" && <Button color="inherit" onClick={toLogin}>Login</Button>}
          {status == "user" && <Button color="inherit" onClick={()=>nav("/BasicTable", { state: { kind: "cart" } })}>my order</Button>}
           {/* {status == "user" && <Button color="inherit" onClick={()=>nav("/Orders",{state: {cond: "my"}})}>All my orders </Button>}  */}
          {status != "Admin" && status!="user" && <Button color="inherit" onClick={toLogUp}>Log up</Button>}
          <Button color="inherit" onClick={toLogOut}>Log out</Button>
          {/* < Fab  color="secondary" > */}
          <HomeIcon sx={{ fontSize: 60 }} onClick={() => { nav("/ProductList") }} />
          {/* </Fab> */}
          {userName.name&& <p>{userName.name}</p>}
          <br /><br /><br /><br />
        </Toolbar>

      </AppBar>

    </Box>
  );
}

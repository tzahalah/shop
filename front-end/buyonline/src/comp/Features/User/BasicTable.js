//import * as React from 'react';
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './UserSlice';
import { useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import ButtonAppBar from '../../ButtonAppBar';
import { deleteProduct } from '../Product/ProductSlice';
import { Delete, Message } from "@mui/icons-material";
import Fab from '@mui/material/Fab';
import { addNewOrder, removeProdFromCart, updateProd } from '../Order/OrderSlice';
import { IconButton, TextField } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { red } from '@mui/material/colors';
import Alert from '@mui/material/Alert';


const user = ["id", "tz", "name", "phone", "password"]
const cart = ["prodName", "description", "price", "amount"]

export default function BasicTable({ kind: propKind }) {
  const location = useLocation()

  let { kind: stateKind } = location.state || {};
  const kind = stateKind || propKind;
  const arrUser = useSelector(s => s.user.arrUser)
  const currentCart = useSelector(s => s.order.currentOrder.cart)
  const dis = useDispatch()
  const check = () => { console.log(arrUser) }
  const status=useSelector(s=>s.order.status)
  useEffect(() => { fillarr() }, [])
  const fillarr = async () => {
    dis(fetchUsers())
  }
  const update = (id,amount) => {
    dis(updateProd({id, amount }))
  }


  return (

    <TableContainer component={Paper} sx={{ }}>
      {/* <ButtonAppBar title={"All Users"}></ButtonAppBar> */}
      <h3></h3>
      <Table sx={{ maxWidth: "50%" }}  aria-label="simple table">
        <TableHead>
          {kind == "user" && <TableRow >
            {user.map(t => <>
              {<TableCell style={{ fontSize: 20 }}>{t}</TableCell>}
            </>)}
          </TableRow>}
          {kind == "cart" && <TableRow >
            {cart.map(t => <>
              {<TableCell sx={{ fontSize: 20 }}>{t}</TableCell>}
            </>)}
          </TableRow>}
        </TableHead>
        {kind == "user" && <TableBody>
          {arrUser.map((user) => (
            <TableRow hover role="checkbox" tabIndex={-1}
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
              
              </TableCell> */}
              <TableCell align="left">{user.id}</TableCell>
              <TableCell align="left">{user.tz}</TableCell>
              <TableCell align="left">{user.name}</TableCell>
              <TableCell align="left">{user.telephone}</TableCell>
              <TableCell align="left">{user.password}</TableCell>
            </TableRow>
          ))}
        </TableBody>}

        {kind == "cart" && <TableBody>
          {currentCart.map((p) => (
            <TableRow hover role="checkbox" tabIndex={-1}
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
              
              </TableCell> */}
              <TableCell align="left">{p.name}</TableCell>
              <TableCell align="left">{p.description}</TableCell>
              <TableCell align="left">{p.price}</TableCell>
              <TableCell align="left">
                <TextField sx={{ width: '10ch' }} defaultValue={p.qty} onChange={(e)=>update(p.id, e.target.value)} className="Field" id="small" type='number' size="small" margin="dense" ></TextField>
              </TableCell>
              <TableCell align="left"  >{p.price * p.qty}</TableCell>
              <TableCell align="left">
                <Fab onClick={() => dis(removeProdFromCart(p.id))}>
                  <Delete />
                </Fab>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>}
{ kind=="cart"&&<Button onClick={()=>{dis(addNewOrder())}}>אישור</Button> }
{status == "fulfilled" &&<Alert variant="filled" severity="success">success</Alert>}
      </Table>
      

    </TableContainer>
  );
}

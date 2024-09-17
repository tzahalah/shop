import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect  } from 'react';
import { addNewOrder, fetchOrders } from './OrderSlice';
import { Button } from 'semantic-ui-react';
import ButtonAppBar from '../../ButtonAppBar';
import { useLocation } from 'react-router-dom';

function Row(props) {
   const { row } = props;
  const [open, setOpen] = React.useState(false);
  
  

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {/* <TableCell component="th" scope="row">
          
        </TableCell> */}
        <TableCell >{row.id}</TableCell>
        <TableCell align="right">{row.userId}</TableCell>
        <TableCell align="right">{row.orderDate}</TableCell>
        <TableCell align="right">{row.dueDate}</TableCell>
        
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                products in cart
              </Typography>
              <Table size="small" aria-label="purchases" style={{width:"20ch"}}>
                <TableHead>
                  <TableRow >
                    <TableCell> name</TableCell>
                    {/* <TableCell>Customer</TableCell> */}
                    <TableCell align="left">qty</TableCell>
                    {/* <TableCell align="right">Total price ($)</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.cart.map((prod) => (
                    <TableRow key={prod.id}>
                      {/* <TableCell component="th" scope="row">
                        
                      </TableCell> */}
                      <TableCell>{prod.name}</TableCell>
                      <TableCell align='left'>{prod.qty}</TableCell>
                      {/* <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}




export default function CollapsibleTable() {
    const location=useLocation()
    const {cond}=location.state ||{}
    let arrOrder= useSelector(s=>s.order.arrOrder)
    const currentUser=useSelector(s=>s.user.currentUser)
    const dis = useDispatch()
  const check = () => { console.log(arrOrder)
    console.log(currentUser.id)
    console.log(cond)
   }
  useEffect(() => { fillarr() }, [])
  const fillarr = async () => { dis(fetchOrders()) }
  //if (cond=="my")
  //  arrOrder =arrOrder.filter(ord=> ord.userId == currentUser.id);
  return (<>

    <TableContainer component={Paper}>
        
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow style={{fontSize:30}}>
            <TableCell />
            <TableCell style={{fontSize:20}}>id</TableCell>
            <TableCell style={{fontSize:20}} align="right">userId</TableCell>
            <TableCell style={{fontSize:20}} align="right">orderDate</TableCell>
            <TableCell style={{fontSize:20}} align="right">dueData</TableCell>
            
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {arrOrder.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
     
    </TableContainer>
   
    </> );
}

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton, TextField } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { TextArea } from 'semantic-ui-react';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './All.css'
import { useNavigate } from 'react-router-dom';
import { addProdToCart } from './Features/Order/OrderSlice';
import { Delete, Message } from "@mui/icons-material";
import { deleteProduct } from './Features/Product/ProductSlice';


export default function MediaCard({ product }) {
  let nav=useNavigate()
  const status = useSelector(s => s.user.status)
  const dis = useDispatch()
  const qtyRef=useRef(0);
  const editProduct=(product)=>{
  //console.log( product)
  nav("/AddProduct", {state: {product}})
  }

  const addToBascket = (prod) => {
   const amount= qtyRef.current.value
   console.log(amount)
    dis(addProdToCart({prod, amount} ))
    }

  

  return (<>
    <Card  sx={{minWidth:200}}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions >
       {status != "Admin" && <><TextField disabled= {status!="user"} style={{ width: '10ch' }} className="Field" id="small" type='number' label="כמות" size="small" margin="dense" inputRef={qtyRef}></TextField>
        <Button disabled= {status!="user"} size="small" onClick={() => addToBascket(product)}><AddShoppingCartIcon /></Button></>}
        
     
      {status=="Admin" &&<><Fab color="secondary" aria-label="edit" onClick={()=>editProduct(product)}>
        <EditIcon />
      </Fab>
      <Fab onClick={() => dis(deleteProduct(product.id))}>
        <Delete />
      </Fab></>
      }

       </CardActions>
    </Card>

  </>
  );
}

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../Product/ProductSlice";
import MediaCard from "../../MediaCard";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import '../../All.css'
import { positions } from "@mui/system";
import ButtonAppBar from "../../ButtonAppBar";
import BasicTable from "../User/BasicTable";





const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const ProductList = () => {

  const product = useSelector(s => s.product.arrProduct)
  const status= useSelector(s=>s.user.status)
  const dis = useDispatch()
  const check = () => { console.log(product) }
  useEffect(() => { fillarr() }, [])
  const fillarr = async () => { dis(fetchProducts()) }



  return (<>
  
  {/* <ButtonAppBar title={"כל המוצרים"}></ButtonAppBar> */}
    <button onClick={check}></button>
    
   
    <Grid container >
      {product.map(prod => {
        return <div > <MediaCard  product={prod}></MediaCard></div>
        //   <div key= {prod.name}>
        //     <li>{prod.name}</li>
      }

      )}

    </Grid>
    <br/><br/><br/><br/>
    {status=="user"&& <BasicTable kind={"cart"} ></BasicTable>}





  </>
  );
}


export default ProductList;
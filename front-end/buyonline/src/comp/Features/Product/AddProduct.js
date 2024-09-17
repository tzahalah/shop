import { TextField } from "@mui/material";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from "@mui/icons-material/Edit";
import { Delete, Message } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addNewProduct, chStatus, getProdById, updateProduct } from "../Product/ProductSlice";
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import { useLocation, useNavigate } from "react-router-dom";
//import UploadPicture from "../../UploadPicture";
const AddProduct = () => {
  let location = useLocation()
  const { product } = location.state || {};
  const dis = useDispatch()
  const status = useSelector(s => s.product.statusAdd)
  let nav = useNavigate()
  //let [message, setMessage]

  const add = () => { dis(addNewProduct(product)) }

useEffect(()=>{dis(chStatus(""))},[])




  const kt = () => {
    console.log(product)
    // console.log(name)
  }

  return (<>

    <form>
      <Box
        component="form"
        // sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off">
        <br /><br /><br /><br />
        <div >
          {/* <input defaultValue={name}></input> */}
          <TextField required id="standard-required" type="text" label="name" defaultValue={product.name} variant="outlined" onChange={(e) => { product.name = e.target.value }} />
          <TextField required id="standard-required" label="description" defaultValue={product.description} variant="outlined" onChange={(e) => { product.description = e.target.value }} /><br /><br />
          <TextField required id="standard-required" label="content" defaultValue={product.content} variant="outlined" onChange={(e) => { product.content = e.target.value }} />
          <TextField required id="standard-required" label="price" defaultValue={product.price} variant="outlined" onChange={(e) => { product.price = e.target.value }} /><br /><br />
          <TextField required id="standard-required" label="isCooling" defaultValue={product.isCooling} variant="outlined" onChange={(e) => { product.isCooling = e.target.value }} />
          <TextField required id="standard-required" label="company" defaultValue={product.company} variant="outlined" onChange={(e) => { product.company = e.target.value }} /><br /><br />
          <TextField required id="standard-required" label="prodDate" defaultValue={product.prodDate} variant="outlined" onChange={(e) => { product.prodDate = e.target.value }} />
          {/* <TextField
            id='image'
            name='image'
            type={"file"}
            inputProps={{ accept: "image/*" }}
            // onChange={(event) => {
            //   console.log(event.target.files[0]);
              // Log the selected file
              // setImage(event.target.files[0]);
              // setSelectedImage(event.target.files[0]); // Update the state with the selected file
            
          /> */}

          {/* <UploadPicture></UploadPicture> */}
        </div></Box>


      <Fab size="medium" color="secondary" aria-label="add" onClick={add}>
        <AddIcon />

      </Fab>
     {product.name!=""&& <Fab size="medium" color="secondary" aria-label="add" onClick={() => dis(updateProduct({ id: product.id, prod: product }))}>
        <EditIcon />
      </Fab>}
      {/* <Alert severity="success">המוצר התווסף בהצלחה.</Alert> */}
       {status == "success" &&<Alert variant="filled" severity="success">המוצר התווסף בהצלחה</Alert>}
  


      {/* <Fab onClick={clean}>
        <Delete />
      </Fab> */}

    </form><Button onClick={() => kt()}></Button></>
  );
}

export default AddProduct;
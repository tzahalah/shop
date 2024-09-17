import { useSelector } from "react-redux";
const ShoppingBascket = () => {
const cart= useSelector(s=>s.order.currentOrder.cart)
    return ( <>
 <Grid container >
         {cart.map(prod =>  {  
            return <Item > <MediaCard  product={prod}></MediaCard></Item>
         //   <div key= {prod.name}>
         //     <li>{prod.name}</li>
              }
           
          )}
         
         </Grid>
    </> );
}
 
export default ShoppingBascket;
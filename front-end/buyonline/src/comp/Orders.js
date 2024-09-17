import { useSelector } from "react-redux";
import Grid from "@mui/system/Unstable_Grid/Grid";
import MediaCard from "./MediaCard";

const Orders = () => {
    const arrOrder =useSelector(s=>s.Order.arrOrder)
    return (<>
    <Grid container >
      {arrOrder.map(ord => {
        return <div key={ord.id}> <MediaCard  product={ord}></MediaCard></div>
        //   <div key= {prod.name}>
        //     <li>{prod.name}</li>
      }

      )}

    </Grid>
    </>  );
}
 
export default Orders;
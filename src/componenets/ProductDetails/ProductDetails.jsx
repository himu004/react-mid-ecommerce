import { useContext } from "react";
import {  } from "react-router-dom";
import { DataContext } from "../../providers/Context";
import Card from "../ProductCard/Card";

const ProductDetails = ({children}) => {
    const {data} = useContext(DataContext);
    console.log(data);
    

    return (
        <div>
           <Card/>
        </div>
    );
};

export default ProductDetails;
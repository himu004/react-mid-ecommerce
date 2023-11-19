import { useContext, useEffect } from "react";
import { DataContext } from "../../providers/Context";
import { useParams } from "react-router-dom";


const Card = ({children}) => {
    
    const {id} = useParams();
    const {data} = useContext(DataContext);
    useEffect
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            src={"image"}
            className="w-full max-h-[200px]"
            alt="Products"
          />
        </figure>
        <div className="card-body h-[350px]">
          <h2 className="card-title">Brand: {"brand"}</h2>
          <p>ID: {id}</p>
          <p>{"description"}</p>
          <p className="font-bold">Price: {"price"}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-accent w-full">Add To Cart</button>     
          </div>
        </div>
      </div>
        </div>
    );
};

export default Card;
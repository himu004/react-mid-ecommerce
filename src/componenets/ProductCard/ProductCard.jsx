import { Link } from "react-router-dom";


const ProductCard = ({cardData}) => {

  const {brand, price, description, thumbnail, id} = cardData

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            src={thumbnail}
            className="w-full max-h-[200px]"
            alt="Products"
          />
        </figure>
        <div className="card-body h-[350px]">
          <h2 className="card-title">{brand}</h2>
          <p>{description}</p>
          <p className="font-bold">Price: {price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-accent w-full">Add To Cart</button>
            <Link 
            to={`/product-details/${id}`}
            className="btn btn-error w-full">
              <button >View Details</button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

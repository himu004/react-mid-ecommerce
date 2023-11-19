import { useContext } from "react";
import { DataContext } from "../../providers/Context";
import ProductCard from "../ProductCard/ProductCard";

const Products = ({ children }) => {
  const { data, loading, setLoading } = useContext(DataContext);
  console.log(data);

  return (
    <div>
      {loading ? (
        <span className="loading loading-infinity loading-lg"></span>
      ) : (
        <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1">
          {data.products?.map((eachData) => (
            <ProductCard key={eachData.id} cardData={eachData}></ProductCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;

import "./productList.css";
import { products } from "../../data";
import Product from '../product/Product';

const ProductList = () => {
  return (
    <div className="pl">
    <div className="pl-texts">
      <h1 className="pl-title">PROJECTS</h1>
    </div>
    <div className="pl-list">
      {products.map((item) => (
        <Product key={item.id} img={item.img} reference={item.reference} title={item.title} desc={item.desc} link={item.link} />
      ))}
    </div>
  </div>
  )
}

export default ProductList
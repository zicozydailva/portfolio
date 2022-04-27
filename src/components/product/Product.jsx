import "./product.css";
const Product = ({ img, link, desc, title, reference }) => {
  return (
    <div className="productWrapper">
      <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="p-img" />
        </a>
      </div>

      <p className="desc">
        {" "}
        <span className="title">{title}</span> <br />
        {desc} <br />{" "}
        <span className="link">
          Reference: &nbsp;
          <a href={`${reference}`} rel="noreferrer" target="_blank">
            {reference}
          </a>
        </span>
      </p>
    </div>
  );
};

export default Product;

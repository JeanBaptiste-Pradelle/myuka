
function Titre({data}) {
  return <div className="bg-primary w-100 mx-auto my-3 p-">{data ? data.product.product_name : "Aucun produit scanné"} </div>;
}

export default Titre;

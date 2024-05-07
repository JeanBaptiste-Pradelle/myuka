function Titre({ data }) {
  return (
    <div className="fw-bold border border-2 border-success rounded w-100 mx-auto my-3 p-1 fs-2 bg-success bg-opacity-75">
      {data ? data.product.product_name : "Aucun produit scanné"}{" "}
    </div>
  );
}

export default Titre;

// Fonction utiliser pour récupérer la liste des ingredients du produit choisi (data.product.ingredients_text) et les afficher.
// ".split("en:") est utiliser pour scinder le string qui compose la liste d'ingrédient et enlever ces caractère pour une meilleur lisibilité.

function Ingredient({ data }) {
  return (
    <div className="  d-flex flex-column  fw-semibold border border-2 border-success rounded col-8 mx-auto my-2 p-4 bg-success bg-opacity-75  ">
      <span className="fs-2 text-center text-decoration-underline fw-bold">
        Ingredient:
        <br />
      </span>{" "}
      <div className="text-break">
        {" "}
        {data
          ? data.product.ingredients_text.split(/en:|fr:|/)
          : "Aucun ingredient"}{" "}
      </div>
      <br /> <br /> <br />
      <span className="fs-2 fw-bold text-center text-decoration-underline">
        Composition emballage
      </span>{" "}
      <br />
      <div className="text-break mx-auto my-4">
        {data ? data.product.packaging.split(/en:|fr:|/) : "Aucun packaging"}
      </div>{" "}
    </div>
  );
}

export default Ingredient;

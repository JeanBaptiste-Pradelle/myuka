// Fonction utiliser pour récupérer la liste des allergènes potentiel du produit choisi ( data.product.allergens) et les afficher.
// ".split("en:") est utiliser pour scinder le string qui compose la liste d'ingrédient et enlever ces caractère pour une meilleur lisibilité.

// La forme {{data ? data.product.allergens.split("en:") : "Aucun allergene"} equivaut a une fonction if...else..
// Dans le cas present si la variable "data" existe et est lu correctement affiché: data.product.allergens.split("en:")
// Sinon afficher "Aucun Allergène"

function Allergene({ data }) {
  return (
    <div className=" fw-semibold border border-2 border-success rounded w-100 mx-0 mt-5 mb-2 p-1 fs-4   bg-success bg-opacity-75">
      {" "}
      <span className=" fw-bold text-decoration-underline">Allergéne : </span>
      {data ? data.product.allergens.split(/en:|fr:|/) : "Aucun allergene"}
    </div>
  );
}

export default Allergene;

// Verifie si le produit contient de l'huile de palme avec la variable "ata.product.ingredients_from_or_that_may_be_from_palm_oil_n" (1 si oui et 0 si non).
// Affiche dans tout les cas le logo seul le texte change
function Palme({ data }) {
  if (
    data &&
    data.product.ingredients_from_or_that_may_be_from_palm_oil_n >= 1
  ) {
    return (
      <div className=" col-9 col-lg-3 mx-auto my-2 p-2 border border-2 border-success rounded text-wrap fs-2 fw-bold bg-danger">
        <img
          src="https://static.openfoodfacts.org/images/icons/dist/palm-oil.svg"
          alt="logo huile"
          className="img-fluid"
        />{" "}
        Presence d'huile de palme
      </div>
    );
  } else if (
    data &&
    data.product.ingredients_from_or_that_may_be_from_palm_oil_n === 0
  )
    return (
      <div className=" col-9 col-lg-3 mx-auto my-2 p-2 border border-2 border-success rounded fs-5 fw-bold bg-success bg-opacity-75">
        <img
          src="https://static.openfoodfacts.org/images/icons/dist/palm-oil.svg"
          alt="logo huile"
          className="img-fluid"
        />{" "}
        Aucune presence d'huile de palme
      </div>
    );
  // Rajoute une possibilité vu que la base de donné n'est pas complète au cas ou le produit n'a pas de donné pour ne pas laisser l'espace vide
  else
    return (
      <div className=" w-25 mx-auto my-2 p-2">Aucune donné disponible</div>
    );
}

export default Palme;

// Recupere le score "Nova" avec la variable "product.nova_group" (score entre 1 et 4) et affiche le SVG correspondant ainsi que la description du score.

function Nova({ data }) {
  if (data && data.product.nova_group === 1)
    return (
      <div
        className="  col-9 col-lg-3  mx-auto my-auto  fw-bold border border-2 border-success rounded text-center"
        style={{ backgroundColor: "#DC9E5B" }}
      >
        {
          <img
            src="https://static.openfoodfacts.org/images/attributes/dist/nova-group-1.svg"
            alt="nova 1"
          />
        }
        <br /> Aliment non transformé
      </div>
    );
  else if (data && data.product.nova_group === 2)
    return (
      <div
        className="  col-9 col-lg-3  mx-auto my-auto  fw-bold border border-2 border-success rounded text-center"
        style={{ backgroundColor: "#DC9E5B" }}
      >
        {
          <img
            src="https://static.openfoodfacts.org/images/attributes/dist/nova-group-2.svg"
            alt="nova 2"
          />
        }
        Ingredients culinaires transformés
      </div>
    );
  else if (data && data.product.nova_group === 3)
    return (
      <div
        className="col-9 col-lg-3 mx-auto my-auto  fw-bold  border border-2 border-success rounded text-center"
        style={{ backgroundColor: "#DC9E5B" }}
      >
        {
          <img
            src="https://static.openfoodfacts.org/images/attributes/dist/nova-group-3.svg"
            alt="nova 3"
          />
        }
        Aliments transformés
      </div>
    );
  else if (data && data.product.nova_group === 4)
    return (
      <div
        className=" col-9 col-lg-3  mx-auto my-auto fw-bold border border-2 border-success rounded text-center"
        style={{ backgroundColor: "#DC9E5B" }}
      >
        {
          <img
            src="https://static.openfoodfacts.org/images/attributes/dist/nova-group-4.svg"
            alt="nova 4"
          />
        }
        <br /> Aliments ultra-transformés
      </div>
    );
  // Rajoute une possibilité vu que la base de donné n'est pas complète au cas ou le produit n'a pas de nutriscore pour ne pas laisser l'espace vide
  else
    return (
      <div
        className="  col-9 col-lg-3  mx-auto my-2 my-lg-auto fw-bold border border-2 border-success rounded text-center"
        style={{ backgroundColor: "#DC9E5B" }}
      >
        {"Donné non disponible"}
      </div>
    );
}

export default Nova;

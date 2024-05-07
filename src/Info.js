// Récupéré les informations sur le produit (origine, fabricant, marque). La forme "${}" est utiliser pour insérer une nouvelle variable sans avoir besoin de la concatenation. ("+")
// pour une meilleur lisibilité.

function Info({ data }) {
  return (
    <div className="w-100 mx-auto my-2 p-2 fw-bold border border-2 border-success bg-success bg-opacity-75">
      {data
        ? `PAYS: ${
            data.product.origins
              ? data.product.origins.split(/en:|fr:/)
              : "Non communiqué"
          }, 
               FABRICANT: ${
                 data.product.brand_owner_imported
                   ? data.product.brand_owner_imported
                       .split(/en:|fr:/)
                       
                   : "Non communiqué"
               }, 
               MARQUE: ${
                 data.product.brands
                   ? data.product.brands.split(/en:|fr:/)
                   : "Non communiqué"
               }`
        : "Aucun data scanné"}
    </div>
  );
}

export default Info;

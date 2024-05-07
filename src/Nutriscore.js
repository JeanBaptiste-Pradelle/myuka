// Recupere le nutriscore du produit avec la variable "data.product.nutriscore_grade" (score entre a et e) et affiche le SVG correspondant
//ClasName="img-fluid" est utiliser pour rendre les images responsive et les redimensionner automatiquement pour la version mobile.

function Nutriscore({ data }) {
  if (data && data.product.nutriscore_grade === "a")
    return (
      <div className=" col-9 col-lg-3  mx-auto my-2 my-lg-auto  p-3 fw-bold border border-2 border-success rounded  text-center"style={{ backgroundColor: "#DC9E5B"}}>
        {" "}
        <img
          src="https://static.openfoodfacts.org/images/attributes/dist/nutriscore-a.svg"
          alt="nutriscore A"
          className="img-fluid "
        />
      </div>
    );
  else if (data && data.product.nutriscore_grade === "b")
    return (
      <div className="col-9 col-lg-3  mx-auto my-2  my-lg-auto p-3 fw-bold border border-2 border-success rounded text-center"style={{ backgroundColor: "#DC9E5B"}}>
        {" "}
        <img
          src="https://static.openfoodfacts.org/images/attributes/dist/nutriscore-b.svg"
          alt="nutriscore B "
          className="img-fluid"
        />
      </div>
    );
  else if (data && data.product.nutriscore_grade === "c")
    return (
      <div className="col-9 col-lg-3 mx-auto my-2 my-lg-auto  p-3 fw-bold border border-2 border-success rounded text-center" style={{ backgroundColor: "#DC9E5B"}}>
        {" "}
        <img
          src="https://static.openfoodfacts.org/images/attributes/dist/nutriscore-c.svg"
          alt="nutriscore C"
          className="img-fluid"
        />
      </div>
    );
  else if (data && data.product.nutriscore_grade === "d")
    return (
      <div className=" col-9 col-lg-3  p-3 mx-auto my-2 my-lg-auto  fw-bold border border-2 border-success rounded text-center " style={{ backgroundColor: "#DC9E5B"}}>
        {" "}
        <img
          src="https://static.openfoodfacts.org/images/attributes/dist/nutriscore-d.svg"
          alt="nutriscore D"
          className="img-fluid "
        />
      </div>
    );
  else if (data && data.product.nutriscore_grade === "e")
    return (
      <div className=" col-9 col-lg-3 mx-auto my-2 my-lg-auto  p-3 fw-bold border border-2 border-success rounded text-center "style={{ backgroundColor: "#DC9E5B"}}>
        {" "}
        <img
          src="https://static.openfoodfacts.org/images/attributes/dist/nutriscore-e.svg"
          alt="nutriscore E"
          className="img-fluid"
        />
      </div>
    );
  else
    return (
      <div className=" col-9 col-lg-3  mx-auto my-2 my-lg-auto  p-3 fw-bold border border-2 border-success rounded text-center"style={{ backgroundColor: "#DC9E5B"}}>
        Aucune donné disponible{" "}
      </div>
    );
}

export default Nutriscore;

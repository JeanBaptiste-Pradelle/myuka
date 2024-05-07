//  Affiche le niveau de gras (data.product.nutrient_levels.fat ), de sel (data.product.nutrient_levels.salt ),
// d'acide gras (data.product.nutrient_levels["saturated-fat"]) et de sucre (data.product.nutrient_levels.sugars)
//  qui peuvent prendre la valeur de low/medium ou high.
function Repere({ data }) {
  return (
    <div
      className=" col-9 col-lg-6 fw-semibold border border-2 border-success rounded  mx-auto mt-5 mb-5 p-1 fs-4 "
      style={{ backgroundColor: "#DC9E5B", color: "Black" }}
    >
      {" "}
      <span className=" fw-bold text-decoration-underline">
        {" "}
        Matière Grasse:{" "}
      </span>
      {data ? data.product.nutrient_levels.fat : "Aucune matiere grasse"}
      <br />
      <span className=" fw-bold text-decoration-underline"> Sel: </span>
      {data ? data.product.nutrient_levels.salt : "Aucun sel"}
      <br />
      <span className=" fw-bold text-decoration-underline"> Acide gras: </span>
      {data
        ? data.product.nutrient_levels["saturated-fat"]
        : "Aucun acide gras"}
      <br />
      <span className=" fw-bold text-decoration-underline"> Sucre: </span>
      {data ? data.product.nutrient_levels.sugars : "Aucun sucre"}
      <br />
    </div>
  );
}

export default Repere;

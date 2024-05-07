// Récupère des informations sur le produit et les organisent sous forme de tableau. "Table responsive " est utilisé pour automatiquement
// adapter la taille du tableau sur la version mobile (responsive).
import Table from "react-bootstrap/Table";
function Tableau({ data }) {
  if (data) {
    return (
      <Table
        responsive
        className="table-hover table-bordered border-4 border-success rounded text-start fw-bold "
      >
        <thead className="fs-5 text-center align-middle">
          <tr>
            <th style={{ backgroundColor: "#DC9E5B", color: "white" }}>
              Tableaux nutritionnelle
            </th>
            <th style={{ backgroundColor: "#DC9E5B", color: "white" }}>
              {" "}
              Tel que vendu pour 100g/100 ml
            </th>
            <th style={{ backgroundColor: "#DC9E5B", color: "white" }}>
              {" "}
              Tel que vendu par portion {data.product.serving_size}
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <th> Energie</th>
            <td>
              {data.product.nutriments.energy} Kj <br />{" "}
              {data.product.nutriments["energy-kcal"]} Kcal
            </td>
            <td>
              {data.product.nutriments.energy_serving} Kj <br />{" "}
              {data.product.nutriments["energy-kcal_serving"]} Kcal
            </td>
          </tr>
          <tr>
            <th> Matiéres grasses</th>
            <td>{data.product.nutriments.fat} g</td>
            <td>{data.product.nutriments.fat_serving} g</td>
          </tr>
          <tr>
            <th> Acides gras saturé</th>
            <td>{data.product.nutriments["saturated-fat"]} g</td>
            <td>{data.product.nutriments["saturated-fat_serving"]} g</td>
          </tr>
          <tr>
            <th> Glucides</th>
            <td>{data.product.nutriments.carbohydrates} g</td>
            <td>{data.product.nutriments.carbohydrates_serving} g</td>
          </tr>
          <tr>
            <th> Sucres</th>
            <td>{data.product.nutriments.sugars} g</td>
            <td>{data.product.nutriments.sugars_serving} g</td>
          </tr>
          <tr>
            <th> Fibres alimentaire</th>
            <td>{data.product.nutriments.fiber}</td>
            <td>{data.product.nutriments.fiber_serving}</td>
          </tr>
          <tr>
            <th> Protéines</th>
            <td>{data.product.nutriments.proteins}g </td>
            <td>{data.product.nutriments.proteins_serving} g</td>
          </tr>
          <tr>
            <th> Sel</th>
            <td>{data.product.nutriments.salt}g</td>
            <td>{data.product.nutriments.salt_serving}g</td>
          </tr>
          <tr>
            <th> Alcool</th>
            <td>{data.product.nutriments.alcohol}%</td>
            <td>{data.product.nutriments.alcohol_serving}%</td>
          </tr>
          <tr>
            <th>
              {" "}
              Fruits‚ légumes‚ noix et huiles de colza‚ noix et olive
              (estimation par analyse de la liste des ingrédients){" "}
            </th>
            <td>
              {
                data.product.nutriments[
                  "fruits-vegetables-nuts-estimate-from-ingredients_100g"
                ]
              }{" "}
              %
            </td>
            <td>
              {
                data.product.nutriments[
                  "fruits-vegetables-nuts-estimate-from-ingredients_serving"
                ]
              }{" "}
              %
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default Tableau;

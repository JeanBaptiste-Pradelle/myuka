import Form from "react-bootstrap/Form";
import { useState } from "react";

function Scan({ Sproduit }) {
  const [codeBarre, setCodeBarre] = useState("");

  function CallAPI() {
    fetch(`https://world.openfoodfacts.org/api/v3/product/${codeBarre}.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch the product");
        }
        return res.json();
      })
      .then((data) => {
        Sproduit(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="Scan d-flex flex-column">
      <Form.Control
        type="text"
        placeholder=""
        aria-label="Code barre article"
        className="bg-secondary mx-auto mt-3 mb-1"
        value={codeBarre}
        onChange={(e) => setCodeBarre(e.target.value)}
      ></Form.Control>
      <button
        className="scanner bg-success mt-1 mb-5 p-2 mx-auto"
        onClick={CallAPI}
      >
        Scanner
      </button>
    </div>
  );
}

export default Scan;

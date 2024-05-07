import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { useState } from 'react';
import Scan from "./Scan";
import Photo from "./Photo";
import Ingredient from "./Ingredient";
import Allergene from "./Allergene";
import Nova from "./Nova";
import Nutriscore from "./Nutriscore";
import Palme from "./Palme";
import Info from "./Info";
import Footer from "./Footer";
import Titre from "./Titre";
import Tableau from './Tableaux';
import Energie from './Energie';
import Repere from './Repere';



function App() {
  const [produit, setproduit] = useState(null);
  console.log(produit)
  return (
    <div className="App d-flex flex-column mx-auto h-100  my-auto">
      <div className="head bg-success bg-opacity-75 ">
        <h1> MY YUKA</h1>
        <p> Obtenez les informations sur les produits alimentaire </p>
      </div>
      {/* Passer setproduit à Scan*/}
      <Scan Sproduit={setproduit} />
       {/* Passer produit à Titre*/}
      <Titre data={produit} />
      <Tableau data={produit} />
      <div className="d-flex flex-row justify-content-between">
        <Photo data={produit}/>
        <Ingredient data={produit} />
      </div>
      <Energie  data={produit}/>
      <Allergene data={produit} />
      <Repere data ={produit} />

      <div className=" d-flex flex-column flex-lg-row mx-auto my-auto justify-content-around  w-100">
        <Nova data={produit} /> 
        <Nutriscore data={produit}/>
        <Palme data={produit} />
      </div>
      <Info data={produit} />
      <Footer />
    </div>
  );
}

export default App;

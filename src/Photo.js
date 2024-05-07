// Recupere l'image du produit avec la variable "data.product.image_url" et l'affiche.
//ClasName="img-fluid" est utiliser pour rendre les images responsive et les redimensionner automatiquement pour la version mobile.

function Photo({ data }) {
  if (data) {
    return (
      <div className=" w-lg-25  mx-0 my-2 p-4 fw-bold border border-2 border-success rounded ">
        <img
          src={data.product.image_url}
          alt="Image Produit"
          className="img-fluid"
        />
      </div>
    );
  }
}
export default Photo;

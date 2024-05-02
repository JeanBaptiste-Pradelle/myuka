
function Ingredient({data}){
    return(
      <div className="bg-primary w-25 mx-0 my-2 p-4" >Ingredient {data ? data.product.ingredients_text : "Aucun ingredient"}</div>
)
}

export default Ingredient
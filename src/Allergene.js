function Allergene({data}){
    return(
      <div className="bg-primary w-100 mx-auto my-2 p-2" >{data? data.product.allergens :"Aucun allergene"}</div>
)
}

export default Allergene
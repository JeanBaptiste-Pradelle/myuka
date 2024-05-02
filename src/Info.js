function Info({data}){
    return(
      <div className="bg-primary w-100 mx-auto my-2 p-2" >{data ? `PAYS:${data.product.origins}, FABRICANT:${data.product.brand_owner_imported}, MARQUE:${data.product.brands}` : "Aucun data scanné"}</div>
)
}

export default Info
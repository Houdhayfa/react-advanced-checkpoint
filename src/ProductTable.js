import React from 'react'
import './css/bootstrap.css'
import './ProductTable.css'


function ProductTable(props) {
const productList=props.product
return (
    
    <div className="productTable"> 
<table className="table table-striped table-dark tableau">
  <thead>
    <tr id="firstLine">
      <th scope="col">Name</th>
      <th scope="col">category</th>
      <th scope="col">Price</th>
      
    </tr>
  </thead>
  <tbody>

  { productList.map((product,index)=>{return (
    <tr key={index}>
    <th scope="row">{product.name}</th>
    <td>{product.category}</td>
    <td>{`${product.price} DT`}</td>
    
    </tr>
                                       )
                              } 
                   )
  }
   
  </tbody>
</table>
    </div>
)
}
export default ProductTable 



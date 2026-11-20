import { useState } from "react";

function ShopingCart(){
const[productName,setProductName] = useState('')
const[products,setProducts] = useState([])
const[productPrice,setProductPrice] = useState('')
const handleAdd = ()=>{
if(productName.trim() !== "" && productPrice.trim() !== ""){

  const newProduct = {
    id:Date.now(),
    name:productName,
    price: parseFloat(productPrice),
    quantity:1
  }
  setProducts([...products,newProduct])
  setProductName('')
  setProductPrice('')
  


}



}
const removeProduct = (id) => {

const updatedProducts = products.filter(product => product.id !== id)
  setProducts(updatedProducts)

}
const increasing =(id)=>{
  const increasedProducts = products.map(product=>(
    product.id === id ? {...product,quantity:product.quantity + 1} :product
  ))
  setProducts(increasedProducts)

}

const decreasing = (id)=>{

const decrasedProducts = products.map(product=>(
  product.id=== id && product.quantity > 0 ? {...product,quantity:product.quantity -1}:product
))
 setProducts(decrasedProducts)


}
const total = products.reduce((total,product)=> total + product.price * product.quantity,0)
  
return (
  <div>
    <div>
      <h1>simple shoping cart</h1>
   <h3>add a product</h3>
   <input type="text" placeholder="enter a product name"
   value={productName}
   onChange={(e)=>setProductName(e.target.value)} />
   <input type="number"
   min='0'
   placeholder="price"
   value={productPrice}
   onChange={(e)=>setProductPrice(e.target.value)}
   
   />
   <button onClick={handleAdd}>add product</button>
    </div>
    <h3>product in cart</h3>
    {
      <div>
 <ul>
        {
    products?.length > 0 ? (  
      products.map((product)=>(
        <div key={product.id}>

       
        <li>
          <strong>{product.name}</strong> - ${product.price.toFixed(2)}
            <div>
              quantity:
              <button onClick={()=>decreasing(product.id)}>-</button>
               ${product.quantity}
               <button onClick={()=>increasing(product.id)}>+</button>
              
            </div>
             <button onClick={()=>removeProduct(product.id)}>remove</button>
          
        </li>
         </div>
       
        
        

      ))

     ): <p>this cart is empty</p>
        }
        <h3>Total price:${total}</h3>
        
   
      </ul>
     
      </div>
     
    
  
   
    }
  
   


  </div>
)
 

}
export default ShopingCart;




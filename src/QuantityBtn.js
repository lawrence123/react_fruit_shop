import {useContext,useState} from 'react'
import { Cartcontext } from './CartContext'
import  style from "./ProductList.module.css"
export default function QuantityBtn({productInfo}) {
    const {cartItems,setCartItems} = useContext(Cartcontext)
    let productIndexInCart = cartItems.findIndex((e)=>{
        return e.id === productInfo.id
    })
    let [numIncart,setnumIncart] = useState(
        (productIndexInCart===-1)?0:cartItems[productIndexInCart].quantity
    )
    
    const handleAdd =()=>{
        if(productIndexInCart===-1){
            setCartItems(
                [{
                    id: productInfo.id,
                    name:productInfo.name,
                    image:productInfo.image,
                    price:productInfo.price,
                    description:productInfo.description,
                    quantity:1
                },
                ...cartItems]
            )
        }else{
            let newCartArray = [...cartItems]
            newCartArray[productIndexInCart].quantity++
            setCartItems(newCartArray)
        }
        setnumIncart(numIncart+1)
    }
  
    const handleSub=()=>{
        if(cartItems[productIndexInCart].quantity===1){
            let newCartArray = [...cartItems]
            newCartArray.splice(productIndexInCart,1)
            setCartItems(newCartArray)
        }else{
            let newCartArray = [...cartItems]
            newCartArray[productIndexInCart].quantity--
            setCartItems(newCartArray)
        }
        setnumIncart(numIncart-1)
    }
    return (
    <div>
        {
        (numIncart === 0 )?
        <button onClick={handleAdd} className={style.productlistBtn}>加入購物車</button>:
        <div>
          <button onClick={handleSub} className={style.productlistBtn}>-</button>
              {numIncart}件
          <button onClick={handleAdd} className={style.productlistBtn}>+</button>
        </div>
        } 
    </div>
  )
}

import Title from "./Title"
import {Link} from "react-router-dom"
import QuantityBtn from "./QuantityBtn"
import { Cartcontext } from "./CartContext"
import {useContext} from "react"
export default function CheckOut(){
    let {cartItems} = useContext(Cartcontext)
    let cartEmpty = cartItems.length <= 0 ? true:false
    let grandTotal = cartItems.reduce((total,product)=>{
       return total += product.price*product.quantity
    },0)
    const freeShippingPrice = 99
    return(
        <div>
            <Title  mainT="you cartItems"/>
            {
                cartEmpty &&
                <div>
                    cart no item<br/>
                    <Link to="/">go productlist shopping</Link>
                </div>    
            }

            {
            !cartEmpty &&
            <div>
                <div id="cartSection">
                    {
                    /*productlist */
                    cartItems.map(p=>(
                        <div key={p.id}>
                            <img src={process.env.PUBLIC_URL+'/fruit/'+p.image}/>
                            <p>{p.name}</p>
                            <p>{p.description}</p>
                            <p>price:{p.price}</p>
                            <p>數量{p.quantity}</p>
                            <QuantityBtn productInfo={p}/>
                        </div>
                    ))
                    }
                
                </div>
                <div id="checkoutSection">
                    <div>全部貨品總共</div>
                    <div>{grandTotal}</div>
                    {
                    /*price+free */
                    grandTotal >= freeShippingPrice?
                    <div>free shipping</div>:
                    <div> full {freeShippingPrice} then freeshipp still ${freeShippingPrice-grandTotal}</div>
                    }
                </div>
            </div>
            }
        </div>
    )
    
}
import {useParams,Link} from "react-router-dom"
import Title from "./Title"
import QuantityBtn from "./QuantityBtn"
import {useState,useEffect} from "react"
export default function ProductDetail(){
   let params = useParams()
   let [productDetail,setProductDetail] = useState(null)
   useEffect(()=>{
    fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
  .then(res=>res.json())
  .then(data=>{
    let productInfo = data.find((e)=>{
        return e.id === parseInt(params.id)
    })
    setProductDetail(productInfo)
  })
  },[])
   
   return(
        <div>
            {   
                productDetail &&
                <div>
                    <Title mainT={productDetail.name+"product information"}/>
                    <img src={process.env.PUBLIC_URL+'/fruit/'+productDetail.image} alt={productDetail.name} width="400"/>
                    <p>名稱: {productDetail.name}</p>
                    <p>價格: {productDetail.price}元</p>
                    <p>描述: {productDetail.description}</p>
                    <QuantityBtn productInfo={productDetail}/>
                </div>
            }
        <Link to="/">Back to product list</Link>
        </div>
    )
}
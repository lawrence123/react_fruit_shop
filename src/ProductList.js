import  style from "./ProductList.module.css"
import {useState,useEffect} from "react"
import {Link} from "react-router-dom"
import Title from "./Title"
import QuantityBtn from "./QuantityBtn"
export default function ProductList() {
    const [productList,setProductList]=useState([])
    const [input,setInput] = useState('')
    useEffect(()=>{
      fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
    .then(res=>res.json())
    .then(data=>setProductList(data))
    },[])

    useEffect(()=>{
      if(input.length>4){
        console.log('long')
      }else{
        console.log('short')
      }
    },[input])

    return (
    <div>
        <input type="text" onChange={e=>setInput(e.target.value)}/>
        <Title mainT="choose fruit"/>
        { productList.map(p=>
            <div className={style.productBorder} key={p.id}>
               {p.name}<br/>
               {p.price}<br/>
               <Link to={'/product/'+p.id}>
               <img src={process.env.PUBLIC_URL+'/fruit/'+p.image}/>
               </Link>
               <br/>
               {p.description}<br/>
               <QuantityBtn productInfo={p} />
            </div> 
        )}
    </div>
  )
}

import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState } from "react";
import Image from 'next/image'
const NEw = (props) => {
    const mob =props.data? props.data:[]
    const mob1= mob.length>4?mob.slice(0,4):mob
    const desk =props.data? props.data:[]
    const desk1= desk.length>4?desk.slice(0,4):desk
    const[cart,setcart]=useState([])
    
    // localStorage.setItem.setItem("cart","sssss")
    // // var storedproduct =localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")):[]
    // setcart(storedproduct?storedproduct:[])
    // const oncart =(x,y)=> {
    //     setcart(cart.push({code:x,title:y}))
    //     localStorage.setItem("cart", JSON.stringify(cart))
    // }  
  
    return (  
        <div className="mt-5">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossOrigin="anonymous">
</script>
<div className="row w-100">
    <h4 className="col-12 col-lg-3 title ms-auto"> أحدث العروض</h4>

</div>
<div  >
    <div className="row  d-block d-lg-none">
        {
        mob1.map((item)=>(
            <div className="col-12 col-lg-3 p-4 " key={item.code} >
             {/* <Image className="col-12 col-lg-3 border border-info p-1 rounded-circle" key={item}  loader={() => item.img} src={item.img}   width={"250px"}
      height={"250px"}/> */}
            <h6 className=" ms-auto m-3 title-img"> {item.title} </h6>
            <button type="button" className="btn btn-success" >إضافة لطلب التسعير</button>
        </div>
        ))
    }

    </div>
<Carousel infiniteLoop="true"	showThumbs={false} showIndicators={false} showStatus={false} >
                  <div className="row ">
                       
                  </div>
 </Carousel>
 </div>
</div>
    );
}
 
export default NEw;
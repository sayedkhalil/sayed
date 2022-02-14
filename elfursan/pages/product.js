import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState } from "react";
const Product = () => {

    return (  
        <div className="container">
            <div className="mt-5">
            <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
    
            </Head>
   
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
    crossOrigin="anonymous">
    </script>
    <div className="row w-100">
    <h1 className="col-12 col-lg-3 title ms-auto">باب ألمونتال</h1>

</div>
    <div className="col-12 col-lg-8 mx-auto ">
    <Carousel infiniteLoop="true"	>
                      <div>
                          <img src="/dd.jpg" alt="image1"/>
                          
      
                      </div>
                      <div>
                          <img src="/dd.jpg" alt="image2" />
                         
      
                      </div>
                      <div>
                          <img src="/dd.jpg" alt="image3"/>
                         
      
                      </div>
                      <div>
                          <img src="/dd.jpg" alt="image4"/>
                         
      
                      </div>
               
                  </Carousel>
                  </div>
                  <div>
                  <h3 className="col-12 col-lg-3 title ms-auto">وصف المنتج</h3>
    <div className="col-12 col-lg-8 mx-auto mt-2 border border-success rounded p-4">
       <p className="font-weight-bold text-center">حماية شبابيك ستانلس ستيل بلحام غاز الاركون المتقن 
يتم تركيبه السعر يشمل التوريد والتركيب</p> 
    </div>
    <button type="button" className="btn btn-success mt-3">إضافة لطلب التسعير</button>
    <button type="button" className="btn btn-light mt-3 mx-2"><img className="whats" src="/WhatsApp.svg.png"  alt="" />تواصل واتساب</button>
    <h3 className="col-12 col-lg-3 title ms-auto mt-3">منتجات مشابهة</h3>
    <Carousel infiniteLoop="true"	showThumbs={false} showIndicators={false} showStatus={false} >
                  <div className="row ">
                     <div className="col-12 col-lg-3 p-4 ">
                         <img className="item-img" src="/ee.jpg" alt="" />
                         <h6 className=" ms-auto m-3 title-img" >باب ألمونتال </h6>
                         <button type="button" className="btn btn-success">إضافة لطلب التسعير</button>
                     </div>
                     <div className="col-12 col-lg-3 p-4 ">
                         <img className="item-img" src="/ee.jpg" alt="" />
                         <h6 className=" ms-auto m-3 title-img" >باب ألمونتال </h6>
                         <button type="button" className="btn btn-success">إضافة لطلب التسعير</button>
                     </div>
                     <div className="col-12 col-lg-3 p-4 ">
                         <img className="item-img" src="/ee.jpg" alt="" />
                         <h6 className=" ms-auto m-3 title-img" >باب ألمونتال </h6>
                         <button type="button" className="btn btn-success">إضافة لطلب التسعير</button>
                     </div>
                     <div className="col-12 col-lg-3 p-4 ">
                         <img className="item-img" src="/ee.jpg" alt="" />
                         <h6 className=" ms-auto m-3 title-img" >باب ألمونتال </h6>
                         <button type="button" className="btn btn-success">إضافة لطلب التسعير</button>
                     </div>
                  </div>
                  <div className="row ">
                     <div className="col-12 col-lg-3 p-4 ">
                         <img className="item-img" src="/ee.jpg" alt="" />
                         <h6 className=" ms-auto m-3 title-img" >باب ألمونتال </h6>
                         <button type="button" className="btn btn-success">إضافة لطلب التسعير</button>
                     </div>
                     <div className="col-12 col-lg-3 p-4 ">
                         <img className="item-img" src="/ee.jpg" alt="" />
                         <h6 className=" ms-auto m-3 title-img" >باب ألمونتال </h6>
                         <button type="button" className="btn btn-success">إضافة لطلب التسعير</button>
                     </div>
                     <div className="col-12 col-lg-3 p-4 ">
                         <img className="item-img" src="/ee.jpg" alt="" />
                         <h6 className=" ms-auto m-3 title-img" >باب ألمونتال </h6>
                         <button type="button" className="btn btn-success">إضافة لطلب التسعير</button>
                     </div>
                     <div className="col-12 col-lg-3 p-4 ">
                         <img className="item-img" src="/ee.jpg" alt="" />
                         <h6 className=" ms-auto m-3 title-img" >باب ألمونتال </h6>
                         <button type="button" className="btn btn-success">إضافة لطلب التسعير</button>
                     </div>
                  </div>
 </Carousel>
 <h3 className="col-12 col-lg-3 title ms-auto mt-3">مراجعة المنتج</h3>
 <div className="input-group input-group-sm mb-3 w-75 ms-auto">
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
  <span className="input-group-text" id="inputGroup-sizing-sm">الاسم</span>
</div>
<div className="input-group  mb-3 w-75 ms-auto">
  <textarea className="form-control" aria-label="With textarea"></textarea>
  <span className="input-group-text">اكتب رسالتك</span>
</div>
<div className="my-3">
    <div className="row ms-auto ">    
     <h5 className="col name m-2">محمد بن علي</h5>
     <img className="col-2 avtar" src="/avtar.png" alt="" />
    </div>
    <div className="col-12 col-lg-8 ms-auto mt-2 border border-success rounded p-4">
       <p className="font-weight-bold text-center">حماية شبابيك ستانلس ستيل بلحام غاز الاركون المتقن 
يتم تركيبه السعر يشمل التوريد والتركيب</p> 
    </div>
</div>
<div className="my-3">
    <div className="row ms-auto ">    
     <h5 className="col name m-2">محمد بن علي</h5>
     <img className="col-2 avtar" src="/avtar.png" alt="" />
    </div>
    <div className="col-12 col-lg-8 ms-auto mt-2 border border-success rounded p-4">
       <p className="font-weight-bold text-center">حماية شبابيك ستانلس ستيل بلحام غاز الاركون المتقن 
يتم تركيبه السعر يشمل التوريد والتركيب</p> 
    </div>
</div>
<div className="my-3">
    <div className="row ms-auto ">    
     <h5 className="col name m-2">محمد بن علي</h5>
     <img className="col-2 avtar" src="/avtar.png" alt="" />
    </div>
    <div className="col-12 col-lg-8 ms-auto mt-2 border border-success rounded p-4">
       <p className="font-weight-bold text-center">حماية شبابيك ستانلس ستيل بلحام غاز الاركون المتقن 
يتم تركيبه السعر يشمل التوريد والتركيب</p> 
    </div>
</div>
   
</div>    
</div>
    </div>
     );
}
 
export default Product;
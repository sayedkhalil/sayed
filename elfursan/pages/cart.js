import Head from "next/head";
const Cart = () => {
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
    <h2 className="col-12 col-lg-3 title ms-auto">إنهاء طلبات التسعير</h2></div>
    <div className="row col-12 flex-row-reverse  ">
                     <div className="col-12 col-lg-3 p-4  ">
                         <img className="item-img" src="/ee.jpg" alt="" />
                         <h6 className=" ms-auto m-3 title-img" >باب ألمونتال </h6>
                     </div>
                     <div className="col-12 col-lg-3 p-4 ">
                         <img className="item-img" src="/ee.jpg" alt="" />
                         <h6 className=" ms-auto m-3 title-img" >باب ألمونتال </h6>                         
                     </div>
                  
  </div>
  <div className="input-group input-group-lg border-success mb-3 w-75 ms-auto required">
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required/>
  <span className="input-group-text bg-primary text-light " id="inputGroup-sizing-sm">الاسم</span>
</div>
<div className="input-group input-group-lg border-success mb-3 w-75 ms-auto required">
  <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required/>
  <span className="input-group-text bg-primary text-light" id="inputGroup-sizing-sm">رقم الجوال</span>
</div>
<div className="input-group input-group-lg border-success mb-3 w-75 ms-auto">
  <input type="email" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
  <span className="input-group-text bg-primary text-light" id="inputGroup-sizing-sm">البريد الإلكتروني</span>
</div>
<div className="input-group  mb-3 w-75 ms-auto">
  <textarea className="form-control" aria-label="With textarea"></textarea>
  <span className="input-group-text bg-primary text-light">اكتب رسالتك</span>
</div>
<button type="button" className="btn btn-success my-3">إضافة لطلب التسعير</button>
    <button type="button" className="btn btn-light my-3 mx-2"><img className="whats" src="/WhatsApp.svg.png"  alt="" />تواصل واتساب</button>
    </div>
    </div>
     );
}
 
export default Cart;
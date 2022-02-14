import Head from "next/head";
const Productess = () => {
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
<div className="row col-12 flex-row-reverse  ">
                 <div className="col-12 col-lg-3 p-4  ">
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

</div>
</div>
     );
}
 
export default Productess;
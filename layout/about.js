import Head from "next/head";

const About = (props) => {
  
    return (  
        <div className="mt-5">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>
        <div className="row w-100">
    <h4 className="col-12 col-lg-3 title ms-auto"> لماذا نحن</h4>

</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossOrigin="anonymous">
</script>
<p className="text-center fw-bolder text-darkfw-bolder">{
    props.data.about
}
</p>
<a className="btn btn-primary" href="/images/myw3schoolsimage.jpg" >تحميل بروفايل الشركة</a>
</div>
    );
}
 
export default About;
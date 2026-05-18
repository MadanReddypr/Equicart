import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({children}){

return(

<>

<Navbar/>

<div className="p-5">

{children}

</div>

<Footer/>

</>

)

}

export default MainLayout
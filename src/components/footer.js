import "../components/footer.css"
// import './assests/font/Poppins-Light.otf'; 
// import Logo from "../assests/nav/logo.png"
// import Cart from "../assests/nav/icon1.svg"
import facebook from "../assests/social/facebook.svg"
import instagram from "../assests/social/instagram.svg"
import twitter  from "../assests/social/twitter.svg"
import linkedin  from "../assests/social/linkedin.svg"





function Footer(){


    return (
        <div className = "row-bottombar">
           
           <div className = " column-bottombar">
                  <div  className ='list' >
                    <h4>Free Shipping</h4>
                  </div>
                  <div className ='list' >
                  <span class="dot"></span>
                  </div>
                  <div  className ='list' >
                        <h4 className = "support-customer" >Support Customer</h4>
                  </div>
                  <div  className ='list'  >
                    <span class="dot"></span>
                  </div>
                  <div  className ='list'  >
                        <h4>Payment security</h4>
                  </div>
                  <div  className ='img-icon' >
                    <img id='img-icon' src={facebook} alt="face"/>
                  </div>
                  <div className ='img-icon'> 
                    <img id='img-icon' src={instagram} alt="insta"/>
                  </div>
                  <div className ='img-icon'> 
                    <img id='img-icon' src={twitter} alt="twitter"/>
                  </div>
                  <div className ='img-icon'> 
                    <img id='img-icon' src={linkedin} alt="link"/>
                  </div>
           </div>
        </div>
    
      );
}


export default Footer;
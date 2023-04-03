import {Link,Outlet} from 'react-router-dom'
function Header() {
    return (
        <div className="catagary_section layout_padding">
        <div className="container">
           <div className="catagary_main">
              <div className="catagary_left">
                 <h2 className="categary_text">Categary</h2>
              </div>
              <div className="catagary_right">
                 <div className="catagary_menu">
                    <ul>
                       <li><Link to="/products">Products</Link></li>
                       <li><Link to="/my-cart">My Cart</Link></li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
        <Outlet></Outlet>
     </div>
    );
  }
  
  export default Header;
  
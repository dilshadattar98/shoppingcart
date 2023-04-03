
import { useDispatch,useSelector } from 'react-redux'
import {Link,Outlet} from 'react-router-dom'
import {loadProducts,addTocart} from '../actions/products'
function ProductLists() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.productLists) 
  const addCartItem = (id)=>{
    dispatch(addTocart(id))
  }
  return (
    <div className="computers_section_2">
      <div className="container-fluid">
        <div className="computer_main">
          <div className="row ml-5">
            {products ? products.map((items,index) =>{
              return <div className="col-md-2 ml-4 mr-4 mt-4 shadow-lg" key={index}>
              <div className="computer_img"><img className='productimg' src={items.image}/></div>
                <h4 className="dell_text">Samsung</h4>
                <h6 className="price_text"><a href="#"><img src="images/currency-rupees.svg" height="20px" width="15px"></img>{items.price}</a></h6>
                <h6 className="price_text_1"><a href="#"><img src="images/currency-rupees.svg" height="15px" width="15px"></img>1000</a></h6>
                <div className="cart_bt_1" onClick={()=>{addCartItem(items)}}>
                  <Link to="/my-cart">
                    To Cart
                    </Link>
                  </div>
            </div>
            })
            :<div>data not found</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductLists;

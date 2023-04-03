import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../services/services'
import {USERDATA} from '../constant'
import {deleteProduct,updateQuantity} from '../actions/products'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
function AddToCart() {
  const dispatch = useDispatch()
  const { cartstList, userData } = useSelector((state) => state.products)
  const products = useSelector((state) => state.products.productLists)
  const [total, setTotal] = useState(0)
  const [userName, setUserName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState()
  const [shipping, setShipping] = useState(20)
  const [cartProduct,setCartProduct] = useState(cartstList)
  const [qauantity,setQuantity] = useState(0)
  const grandTotal = async () => {
    const getActiveUser = await getData(USERDATA)
  
    setUserName(getActiveUser.username)
    setPhoneNumber(getActiveUser.phone)
    let total = 0
    cartstList.map((item) => {
      const price = products?.find((product, index) => product.id == item.productId).price
      const Subtotal = price * item.quantity
      total = Math.round(total + Subtotal)
    })
    setTotal(total)

  }
  const updateQuantiy = (e,index) =>{
    
    setQuantity(e.target.value)
    dispatch(updateQuantity(e.target.value,index))
  } 
  const deleteProducts = (id)=>{
    confirmAlert({
      title: 'Delete',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => dispatch(deleteProduct(id))
        },
        {
          label: 'No',
          onClick: () => {console.log("no")}
        }
      ]
    });

    // 
  }
  useEffect(() => {

    grandTotal()
  }, [cartstList])
  
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: '#fffff' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card mt-4">
              <div className="card-body p-4">

                <div className="row">

                  <div className="col-lg-7">
                    <h5 className="mb-3"><a href="#!" className="text-body"><i
                      className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
                    <hr />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">{`You have ${cartstList.length} items in your cart`}</p>
                      </div>
                      <div>

                      </div>
                    </div>
                    {cartstList.length > 0 ? cartstList.map(
                      (item, index) => {
                        const data = products?.find((product, index) => product.id == item.productId)
                        return <div className="card mb-3" key={index}>
                          <div className="card-body">
                            <div className="d-flex justify-content-between" >
                              <div className="d-flex flex-row align-items-center">
                                <div>
                                  <img
                                    src={data.image ? data.image : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"}
                                    className="img-fluid rounded-3 mr-3" alt="Shopping item" style={{ width: '65px' }} />
                                </div>
                                <div className="ms-3">
                                  <h5>Iphone 11 pro</h5>
                                  <p className="small mb-0">256GB, Navy Blue</p>
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center">
                                <div style={{ width: '50px' }}>
                                  {/* <h5 className="fw-normal mb-0">{item.quantity}</h5> */}
                                   <input style={{width:50}} 
                                   placeholder='quantity'  type='number' 
                                    defaultValue={item.quantity} 
                                    
                                   onChange={(e)=>{updateQuantiy(e,index)}}></input>  
                                </div>
                               
                                <a href="#!" style={{ color: '#cecece' }}><i className="fas fa-trash-alt"></i></a>
                              </div>
                              <div className='row'>
                               <span>{(item.quantity * data.price)}</span>
                               <img src="images/currency-rupees.svg" height="15px" width="15px"></img>
                              </div>
                              <div onClick={()=>{deleteProducts(item.productId)}}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      }
                    ) : <div className='d-flex justify-content-between' style={{fontSize:40}}>Nothing in your cart,select something to purchase.</div>}

                  </div>
                  <div className="col-lg-5">
                    <div className="card text-white rounded-3" style={{ backgroundColor: '#ff5d68' }}>
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <h5 className="mb-0">Card details</h5>
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                            className="img-fluid rounded-3" style={{ width: '45px' }} alt="Avatar" />
                        </div>
                        <p className="small mb-2">Card type</p>
                        <a href="#!" type="submit" className="text-white"><i
                          className="fab fa-cc-mastercard fa-2x me-2"></i></a>
                        <a href="#!" type="submit" className="text-white"><i
                          className="fab fa-cc-visa fa-2x me-2"></i></a>
                        <a href="#!" type="submit" className="text-white"><i
                          className="fab fa-cc-amex fa-2x me-2"></i></a>
                        <a href="#!" type="submit" className="text-white">
                          <i className="fab fa-cc-paypal fa-2x"></i>
                        </a>

                        <form className="mt-4">
                          <div className="form-outline form-white mb-4">
                            <input type="text" id="typeName"
                              value={userName}
                              className="form-control form-control-lg" siez="17"
                              placeholder="Cardholder's Name" />
                            <label className="form-label" name="typeName">User's Name</label>
                          </div>
                          <div className="form-outline form-white mb-4">
                            <input type="text" id="typeText" className="form-control form-control-lg" siez="17"
                              placeholder="1234 5678 9012 3457"
                              value={phoneNumber}
                              minLength="19" maxLength="19" />
                            <label className="form-label" name="typeText">Mobile Number</label>
                          </div>
                        </form>
                        {cartstList.length > 0 ?
                        <span>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">{total}<img src="images/currency-rupee.svg" height="15px" width="15px"></img></p>
                          
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">{shipping}<img src="images/currency-rupee.svg" height="15px" width="15px"></img></p>
                        </div>

                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">{total > 0 ? total + shipping : 0}<img src="images/currency-rupee.svg" height="15px" width="15px"></img></p>
                        </div>

                        <button type="button" className="btn btn-info btn-block btn-lg" style={{ backgroundColor: '#143a51' }}>
                          <div className="d-flex justify-content-between">
                            <span>{total + shipping}<img src="images/currency-rupee.svg" height="15px" width="15px"></img></span>
                            <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                          </div>
                        </button>
                        </span> : null}
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddToCart;

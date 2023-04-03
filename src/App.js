
import RootRouter from "./Routes/routes"
import React, {useEffect } from 'react';
import {PRODUCTURL} from './constant'
import { useDispatch } from 'react-redux'
import {loadProducts,getCartData} from './actions/products'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadProducts(PRODUCTURL))
    dispatch(getCartData())
  },[])
  
  return (
    <div className="App">
      <RootRouter></RootRouter>
    </div>
  );
}

export default App;

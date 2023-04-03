import { render } from '@testing-library/react';
import {PRODUCTLIST,CARTLIST,ACTIVEUSER,GETCART,DELETEPRODUCT,CARTSDATA} from '../constant'
import {getData} from '../services/services'
const initialState =
{
    productLists:[],
    cartstList:[],
    userData:{},
    getActiveUser :{}
};

export const loadProducts = (url) => async(dispatch) => 
{
        const productLists = await getData(url) 
        initialState.productLists = productLists
        await dispatch({ type:PRODUCTLIST, productLists })
};

export const getCartData  = () => async(dispatch) =>{
    const data = await getData(CARTSDATA)
     initialState.userData = data
     initialState.cartstList = data.products
     const cartstList = await  data
    await dispatch({type:GETCART,cartstList})
}

export const addTocart = (product)=> async(dispatch) =>
{ 
    product.quantity = 1
    const updatedProduct = {
        quantity : product.quantity,
        productId:product.id
    }
   const availabeldata =initialState?.cartstList.find((item,index)=>{return item.productId == product.id })
   if(availabeldata)
   {
    
    const index = initialState?.cartstList.findIndex((item,index)=>{return item.productId == availabeldata.productId })
    const quantity = initialState?.cartstList[index].quantity + product.quantity
    initialState.cartstList[index].quantity = quantity
   }
   else{
    initialState.cartstList.push(updatedProduct)
    
   } 
}
export const deleteProduct = (id)=> async(dispatch) => 
{
    initialState.cartstList = initialState.cartstList.filter(item => item.productId !== id)
      const cartstList = initialState.cartstList
     await dispatch({type:DELETEPRODUCT,cartstList})
    
}
export const updateQuantity = (value,index) => async (dispatch) =>
{
    initialState.cartstList = initialState.cartstList.map((item,i)=>{
        if(i == index)
        {
            item.quantity = parseInt(value) 
            
        }
        return item
    })
    const cartstList = initialState.cartstList
    await dispatch({type:DELETEPRODUCT,cartstList})
}

 


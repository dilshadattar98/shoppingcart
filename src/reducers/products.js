
import {PRODUCTLIST,CARTLIST,GETCART,DELETEPRODUCT} from '../constant'
  const initialState = 
  {
    productLists:[],
    cartstList:[],
    userData:{}
  };
  
    export default function productReducer(state = initialState, action) 
    {
      switch (action.type) 
       {
          case PRODUCTLIST:
            {
              return {
                  ...state,
                  productLists: action.productLists
                }
            }
            case CARTLIST:
            {
              return {
                  ...state,
                  cartstList: action.cartstList.products,
                  userData:action.cartstList
                }
            }
            case GETCART:{
              return {
                ...state,
                cartstList:action.cartstList.products,
                userData:action.cartstList
              }
            }
            case DELETEPRODUCT:{
              return {
                ...state,
                cartstList:action.cartstList
            }
          }
          default: { return state}
      }
   }
  
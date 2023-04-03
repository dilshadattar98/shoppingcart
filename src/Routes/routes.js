import React from 'react'
import Footer from "../components/layouts/footer"
import Header from "../components/layouts/header"
import AddToCart from "../components/addToCart"
import {BrowserRouter as Router,Routes,Route,Link,Navigate} from "react-router-dom";
import ProductLists from "../components/productLists"
const RootRouter = () => {
    return (
        <>
            <Router>
                <div>
                    <Header></Header>
                    <Routes>
                        <Route path="/" element={<Navigate to="Products" />} />
                        <Route exact path="/Products" element={<ProductLists></ProductLists>} />
                        <Route exact path="/my-cart" element={<AddToCart></AddToCart>} />
                        <Route exact path="/test2" element={<ProductLists></ProductLists>} />
                        <Route exact path="/test3" element={<ProductLists></ProductLists>} />
                    </Routes>

                </div>

            </Router>
            {/* <BrowserRouter>
            <Routes>
                    <Route exact path="/" element={<Header/>}>
                    <Route exact path="/products" element={<ProductLists/>} />
                    </Route>
                    <Route exact path="/" element={<Header/>}>
                    <Route exact path="/wooman" element={<ProductLists/>} />
                    </Route>
                   
            </Routes>
        </BrowserRouter> */}
        </>
    )
}
export default RootRouter
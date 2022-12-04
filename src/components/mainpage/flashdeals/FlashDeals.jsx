import React from "react";
import FlashCard from "./FlashCard";

const FlashDeals = ({productItems, addToCart }) => {
   return(
         <>
         <section className="flash background">
            <div className="container">
                <di className="heading f_flex">
                <i className="fa fa-blot"></i>
                <h2>Flash Deals</h2>
            </di>
            <FlashCard productItems={productItems} addToCart={addToCart}/>
            </div>
         </section>
         </>
   )
}

export default FlashDeals
import React from 'react';
import Discount from '../components/discount/Discount';
import FlashDeals from '../components/mainpage/flashdeals/FlashDeals';
import Home from '../components/mainpage/Home';
import NewArivals from '../components/newarrivals/NewArrivals';
import TopCate from '../components/Top/TopCate';


const Pages = ({productItems, cartItem, addToCart}) => {
    return(
        <>
          <Home cartItem={cartItem}/>
          <FlashDeals productItems={productItems} addToCart={addToCart}/>
          <TopCate />
          <NewArivals />
          <Discount />
        </>
    )
}

export default Pages 
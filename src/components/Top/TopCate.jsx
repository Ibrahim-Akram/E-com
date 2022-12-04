import React from "react";
import TopCart from "./TopCart";
import "./Style.css"

const TopCate = () => {
    return(
        <>
          <section className="topCart background">
            <div className="container">
                <div className="haeding d_flex">
                    <div className="heading-lft row f_flex">
                        <i className="fa fa-border-all"></i>
                            <h2>Top Categories</h2>
                    </div>
                    <div className="heading-right row">
                        <span>View all</span>
                        <i className="fa fa-caret-right"></i>
                    </div>
                </div>
                <TopCart />
            </div>
          </section>
        </>
    ) 
}

export default TopCate
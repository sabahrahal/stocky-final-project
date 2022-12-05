import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../../store/appContext";

export const ProductsWidget = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getProductsInfo();
    }, [store.products]);

    return (
        <div className="widget-container">
            <div className="widget-content">
                <div className="widget-mini-div-container">
                    <h4 className="w-100 ms-3">Products Profitability</h4>
                    <div className="widget-mini-div-products d-flex justify-content-center align-items-center flex-column">
                        <i className="bi bi-wallet2 fs-3"></i>
                        <p>Total Expenses</p>
                        <h2>
                            {store.productsInfo.total_cost_stock_value > 0 && (
                                <b>
                                    {store.productsInfo.total_cost_stock_value}$
                                </b>
                            )}
                        </h2>
                    </div>
                    <div className="widget-mini-div-products d-flex justify-content-center align-items-center flex-column">
                        <i className="bi bi-box-seam-fill fs-3"></i>
                        <p>Total Products</p>
                        <h2>
                            {store.productsInfo.total_products_quantity > 0 && (
                                <b>
                                    {store.productsInfo.total_products_quantity}{" "}
                                    units
                                </b>
                            )}
                        </h2>
                    </div>
                    <div className="widget-mini-div-products d-flex justify-content-center align-items-center flex-column">
                        <i className="bi bi-cash-stack fs-3"></i>
                        <p>Possible Profit</p>
                        <h2>
                        {store.productsInfo.total_stock_profit > 0 && <b>{store.productsInfo.total_stock_profit}$</b>}
                            
                        </h2>
                    </div>
                    <div className="widget-mini-div-products d-flex justify-content-center align-items-center flex-column">
                        <i className="bi bi-graph-up-arrow fs-3"></i>
                        <p>Possible Brute Profit</p>
                        <h2>
                        {store.productsInfo.total_profit_percentage > 0 && <b>
                                {parseInt(
                                    store.productsInfo.total_profit_percentage
                                )}
                                %
                            </b>}
                            
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

import React, { useContext, useEffect, useState } from 'react'
import { Context } from "../../../store/appContext";

export const ProductStockAlert = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getProducts();
    }, [])

    return (
        <div className="widget-container">
            <h4 className='widget-title'>Product Stock Alert</h4>
            <button className='stocky-button'>Create Alert</button>
            <hr />
            <div className='widget-content'>
                <div className='table-tittle'>
                    <p>Product</p>
                    <p>Quantity</p>
                    <p>Order</p>
                </div>
                {
                    store.products.filter((product) => {
                        product.stock_alert = true;
                    }).map((product) => {
                        return <div className='table-data'>
                            <p>{product.name}</p>
                            <p>{product.quantity}</p>
                            <p>ORDER</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

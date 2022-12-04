import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../store/appContext";

export const ProductStockAlert = () => {
    const { store, actions } = useContext(Context);
    const [searchProduct, setSearchProduct] = useState("");
    const [selectedProduct, setSelectedProduct] = useState("Select");
    const [stockQuantityAlert, setStockQuantityAlert] = useState(0);

    useEffect(() => {
        actions.getProducts();
    }, []);

    return (
        <div className="widget-container">
            <h4 className="widget-title">Low Stock Alert</h4>
            <div className="form-group">
                <div className="d-flex align-items-center mb-2">
                    <i className="fas fa-search dashboard-add-form item me-2"></i>
                    <input
                        className="form-control item"
                        placeholder="Search"
                        value={searchProduct}
                        onChange={(event) => {
                            setSearchProduct(event.target.value);
                        }}
                    ></input>
                </div>

                <select
                    name="product"
                    className="form-control form-select item mb-2"
                    value={selectedProduct}
                    onChange={(event) => {
                        setSelectedProduct(event.target.value);
                    }}
                >
                    {searchProduct === "" ? (
                        <option value="Select">Select Product</option>
                    ) : (
                        <option value="Select">
                            Search results for {searchProduct}
                        </option>
                    )}

                    {store.products
                        .filter((product) => {
                            return product.name
                                .toLowerCase()
                                .includes(searchProduct.toLowerCase());
                        })
                        .map((product) => {
                            return (
                                <option key={product.id} value={product.id}>
                                    {product.name}
                                </option>
                            );
                        })}
                </select>
                <div className="d-flex justify-content-around align-items-center">
                    <div>
                        <label className="me-2">Quantity for alert:</label>
                        <input
                            type="number"
                            style={{ width: "60px" }}
                            value={stockQuantityAlert}
                            onChange={(event) => {
                                setStockQuantityAlert(event.target.value);
                            }}
                            placeholder="0"
                        />
                    </div>
                    {stockQuantityAlert == 0 || selectedProduct == "Select" ? (
                        <button
                            className="btn btn-block stocky-button"
                            disabled
                        >
                            Create
                        </button>
                    ) : (
                        <button className="stocky-button">Create</button>
                    )}
                </div>
            </div>

            <hr />
            <div className="widget-content">
                <div className="table-tittle">
                    <p>Product</p>
                    <p>Quantity</p>
                    <p>Order</p>
                </div>
                {store.products
                    .filter((product) => {
                        product.stock_alert = true;
                    })
                    .map((product) => {
                        return (
                            <div className="table-data">
                                <p>{product.name}</p>
                                <p>{product.quantity}</p>
                                <p>ORDER</p>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../store/appContext";

export const ProductStockAlert = () => {
    const { store, actions } = useContext(Context);
    const [searchProduct, setSearchProduct] = useState("");
    const [selectedProduct, setSelectedProduct] = useState("Select");
    const [stockQuantityAlert, setStockQuantityAlert] = useState();
    const [sendProduct, setSendProduct] = useState({});

    useEffect(() => {
        actions.getProducts();
    }, []);

    return (
        <div className="widget-container">
            <div className="widget-title">
                <i className="bi bi-exclamation-triangle-fill"></i>
                <h4>Low Stock Alerts!</h4>
            </div>
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
                            if (
                                product.name
                                    .toLowerCase()
                                    .includes(searchProduct.toLowerCase()) &&
                                product.stock_alert != true
                            )
                                return true;
                        })
                        .map((product) => {
                            return (
                                <option key={product.id} value={product.id}>
                                    {product.name} {product.details}, Left:{" "}
                                    {product.quantity}
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
                                if (event.target.value > 0)
                                    setStockQuantityAlert(event.target.value);
                            }}
                            placeholder="1"
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
                        <button
                            className="stocky-button"
                            onClick={(event) => {
                                actions.addLowStockAlert(
                                    selectedProduct,
                                    true,
                                    stockQuantityAlert
                                );
                                setSearchProduct("");
                                setSelectedProduct("Select");
                                setStockQuantityAlert(0);
                            }}
                        >
                            Create
                        </button>
                    )}
                </div>
            </div>

            <hr />
            <div className="widget-content">
                <div className="widget-mini-div-container">
                    {store.products
                        .filter((product) => {
                            if (
                                product.stock_alert != false &&
                                product.quantity <= product.stock_quantity_alert
                            )
                                return true;
                        })
                        .map((product) => {
                            return (
                                <div
                                    key={product.id}
                                    className="widget-mini-div"
                                >
                                    <div className="widget-more-options">
                                        <a
                                            href={`mailto:${product.supplier_email}?Subject=Hello%20${product.supplier_name}!%20I'm%20interested%20in%20ordering%20${product.name}%20${product.details}.`}
                                        >
                                            <i className="bi bi-envelope-fill"></i>
                                        </a>
                                        <span
                                            onClick={(event) => {
                                                actions.addLowStockAlert(
                                                    product.id,
                                                    false,
                                                    5
                                                );
                                            }}
                                        >
                                            <i className="bi bi-x-circle-fill"></i>
                                        </span>
                                    </div>

                                    <p>
                                        <i className="bi bi-box-fill me-2 widget-icon-gradient" />
                                        <b>{product.name}</b>
                                    </p>
                                    <p>
                                        <i className="bi bi-card-list me-2 widget-icon-gradient"></i>
                                        {product.details}
                                    </p>
                                    <p>
                                        <i className="bi bi-exclamation-square-fill me-2 widget-icon-gradient"></i>
                                        Left: {product.quantity}
                                    </p>
                                    <p>
                                        <i className="bi bi-building-fill me-2 widget-icon-gradient"></i>
                                        {product.supplier_name}
                                    </p>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

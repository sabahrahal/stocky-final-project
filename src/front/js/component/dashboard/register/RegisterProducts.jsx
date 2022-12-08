import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../store/appContext";

export const RegisterProducts = (props) => {
    const { store, actions } = useContext(Context);
    const [searchProduct, setSearchProduct] = useState("");

    const [selectedProduct, setSelectedProduct] = useState("");
    const [productQuantity, setProductQuantity] = useState(1);

    useEffect(() => {
        actions.getProducts();
    }, []);

    return (
        <div className="dashboard-register-mini-container">
            <div className="form-group">
                <div>
                    <h4 className="mb-3 text-center">2. Add products</h4>
                </div>
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
                                    .includes(searchProduct.toLowerCase())
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

                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <label className="me-2">Quantity:</label>
                        <input
                            type="number"
                            style={{ width: "60px" }}
                            value={productQuantity}
                            onChange={(event) => {
                                if (event.target.value > 0)
                                    setProductQuantity(event.target.value);
                            }}
                            placeholder="0"
                        />
                    </div>
                    {productQuantity == 0 ||
                    selectedProduct == "Select" ||
                    selectedProduct == "" ||
                    props.showPrint ? (
                        <button
                            className="btn btn-block stocky-button"
                            disabled
                        >
                            Add to order
                        </button>
                    ) : (
                        <button
                            className="stocky-button"
                            onClick={(event) => {
                                props.setProductsDetails([
                                    ...props.productsDetails,
                                    {
                                        id: selectedProduct,
                                        quantity: productQuantity,
                                    },
                                ]);
                                setSearchProduct("");
                                setSelectedProduct("Select");
                                setProductQuantity(1);
                            }}
                        >
                            Add to order
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

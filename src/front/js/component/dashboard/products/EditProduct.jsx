import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../../store/appContext";

export const EditProduct = (props) => {
    const { store, actions } = useContext(Context);
    const [name, setName] = useState(props.product.name);
    const [details, setDetails] = useState(props.product.details);
    const [serialNumber, setSerialNumber] = useState(props.product.serial_number);
    const [quantity, setQuantity] = useState(props.product.quantity);
    const [buyingCost, setBuyingCost] = useState(props.product.buying_cost);
    const [sellingCost, setSellingCost] = useState(props.product.selling_cost);

    return (
        <div key={props.product.id}>
            <div className="modal fade" id={`modal-${props.product.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content border-0 edit-modal">
                        <div className="dashboard-add-form">
                            <form
                                onClick={(event) => {
                                    event.preventDefault();
                                }}
                            >
                                <div>
                                    <h4 className="mb-3 text-center">
                                        Update Product <br />
                                        "{name}"
                                    </h4>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        className="form-control item"
                                        placeholder="Name"
                                        onChange={(event) => {
                                            setName(event.target.value);
                                        }}
                                        value={name}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="details">Details</label>
                                    <input
                                        name="details"
                                        type="text"
                                        className="form-control item"
                                        placeholder="Details"
                                        onChange={(event) => {
                                            setDetails(event.target.value);
                                        }}
                                        value={details}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="serial">Serial Number</label>
                                    <input
                                        name="serial"
                                        type="text"
                                        className="form-control item"
                                        placeholder="Serial #"
                                        onChange={(event) => {
                                            setSerialNumber(event.target.value);
                                        }}
                                        value={serialNumber}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="quantity">Quantity</label>
                                    <input
                                        name="quantity"
                                        type="text"
                                        className="form-control item"
                                        placeholder="Quantity"
                                        onChange={(event) => {
                                            setQuantity(event.target.value);
                                        }}
                                        value={quantity}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="buy_cost">Buy Cost (Unit)</label>
                                    <input
                                        name="buy_cost"
                                        type="text"
                                        className="form-control item"
                                        placeholder="Buy Cost"
                                        onChange={(event) => {
                                            setBuyingCost(event.target.value);
                                        }}
                                        value={buyingCost}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="sell_cost">Sell Cost (Unit)</label>
                                    <input
                                        name="sell_cost"
                                        type="text"
                                        className="form-control item"
                                        placeholder="Sell Cost"
                                        onChange={(event) => {
                                            setSellingCost(event.target.value);
                                        }}
                                        value={sellingCost}
                                    />
                                </div>
                                <div className="form-group d-flex justify-content-center">
                                    <button
                                        type="button"
                                        className="stocky-button"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="btn btn-block stocky-button ms-3"
                                        data-bs-dismiss="modal"
                                        onClick={(event) => {
                                            actions.updateProduct(
                                                props.product.id,
                                                props.product.supplier_id,
                                                name,
                                                details,
                                                serialNumber,
                                                quantity,
                                                buyingCost,
                                                sellingCost)
                                        }}
                                    >
                                        Update Product
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

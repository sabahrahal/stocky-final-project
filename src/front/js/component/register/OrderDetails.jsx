import React, { useContext } from "react";
import { Context } from "../../store/appContext";

export const OrderDetails = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="dashboard-register-big-container">
            <div>
                <button
                    onClick={(event) => {
                        actions.createCustomerOrder(
                            "zelle",
                            props.selectedCustomer,
                            props.productsDetails
                        );
                    }}
                ></button>
            </div>
        </div>
    );
};

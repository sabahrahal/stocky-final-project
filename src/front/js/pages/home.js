import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { InfoCard } from "../component/InfoCard.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-5">
          <h1 className="stocky-text-color">
            A Smart, automatic inventory tool.
          </h1>
          <p className="stocky-text-color">
            Stocky is the faster, safer way to manage inventory automatically,
            keep track of vendors, monitor products profitability in real time,
            and more...
          </p>
          <button className="stocky-button">Explore</button>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <img
            src="https://cdn.discordapp.com/attachments/747040302988132352/1041237107454255124/logo_png_sabah.png"
            width="500px"
          />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <InfoCard
            img="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            title="Real-Time Invetory Visibility"
            description="Enjoy real-time, detailed visibility into key inventory control
            and supply chain management measures, including inventory tends,
            stock on order and supplier on-time performance."
          />
        </div>

        <div className="col">
          <InfoCard
            img="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            title="Complete Procure-to-Pay Purchasing"
            description="tocky lets you move from manual, paper-based purchasing to lowe
            cost, higher control automated purchasing. Steamline purchasing
            and save more money to your bottom line."
          />
        </div>

        <div className="col">
          <InfoCard
            img="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            title="One System for Your Entire Company"
            description="Eliminate IT costs and concerns associated with maintaining and
            upgrading separate applications."
          />
        </div>

        <div className="col">
          <InfoCard
            img="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            title="Advanced Invetory & Order Fulfillment"
            description="Stocky saves any distribution countless hours of work associated
            with data entry, organization and fulfillment. You'll be able to
            convert lead to orders, orders to shipments, and shipments to
            revenue in short order."
          />
        </div>
      </div>
    </div>
  );
};

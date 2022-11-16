import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { InfoCard } from "../component/InfoCard.jsx";
import { Roadmap } from "../component/Roadmap.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 title-and-sub-title mx-auto">
          <div className="d-flex justify-content-center align-items-center screen-991px">
            <img
              src="https://cdn.discordapp.com/attachments/747040302988132352/1041237107454255124/logo_png_sabah.png"
              width="600px"
            />
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="stocky-text-color text-center fs-1">
              A Smart, automatic inventory tool.
            </h1>
            <p className="stocky-text-color text-center fs-5">
              Stocky is the faster, safer way to manage inventory automatically,
              keep track of vendors, monitor products profitability in real
              time, and more...
            </p>
            <a id="road_map" href="#road_map" className="stocky-button">
              Explore
            </a>
          </div>
        </div>
      </div>
      <hr className="mt-5 hr-color" />
      <div className="row">
        <h2 className=" fs-1 mt-5 col-6 me-auto">
          The path to your success has never looked so easy.
        </h2>
      </div>
      <Roadmap />
      <div className="row mt-5">
        <div className="col-md d-flex justify-content-center">
          <InfoCard
            className="col-md d-flex justify-content-center"
            img="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            title="Real-Time Invetory Visibility"
            description="Enjoy real-time, detailed visibility into key inventory control
            and supply chain management measures, including inventory tends,
            stock on order and supplier on-time performance."
          />
        </div>

        <div className="col-md d-flex justify-content-center">
          <InfoCard
            img="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            title="Complete Procure-to-Pay Purchasing"
            description="tocky lets you move from manual, paper-based purchasing to lowe
            cost, higher control automated purchasing. Steamline purchasing
            and save more money to your bottom line."
          />
        </div>

        <div className="col-md d-flex justify-content-center">
          <InfoCard
            img="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            title="One System for Your Entire Company"
            description="Eliminate IT costs and concerns associated with maintaining and
            upgrading separate applications."
          />
        </div>

        <div className="col-md d-flex justify-content-center">
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

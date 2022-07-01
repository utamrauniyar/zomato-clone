import React from "react";
import { restaurants } from "../../data/restaturants";
import ExploreSection from "../common/exploreSection";
import Filters from "../common/filters";
import "./delivery.css";
import DeliveryCollections from "./deliveryCollections";
import TopBrands from "./topBrands";

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygenic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    icon: <i className="fi fi-rr-sort-alt absolute-center"></i>,
    title: "Delivery Time",
  },
  {
    id: 6,
    title: "Great Offers",
  },
]

const restaturantsList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection
        restaurants={restaturantsList}
        collectionName="Delivery Restaurantss in Delhi NCR"
      />
    </div>
  );
};

export default Delivery;

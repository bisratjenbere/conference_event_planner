import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "./venueSlice";
import Navbar from "./ConferenceEvent/NavBar";
import VenueSection from "./ConferenceEvent/VenueSection/VenueSection";
import AddonsSection from "./ConferenceEvent/AddonsSection";
import MealsSection from "./ConferenceEvent/MealsSection";
import TotalCost from "./TotalCost";

const ConferenceEvent = () => {
  const [showItems, setShowItems] = useState(false);

  const venueItems = useSelector((state) => state.venue);

  const dispatch = useDispatch();

  const remainingAuditoriumQuantity =
    3 -
    venueItems.find(
      (item) => item.name === "Auditorium Hall (Capacity:200)"
    ).quantity;
    

  const handleAddToCart = (index) => {
    if (
      venueItems[index].name === "Auditorium Hall (Capacity:200)" &&
      venueItems[index].quantity >= 3
    ) return;

    dispatch(incrementQuantity(index));
  };

  const handleRemoveFromCart = (index) => {
    if (venueItems[index].quantity > 0) {
      dispatch(decrementQuantity(index));
    }
  };

  const calculateTotalCost = () =>
    venueItems.reduce(
      (sum, item) => sum + item.cost * item.quantity,
      0
    );
  const venueTotalCost = calculateTotalCost();

  const navigateToProducts = (idType) => {
    if (["#venue", "#addons", "#meals"].includes(idType) && showItems) {
      setShowItems(false);
    }
  };

  return (
    <>
      <Navbar
        showItems={showItems}
        setShowItems={setShowItems}
        navigateToProducts={navigateToProducts}
      />

      <div className="main_container">
        {!showItems ? (
  
          <div className="items-information">
            <VenueSection
              venueItems={venueItems}
              venueTotalCost={venueTotalCost}
              remainingAuditoriumQuantity={remainingAuditoriumQuantity}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />

            <AddonsSection venueTotalCost={venueTotalCost} />
            <MealsSection />
          </div>
        ) : (
          <div className="total_amount_detail">
            <TotalCost />
          </div>
        )}
      </div>
    </>
  );
};

export default ConferenceEvent;

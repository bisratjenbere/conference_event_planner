import "../ConferenceEvent.css"
import { useSelector, useDispatch } from "react-redux";
import {
  toggleMealSelection,
} from "../mealsSlice";

const MealsSection = () => {
  const mealItems = useSelector((state) => state.meals);
  const dispatch = useDispatch();

  const handleToggleMealSelection = (index) => {
    dispatch(toggleMealSelection(index));
  };

  const mealTotalCost = mealItems.reduce(
    (sum, item) => sum + (item.selected ? item.cost : 0),
    0
  );

  return (
    <div id="meals" className="venue_container container_main">
      <div className="text">
        <h1>Meals Selection</h1>
      </div>

      <div className="input-container venue_selection"></div>
      <div className="meal_selection">
        {mealItems.map((item, index) => (
          <div className="meal_data venue_main" key={index}>
            <div className="text">{item.name}</div>
            <div>${item.cost}</div>
            <button
              className={`btn ${item.selected ? "btn-danger" : "btn-primary"}`}
              onClick={() => handleToggleMealSelection(index)}
            >
              {item.selected ? "Unselect" : "Select"}
            </button>
          </div>
        ))}
      </div>
      <div className="total_cost">Total Cost:${mealTotalCost}</div>
    </div>
  );
};

export default MealsSection;

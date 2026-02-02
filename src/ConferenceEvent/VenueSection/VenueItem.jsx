const VenueItem = ({
  item,
  index,
  venueItems,
  remainingAuditoriumQuantity,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  const isAuditorium = item.name === "Auditorium Hall (Capacity:200)";

  return (
    <div className="venue_main">
      <div className="img">
        <img src={item.img} alt={item.name} />
      </div>

      <div className="text">{item.name}</div>
      <div>${item.cost}</div>

      <div className="button_container">
        <button
          className={
            item.quantity === 0
              ? "btn-warning btn-disabled"
              : "btn-warning btn-plus"
          }
          onClick={() => handleRemoveFromCart(index)}
        >
          &#8211;
        </button>

        <span className="selected_count">
          {item.quantity > 0 ? item.quantity : "0"}
        </span>

        <button
          className={
            isAuditorium
              ? remainingAuditoriumQuantity === 0
                ? "btn-success btn-disabled"
                : "btn-success btn-plus"
              : item.quantity === 10
              ? "btn-success btn-disabled"
              : "btn-success btn-plus"
          }
          onClick={() => handleAddToCart(index)}
        >
          &#43;
        </button>
      </div>
    </div>
  );
};

export default VenueItem;

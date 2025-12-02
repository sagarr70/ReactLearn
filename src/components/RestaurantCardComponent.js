// Restaurant Card Component
const RestaurantCardComponent = (props) => {
  const { id, name, cuisine, rating, imageUrl, price } = props;
  return (
    <div className="restaurant-card" uniquekey={id}>
      <img src={imageUrl} alt={name} className="restaurant-image" />
      <div className="restaurant-info">
        <h3 className="restaurant-name">{name}</h3>
        <p className="restaurant-cuisine">{cuisine}</p>
        <p className="restaurant-rating">{rating} ★</p>
        <p className="restaurant-price">Price: {price}</p>
      </div>
    </div>
  );
};

export default RestaurantCardComponent;
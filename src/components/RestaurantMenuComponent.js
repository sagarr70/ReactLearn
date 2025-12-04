import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { SWIGGY_API_MENU } from "../utils/constants.js";
import ShimerComponent from "./ShimerComponent";

const RestaurantMenuComponent = (props) => {
  const [menu, setMenu] = useState(null);
  const params = useParams();
  // prefer explicit prop if passed, otherwise read from route params (resId)
  const id = props.id || params.resId;

  useEffect(() => {
    if (!id) return; // wait until id is available
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const response = await fetch(SWIGGY_API_MENU + id);

    const data = await response.json();
    setMenu(data);
     
  };

  const menuItems = menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const filteredMenuItems = menuItems?.filter(item => item?.card?.card?.itemCards !== undefined);
  const { name , costForTwo } = menu?.data?.cards[2]?.card?.card?.info || {};

  return menu === null ? (
    <ShimerComponent />
  ) : (
    <div className="restaurant-menu">
      <h1>Welcome To Restaurant {name}</h1>
      <p>Cost of Two: {costForTwo}</p>
      <h2>Menu</h2>
      {filteredMenuItems?.map((item,index) => (
          <ul key={index}>
            <li>Category: {item?.card?.card?.title}</li>
            <ul>
              {item?.card?.card?.itemCards?.map((menuItem) => (
                <li key={menuItem?.card?.info?.id}>
                  {menuItem?.card?.info?.name} - ₹{menuItem?.card?.info?.price / 100}
                  {menuItem?.card?.info?.description && <p>{menuItem?.card?.info?.description}</p>}
                </li>
              ))}
            </ul>
            
          </ul>
      ))}
    </div>
  );
};

export default RestaurantMenuComponent;

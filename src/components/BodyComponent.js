import CorousalComponent from "./Corousel.js";
import RestaurantCardComponent from "./RestaurantCardComponent.js";
import resDataList from "../utils/mockData.js";
import { IMAGE_BASE_URL , SWIGGY_API} from "../utils/constants.js";
import { useState , useEffect} from "react";
import ShimerComponent from "./ShimerComponent.js";
import { useOutletContext } from "react-router";

// Body Component
const BodyComponent = (props) => {
  // read counter and Increment from Outlet context when rendered as a routed child
  const outletContext = useOutletContext?.() || {};
  const { counter, setCounter } = outletContext;

  const [resDataListView, setResDataListView] = useState([]) ;
  const [filteredResDataList, setFilteredResDataList] = useState([]) ;
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    console.log("Fetching restaurant data...");
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = resDataListView.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchQuery) || restaurant.info.cuisines.some(cuisine => cuisine.toLowerCase().includes(searchQuery)));
    setFilteredResDataList(filtered);
  }, [searchQuery]);

  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_API);
      const jsonData = await response.json();
      const staticResDataList = jsonData?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setFilteredResDataList(staticResDataList);
      setResDataListView(staticResDataList);
      
    } catch (error) {
      console.log("Error fetching restaurant data:", error);
    }
  };


  // Show Shimmer while data is loading - Conditional Rendering

    return resDataListView.length === 0 ? <ShimerComponent /> : (
    <div className="app-body">
      <div>
        Counter : {counter} &nbsp;
        <button onClick={ () => setCounter(counter + 1) } >Increment Counter</button>
      </div>
      <div className="search-bar">
        <input
          id="search-input"
          type="text"
          value = {searchQuery}
          onChange = { (e) => setSearchQuery(e.target.value) }
          placeholder="Search for restaurants or cuisines..."
        />
        <button className="search-button" onClick = { () => {
          const filtered = resDataListView.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchQuery) || restaurant.info.cuisines.some(cuisine => cuisine.toLowerCase().includes(searchQuery)));
          setFilteredResDataList(filtered);

        }} >Search</button>
      </div>
      <div id="filter-bar">
        <button className="filter-button" onClick={() => {
          const filtered = resDataListView.filter(restaurant => restaurant.info.avgRating > 4);
          setFilteredResDataList(filtered);
        }}>
          Filter Top Rated Restaurants
        </button>
        <button className="filter-button" onClick={() => {
          setFilteredResDataList(resDataListView);
        }}>
          Show All Restaurants
        </button>
      </div>
      <CorousalComponent />
      <div className="restaurant-container">
        {filteredResDataList.map((restaurant) => (
          <RestaurantCardComponent
            key={restaurant.info.id}
            id={restaurant.info.id}
            name={restaurant.info.name}
            cuisine={restaurant.info.cuisines.join(", ")}
            rating={restaurant.info.avgRating}
            price={restaurant.info.costForTwo}
            imageUrl={ IMAGE_BASE_URL + restaurant.info.cloudinaryImageId}
          />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
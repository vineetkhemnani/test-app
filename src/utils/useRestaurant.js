import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";
const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null)
  const [restaurantMenu, setRestaurantMenu] = useState([])
  useEffect(() => {
    getRestaurantInfo()
  }, [])
  async function getRestaurantInfo() {
    try {
      const data = await fetch(
        FETCH_MENU_URL +
          id
      )
      const json = await data.json()
      const itemCards =
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards
      // console.log(json.data.cards);
      setRestaurant(json?.data?.cards[0]?.card?.card?.info)
      setRestaurantMenu(itemCards)
      // console.log(itemCards)
    } catch (error) {
      console.log(error)
    }
  }
  return [restaurant,restaurantMenu];
};
export default useRestaurant;
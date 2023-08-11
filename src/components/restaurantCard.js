import { IMAGE_CDN_URL } from '../constants'

const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  // console.log(restaurant.info)
  return (
    <div className="w-56 p-2 m-2 shadow-md bg-purple-50 rounded-lg">
      <img src={IMAGE_CDN_URL + cloudinaryImageId} alt="" />
      <h2 className='text-xl font-bold'>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  )
}

export default RestaurantCard;
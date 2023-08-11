const Shimmer = () => {
  return (
    <>
      <div className="search-container">
        <input type="text" name="" id="" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="restaurant-list">
        {Array(10)
          .fill('')
          .map((e, index) => (
            <div key={index} className="shimmer-card"></div>
          ))}
      </div>
    </>
  )
}

export default Shimmer;
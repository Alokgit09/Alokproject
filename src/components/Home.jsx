import React from 'react'
import ImgSlider from '../slider/ImgSlider'

const Home = () => {

  
  return (
    <>
    <ImgSlider />
    <div className="container_fluid">
     <div className="container">
  
    <div className="row">
      <div className="col-md-6">
        <img src="photos\laptop1.jpg" alt="" />
      </div>

      <div className="col-md-6">
        <div className="containt_sec1">
          <h2>Choose the perfect Laptop</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ipsum accusamus 
            laborum suscipit debitis dolorem quo esse dignissimos est minima? Quas dignissimos culpa fuga 
            error voluptas quia atque, cumque nobis. Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Dolorem beatae animi neque ratione error dignissimos labore nihil ipsam vel qui.</p>
        </div>
      </div>
    </div>
     </div>
    </div>
    </>
  )
}

export default Home
import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const ImgSlider = () => {

    const sliderImages = [
        {
           url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
        },
        {
           url: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
        },
        {
           url: "https://webneel.com/wallpaper/sites/default/files/images/08-2018/1-nature-wallpaper-grass-hd.1366.jpg",
        },
        {
           url: "https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.1366.jpg",
        },
        
     ];


  return (
    <>
    <SimpleImageSlider 
   width="100%"
   height={550}
   images={sliderImages}
   showNavs={true}
   background-size= "cover"
    background-position= "center"
    /> 
    </>
  )
}

export default ImgSlider
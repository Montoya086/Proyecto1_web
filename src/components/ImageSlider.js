import React, { useEffect, useState } from "react";
import './ImageSlider.scss'
import rigth_arrow from "./slider_images/arrow_right.png"
import left_arrow from "./slider_images/arrow_left.png"
import { SliderData } from "./SliderData";
const ImageSlider =()=>{
    const [currentSlide, setCurrentSlide] = useState(SliderData[0])
    const [currentCount, setCurrentCount] = useState(0)
    const [leftArrowHover, setLeftArrowHover] = useState(false)
    const [rightArrowHover, setRightArrowHover] = useState(false)
    const [isFirst, setIsFirst]=useState(true)
    const [isLast, setIsLast]=useState(false)
    const handleLast=()=>{
        if(currentCount===0){
            setCurrentCount(5)
        }else{
            setCurrentCount(currentCount-1)
        }
    }
    const handleNext=()=>{
        if(currentCount===5){
            setCurrentCount(0)
        }else{
            setCurrentCount(currentCount+1)
        }
    }
    useEffect(()=>{
        setCurrentSlide(SliderData[currentCount])
        if(currentCount!==0){
            setIsFirst(false)
        }else{
            setIsFirst(true)
        }
        if(currentCount!==5){
            setIsLast(false)
        }else{
            setIsLast(true)
        }
    },[currentCount])
    return(
        <section className="slider">
            <div style={{backgroundImage: `url(${currentSlide.bgimage})`, minHeight:"460px", width: "100%", position: "absolute", display: "flex", justifyContent: "center", alignItems: "center",backgroundRepeat:"no-repeat",backgroundSize:"cover", overflow:"hidden"}}>
                <div className="slider-items">
                    <div className={`slider-left-arrow ${isFirst ? "no-visible":""}`} onMouseEnter={()=>setLeftArrowHover(true)} onMouseLeave={()=>setLeftArrowHover(false)} onClick={handleLast}>
                        <img src={left_arrow} alt="" className={`${leftArrowHover ? "change-contrast" : ""}`}/>
                    </div>
                    <div className="slider-image-display">
                        <img src={currentSlide.image} alt=""/>
                    </div>
                    <div className={`slider-right-arrow ${isLast ? "no-visible":""}`} onMouseEnter={()=>setRightArrowHover(true)} onMouseLeave={()=>setRightArrowHover(false)} onClick={handleNext}>
                        <img src={rigth_arrow} alt="" className={`${rightArrowHover ? "change-contrast" : ""} ${isLast ? "no-visible":""}`}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImageSlider
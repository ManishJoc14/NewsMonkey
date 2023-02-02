import React, { useState,useEffect } from 'react'

 const GoTop=()=> {
  const [showGoTop, setShowGoTop] = useState(false)
   const handleScrollUp = () => {
        window.scrollTo( { left: 0, top: 0,behavior: 'smooth'})
      }
   const handleVisibleButton = () => {
      setShowGoTop(window.pageYOffset > 50);
  }
   useEffect(() => {
    window.addEventListener( 'scroll', handleVisibleButton );
   }, [])
  
    return (
        <button className="btn btn-outline-warning position-fixed "onClick={ handleScrollUp } style={{right:'1%',bottom:'12%',fontSize:'1.8rem',borderRadius:'50%',outline:'none',display:showGoTop?'block':'none'}}><i className="fa-solid fa-angles-up"></i></button>
    )
}
export default GoTop;
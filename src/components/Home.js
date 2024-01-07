import React from 'react'
import {useNavigate} from 'react-router-dom'
import $ from 'jquery'


export const Home = () => {
  const navigate = useNavigate();

  const onClick = () => {
    $("#menuSelector2").removeClass("hidden")
    $("#menuSelector1").addClass("hidden")
    navigate('/destination');
  }
  return (
    <div className="homeBody body">
        <div className="homeText">
            <p className="textCondensed">SO, YOU WANT TO TRAVEL TO</p>
            <p className="textBellefair">SPACE</p>
            <p className="textBarlow">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>

          <button onClick = {onClick}>
              EXPLORE
          </button>
    </div>
  )
}

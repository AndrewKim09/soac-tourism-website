import React, { useEffect } from 'react'
import { useState } from 'react'
import $, { error } from 'jquery'

export const Destination = () => {
  const [planet, setPlanet] = useState('MOON')
  const [planetInfo, setPlanetInfo] = useState("See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.")
  const [distance, setDistance] = useState("384,400 km")
  const [travel, setTravel] = useState("3 days")

  


  useEffect(()=> {

    $(document).ready(function(){

      $("#input1").attr("checked", true)
      $(".planets").each(function(){

        $(this).on("click", function(){
          $(".planets").each(function(){
            $(this).children().attr("checked", false)
          })
          $(this).children().attr("checked", true)

          switch($(this).children().val()){
            case("1"):
              setPlanet("MOON")
              setPlanetInfo("See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.")
              setDistance("384,400 km")
              setTravel("3 days")
              break;

            case("2"):
              setPlanet("MARS")
              setPlanetInfo("Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!")
              setDistance("225 mil. km")
              setTravel("9 months")
              break;

            case("3"):
              setPlanet("EUROPA")
              setPlanetInfo("The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.")
              setDistance("628 mil. km")
              setTravel("3 years")
              break;

            case("4"):
              setPlanet("TITAN")
              setPlanetInfo("The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.")
              setDistance("1.6 bil. km")
              setTravel("7 years")
              break;
          }
            
        })
      })
    })

  },[])


  return (
    <div className="destinationBody body">
      <p className="title">
        <span>01</span>
        <span>PICK YOUR DESTINATION</span>
      </p>
      <div className="horizontalFlex">

        <div className="imageContainer"/>

        <div className="infoBox">

          <div className="planetsContainer">
            <p>
              <span className="planets">MOON<input id="input1" type="radio" value="1"/></span>
              <span className="planets">MARS<input type="radio" value="2"/></span>
              <span className="planets">EUROPA<input type="radio" value="3"/></span>
              <span className="planets">TITAN<input type="radio" value="4"/></span>
            </p>

            <div className="planetSelector"/>
          </div>

          <div className="planetInfo">
            <p class="planetText">{planet}</p>
            <p>{planetInfo}</p>
          </div>

          <div className="planetStats">
            <div>
              <p>AVG. DISTANCE</p>
              <p>{distance.toUpperCase()}</p>
            </div>

            <div>
              <p>EST. TRAVEL TIME</p>
              <p>{travel.toUpperCase()}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

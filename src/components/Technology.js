import React, { useEffect, useState } from 'react'
import $ from 'jquery'

export const Technology = () => {
    const [location, setLocation] = useState("LAUNCH VEHICLE")
    const [description, setDescription] = useState("A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!")
    useEffect(() => {
        $(document).ready(function() {
            $("#imageToggle1").children().attr("checked", true)
        
            $(".imageToggle").each(function() {
                $(this).unbind("click")
            })

            $(".imageToggle").each(function(){

                $(this).on("click", function(){
                    $(".imageToggle").each(function(){
                        $(this).children().attr("checked", false)
                    })
                    $(this).children().attr("checked", true)
                
                    switch($(this).attr("value")){
                        case("1"):
                        setLocation("LAUNCH VEHICLE");
                        setDescription("A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!");
                        break;
                        
                        case("2"):
                        setLocation("SPACEPORT");
                        setDescription("A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.")
                        break;

                        case("3"):
                        setLocation("SPACE CAPSULE");
                        setDescription("A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.")
                    }
                }) 
            })
        })
    }, [])
  return (
    <div class="technologyBody body">
        <div className="title">
            <span>03</span>
            <span>SPACE LAUNCH 101</span>
        </div>

        <div className="imageContainer"/>

        <div className="horizontalFlex">

            <div className="imageToggleContainer">
                <div id="imageToggle1" className="imageToggle" value="1">
                    1
                    <input type="radio" name="imageToggle" value="1"/>
                </div>
                <div className="imageToggle" value="2">
                    2
                    <input type="radio" name="imageToggle" value="2"/>
                </div>
                <div className="imageToggle" value="3">
                    3
                    <input type="radio" name="imageToggle" value="3"/>
                </div>
            </div>

            <div className="technologyInfo">
                <p>THE TERMINOLOGY...</p>
                <p class="location">{location}</p>
                <p class="description">{description}</p>
            </div>
        </div>

    </div>
  )
}

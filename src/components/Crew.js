import React, { useEffect } from 'react'
import $ from 'jquery'
import { useState } from 'react'

export const Crew = () => {
    const [role, setRole] = useState("COMMANDER")
    const [name, setName] = useState("DOUGLAS HURLEY")
    const [bio, setBio] = useState("Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.")

    useEffect(() => {

        $(document).ready(function() {
            $("#imageToggle1").children().attr("checked", true)

            $(".imageToggle").each(function() {
                $(this).unbind("click")
            })
            $(".imageToggle").each(function(){
                console.log($(this).attr("value"))

                $(this).on("click", function(){
                    $(".imageToggle").each(function(){
                        $(this).children().attr("checked", false)
                    })
                    $(this).children().attr("checked", true)
                
                    switch($(this).attr("value")){
                        case("1"):
                        setRole("COMMANDER")
                        setName("DOUGLAS HURLEY")
                        setBio("Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.")
                        break;
    
                        case("2"):
                        setRole("MISSION SPECIALIST")
                        setName("MARK SHUTTLEWORTH")
                        setBio("Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.")
                        break;
                        
                        case("3"):
                        setRole("PILOT")
                        setName("VICTOR GLOVER")
                        setBio("Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.")
                        break;
    
                        case("4"):
                        setRole("FLIGHT ENGINEER")
                        setName("ANOUSHEH ASNARI")
                        setBio("Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.")
                        break;
                    }
                })
            })
        })
    }, [])
  return (
    <div class="crewBody body">
        <div className="horizontalFlex">


            <div className="imageContainer"/>

            <div className="verticalFlex">

                <div className="title">
                    <span>02</span>
                    <span>MEET YOUR CREW</span>
                </div>

                <div className="mobileImageContainer"/>

                <div className="imageTogglesContainer">
                    <div id="imageToggle1" className="imageToggle" value="1"><input type="radio" value="1"/></div>
                    <div className="imageToggle" value="2"><input type="radio" value="2"/></div>
                    <div className="imageToggle" value="3"><input type="radio" value="3"/></div>
                    <div className="imageToggle" value="4"><input type="radio" value="4"/></div>
                </div>

                <div className="crewInfo">
                    <p className="crewRole">{role}</p>
                    <p className="crewName">{name}</p>
                    <p className="crewBio">{bio}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

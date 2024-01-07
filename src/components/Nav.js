import React, { useEffect } from 'react'
import $ from 'jquery'
import { useNavigate } from 'react-router-dom';
export const Nav = () => {
  const navigate = useNavigate();

  const onItemClick = (value) => {
    $(".menuSelector").each(function(){
      $(this).addClass("hidden")
    })
    console.log(value)
    switch(value){
      case("00"):
        $("#menuSelector1").removeClass("hidden")
        navigate("/")
        break;
      case("01"):
        $("#menuSelector2").removeClass("hidden")
        navigate("/destination")
        break;
      case("02"):
        $("#menuSelector3").removeClass("hidden")
        navigate("/crew")
        break;
      case("03"):
        $("#menuSelector4").removeClass("hidden")
        navigate("/technology")
        break;
    }
  }
  

  useEffect(()=> {
    
    $(document).ready(function(){

      switch(window.location.hash){
        case("#/"):
        $("#menuSelector1").removeClass("hidden")
        break;

        case("#/destination"):
        $("#menuSelector2").removeClass("hidden")
        break;
        
        case("#/crew"):
        $("#menuSelector3").removeClass("hidden")
        break;

        case("#/technology"):
        $("#menuSelector4").removeClass("hidden")
        break;

      }

      $(".menuIcon").unbind("click");

      $(".menuIcon").on("click", function(event){
        console.log(event.currentTarget)

        if($(".menuDivToggle").attr("checked")){
          console.log("checked")
          $(".menuDivToggle").attr("checked", false);
          $(".menuLogoToggle").attr("checked", false);
        }
        else{
          console.log("not checked")
          $(".menuDivToggle").attr("checked", true);
          $(".menuLogoToggle").attr("checked", true);
        }
      })
    })
  }, []);



  return (
    <div className="topBar">
        <div className="logo"/>
        <div className="menuIcon"><input type="checkbox" className="menuLogoToggle"/></div>


        <div className="desktopLine"/>
        
        <div className="menuContainer">
          <input type="checkbox" className="menuDivToggle"/>

          <div className="menuItemsContainer">
            <div onClick={() => {onItemClick("00")}} id="menuItem1" className="menuItem">
              <div id="menuItemText1" class="menuItemText"><span>00</span>HOME</div>
              <div id="menuSelector1" className="menuSelector hidden"></div>
            </div>

            <div onClick={() => {onItemClick("01")}} id="menuItem2" className="menuItem">
              <div id="menuItemText2" class="menuItemText"><span>01</span>DESTINATION</div>
              <div id="menuSelector2" className="menuSelector hidden"></div>
            </div>

            <div onClick={() => {onItemClick("02")}} id="menuItem3" className="menuItem">
              <div id="menuItemText3" class="menuItemText"><span>02</span>CREW</div>
              <div id="menuSelector3" className="menuSelector hidden"></div>
            </div>

            <div onClick={() => {onItemClick("03")}} id="menuItem4" className="menuItem">
              <div id="menuItemText4" class="menuItemText"><span>03</span>TECHNOLOGY</div>
              <div id="menuSelector4" className="menuSelector hidden"></div>
            </div>

          </div>
        </div>
    </div>
  )
}

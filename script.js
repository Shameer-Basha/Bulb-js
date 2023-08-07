function bulbOnOff()
{
    let bulb= document.querySelector('#bulb');
   /* let switchBtn =document.getElementById('switchBtn'); 
   "https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg";*/
    if(bulb.getAttribute('state') === 'off')
    {
        bulb.src ="5483936.jpg";
        bulb.setAttribute('state','on');
        switchBtn.textContent = "Turn OFF";
    }
    else{
        bulb.src ="bulb-off.png"
        bulb.setAttribute('state','off');
        switchBtn.textContent = "Turn ON";
    }

}

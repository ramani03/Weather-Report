//178171b077a308ee9165227887083868
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//<img src="https://icon-library.com/images/problem-icon-png/problem-icon-png-21.jpg" height="60px"width="80px"/></div>
const apid={
    key:"178171b077a308ee9165227887083868",
    linku:"https://api.openweathermap.org/data/2.5/weather"

}
//Making the search bar work
const search=document.getElementById('inbox');
//on pressing enter by user
search.addEventListener('keypress',sefunc);
function sefunc(event){
    if(event.keyCode==13){
console.log(search.value);
getinfowe(search.value);
document.querySelector('.content').style.display='block';
}
}
//extract weather info
function getinfowe( cityname){
fetch(`${apid.linku}?q=${cityname}&&appid=${apid.key}&units=metric`)
.then(weinfor=>{
  return  weinfor.json();
})
//show the weather info
.then(showtheweather)
}
function showtheweather(wee){
    console.log(wee);
    if(wee.cod=='404')
    {
        city.innerHTML=`--ERROR--`;
        temp.innerHTML=`-?-`;
        minmax.innerHTML=`Try Again!!!`
        info.innerHTML=' ';
        pic.innerHTML=`<img src="er.png" width="70x" height="90px"/>`;
        date.innerHTML=`Enter a Valid Name`;
        document.body.style.backgroundImage='url(https://t4.ftcdn.net/jpg/03/03/40/19/240_F_303401956_ufTeSp9EX62zQnJnbed9Q0kEgqaKKL44.jpg)'
        
    }
    else{
    let tdate=document.getElementById('date');
    let td=new Date();
    tdate.innerText=changedate(td);
   let city=document.getElementById('city');
    city.innerText=`${wee.name},${wee.sys.country}`;
    let tempo=document.getElementById('temp');
    tempo.innerHTML=`${Math.round(wee.main.temp)}&deg;C`
    let mt=document.getElementById('minmax');
    //mt.innerHTML=`${Math.floor(wee.main.temp_min)}&deg;C(min)/${Math.ceil(wee.main.temp_max)}&deg;C(max)`
    mt.innerHTML=`Feels like ${Math.round(wee.main.feels_like)}&deg;C`
    
    let wty=document.getElementById('info');
    wty.innerText=`${wee.weather[0].main}`;
    let ico=document.getElementById('pic');
    
  // ico.innerHTML=`<img src="${wee.weather[0].icon}.png"/ width="50x" height="70px">`;
   //document.querySelector('pic').src=`${wee.weather[0].icon}`;
    
    if(wty.textContent=='Clear')
    { ico.innerHTML=`<img src="cle.png"/ width="70x" height="90px">`;
        document.body.style.backgroundImage='url(https://imagevars.gulfnews.com/2019/04/14/NAT_190414_WEATHER-ARAMZAN-7-1555244160316_16a4505caf9_medium.jpg)'
    }
    if(wty.textContent=='Rain'){
        document.body.style.backgroundImage='url(http://www.hakahakionline.com/en/wp-content/uploads/2019/02/cloudy-weather.jpg)';
        ico.innerHTML=`<img src="rai.png"/ width="70x" height="90px">`;
    }
    if(wty.textContent=='Haze'){
        document.body.style.backgroundImage='url(haze.jpg)';
        ico.innerHTML=`<img src="50d.png"/ width="70x" height="90px">`;
       // document.getElementById('pic').style.backgroundImage='url(https://www.nicepng.com/png/detail/123-1236627_haze-icon-png-haze-weather-icon.png)';
    }
    if(wty.textContent=='Sunny'){
        document.body.style.backgroundImage='url(https://greaterjammu.com/wp-content/uploads/2021/03/Sunny-Weather.jpg)';
        ico.innerHTML=`<img src="sunn.gif"/ width="70x" height="90px">`;
    }
    if(wty.textContent=='Clouds'){
        document.body.style.backgroundImage='url(https://www.azernews.az/media/2017/08/09/cloudsa.jpg)';
        ico.innerHTML=`<img src="04n.png"/ width="70x" height="90px">`;
    }
    if(wty.textContent=='Smoke'){
        ico.innerHTML=`<img src="smooo.png"/ width="70x" height="90px">`;
        document.body.style.backgroundImage='url(https://mynorthwest.com/wp-content/uploads/2018/08/ap_5549d0b33ad545e8951d66cb47e9e4ac-2-1024x682-1.jpg)';
    }
    if(wty.textContent=='Storm'){
        document.body.style.backgroundImage='url(https://www.everbridge.com/wp-content/uploads/severe-weather-preparedness.jpg)';
    }
    if(wty.textContent=='ThunderStrom'){
        document.body.style.backgroundImage='url(https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/05/A-Ride-to-Rohtang-Pass-Thrill-beyond-Measure-Image-2-1.jpg)';
        ico.innerHTML=`<img src="thun.png"/ width="70x" height="90px">`;
    }
    if(wty.textContent=='Drizzle'){
        document.body.style.backgroundImage='url(https://www.wallpaperuse.com/wallp/44-443806_m.jpg)';
        ico.innerHTML=`<img src="drii.png"/ width="70x" height="90px">`;
    }

}

}
//manipulate the date
function changedate(dt)
{
    let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let months=['January','February','March','April','May','June','July','August','September','October','November','December'];
    let year=dt.getFullYear();
    let dat=dt.getDate();
    let mon=months[dt.getMonth()];
    let day=days[dt.getDay()];
    return `${dat} ${mon} ${day} ${year}`

}
const recived_data=[];
let lat="";
let lon="";
const API_Key="2a71ab111db231ab910e09ad7286c395";
const placeholder=document.getElementById("place");
const array=[];
//Geting Search value and fetch
GetLocalisation();


 function getdata(url) {

    fetch(url)
    .then(response=> response.json())
    .then(data =>{
      array.push(data);
      var speed=data['list'][0]['wind']['speed'];
      var feel=data['list'][0]['main']['feels_like'];
      var temp=data['list'][0]['main']['temp'];
      var humidity=data['list'][0]['main']['humidity'];
      var icon=data['list'][0]['weather'][0]['icon'];
      console.log("icons"+icon);
      
      console.log("temp"+temp +"spead "+ speed +"fels like"+feel);
      const date = new Date(data['list'][0]['dt_txt']);
      const date1 = new Date(data['list'][1]['dt_txt']);
      const date2 = new Date(data['list'][2]['dt_txt']);
      const date3 = new Date(data['list'][3]['dt_txt']);


// Extract only the hours
const hours = date.getHours();
const minutes = date.getMinutes();



    placeholder.innerHTML='';
      const info= ` <div class="col-sm-12 col-md-4">
                <div class="today ">
                 <section class="temp cards">
                 <div class="temp d-flex justify-content-between">
                    <h4> ${temp}</h4>
                   <h5>c°</h5>
                    <img class="p-1" src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="icons weather">
                 </div>
                 <div class="d-flex justify-content-between">
                    <h5>H: ${lat}</h5>
                    <h5>L: ${lon}</h5>
                 </div>
                 </section>

                 <section class="cards">
                       <h4 class="p-2">${data['city']['name']}</h4>
                        <h5 class="p-1">${data['list'][0]['weather'][0]['description']}</h5>
                       <h5 class="p-1">feels  like ${feel}</h5>
                       <h5 class="p-1">wind : ${speed} k/h</h5>
                       <h5 class="p-1" >humidity :${humidity} %</h5>

                    </section>
                </div>


             </div>
               <!-- search bar -->
             <div class=" col-sm-12 col-md-4" id="searchbar">
            
                 <input  id="search" "class="cards" type="text" placeholder="Search ..."> <button id="btn-search" class="d-inline-block btn-outline-light pt-1 pb-1 ps-2 pe-2 b rounded" type="button">Search</button>
            
                
              </div>
             
             <!-- now section  -->
             <div class="col-sm-12 col-md-4">
                <section class="cards">
                     <!-- titles -->
                      <div class="d-flex justify-content-between">
                     <h4>${data['city']['name']}</h4>
                     <h5>c°</h5>
                    </div>
                    <div class="today d-flex justify-content-between">
                     <!-- card now  -->
                     <section class="card">
                        <h4 class="p-2">${hours}:${minutes}0</h4>
                        <img class="p-1" src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="icons weather">
                        <h5 class="p-1 text-center">${temp}°</h5>
                     </section>

                     <section class="card ">
                        <h4 class="p-2">${date1.getHours()}:${date1.getMinutes()}0</h4>
                        <img class="p-1" src="https://openweathermap.org/img/wn/${data['list'][1]['weather'][0]['icon']}@2x.png" alt="icons weather">
                        <h5 class="p-1 ms-3 text-center">${data['list'][1]['main']['temp']}°</h5>
                     </section>

                     <section class="card">
                        <h4 class="p-2">${date2.getHours()}:${date1.getMinutes()}0</h4>
                        <img class="p-1" src="https://openweathermap.org/img/wn/${data['list'][2]['weather'][0]['icon']}@2x.png" alt="icons weather">
                        <h5 class="p-1 ms-3 text-center">${data['list'][2]['main']['temp']}°</h5>
                     </section>

                     <section class="card">
                        <h4 class="p-2">${date3.getHours()}:${date1.getMinutes()}0</h4>
                        <img class="p-1" src="https://openweathermap.org/img/wn/${data['list'][3]['weather'][0]['icon']}@2x.png" alt="icons weather">
                        <h5 class="p-1 ms-3 text-center">${data['list'][3]['main']['temp']}°</h5>
                     </section>
                
                </div>
                </section>
         
             </div>
             `
      placeholder.innerHTML=info;
      const weeks = `
    <section class="cards week-list mb-3">

                <div class="week  d-flex justify-content-between w-100">
                        <!-- card now  -->
                           <h4 class="p-2  ">Thursday</h4>
                           <img class="p-1" src="https://openweathermap.org/img/wn/${data['list'][0]['weather'][0]['icon']}@2x.png">
                           <h5 class="p-1 ms-3">${data['list'][0]['main']['temp']}°</h5>
                 </div>

                     <div class="week  d-flex justify-content-between w-100">
                        <!-- card now  -->
                           <h4 class="p-2 ps-4"> Friday </h4>
                           <img class="p-1" src="https://openweathermap.org/img/wn/${data['list'][6]['weather'][0]['icon']}@2x.png">
                           <h5 class="p-1 ms-3">${data['list'][6]['main']['temp']}°</h5>
                 </div>

                   <div class="week  d-flex justify-content-between w-100">
                        <!-- card now  -->
                           <h4 class="p-2">Saturday</h4>
                           <img class="p-1" src="https://openweathermap.org/img/wn/${data['list'][15]['weather'][0]['icon']}@2x.png">
                           <h5 class="p-1 ms-3">${data['list'][15]['main']['temp']}°</h5>
                 </div>

                   <div class="week  d-flex justify-content-between w-100">
                        <!-- card now  -->
                           <h4 class="p-2">Sanday</h4>
                           <img class="p-1" src="https://openweathermap.org/img/wn/${data['list'][24]['weather'][0]['icon']}@2x.png">
                           <h5 class="p-1 ms-3">${data['list'][24]['main']['temp']}°</h5>
                 </div>

                   <div class="week  d-flex justify-content-between w-100">
                        <!-- card now  -->
                           <h4 class="p-2">Monday</h4>
                           <img class="p-1" src="https://openweathermap.org/img/wn/${data['list'][31]['weather'][0]['icon']}@2x.png">
                           <h5 class="p-1 ms-3">${data['list'][31]['main']['temp']}°</h5>
                 </div>
                
           
                </section>
  `

  placeholder.insertAdjacentHTML("beforeend" ,weeks);


  document.getElementById("btn-search").addEventListener('click' , function(){
   Search();
});

      
    })
   //  .then(list =>{
   //    week(array)
   //    console.log(array)})
    .catch(error =>alert("Error"+error));

  

}

  


function GetLocalisation() {
   console.log("start local");
   

   if ("geolocation" in navigator) {
      /* geolocation is available */
      console.log("avilable");

      navigator.geolocation.getCurrentPosition((position) => {
         console.log("get position"+position.coords.latitude +""+position.coords.longitude);

         lat=position.coords.latitude;
         lon= position.coords.longitude;
         console.log("get position"+lat +""+lon);
           // start geting data from api 
         getdata(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`);

       });
       
    } else {
      /* geolocation IS NOT available */
      console.log("else");

    }

   
}


function Search(){
   console.log("search");
   
 document.getElementById("search").value.trim();
 console.log("city "+ document.getElementById("search").value.trim());
 
 getdata(`https://api.openweathermap.org/data/2.5/forecast?q=${document.getElementById("search").value.trim()}&appid=${API_Key}&units=metric`);

}



















const result= `
<div class="cards">
${recived_data}
</div>
`


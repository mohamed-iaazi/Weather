const recived_data=[];
let lat="32.3143078";
let lon="-6.9101911";
const API_Key="2a71ab111db231ab910e09ad7286c395";
const  link =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}`;



//Geting Search value and fetch

// start geting data from api 
getdata(link);

async function getdata(url) {
   // try {
   //     const response = await fetch(url); // Wait for the fetch to complete
   //     if (!response.ok) {
   //         throw new Error(`HTTP error! Status: ${response.status}`);
   //     }
   //     const data = await response.json(); // Wait for the JSON parsing
   //     recived_data.push(data); // Add the parsed data to recived_data array
   // } catch (error) {
   //     console.error("Error fetching data:", error);
   // }

   // localStorage.setItem("data",JSON.stringify(recived_data));
}




















function display(){
    const data= ` <div class="col-sm-12 col-md-4">
                <div class="today ">
                 <section class="temp cards">
                 <div class="temp d-flex justify-content-between">
                    <h4 >10</h4>
                    <h5>c°</h5>
                 </div>
                 <div class="d-flex justify-content-between">
                    <h5>H: 23</h5>
                    <h5>L:27</h5>
                 </div>
                 </section>

                 <section class="cards">
                       <h4 class="p-2">Beni Mellall</h4>
                       <h5 class="p-1">feels  like -2</h5>
                       <h5 class="p-1">wind : 23 k/h</h5>
                       <h5 class="p-1" >humidity :27%</h5>
                
                    </section>
                </div>


             </div>`
}


const result= `
<div class="cards">
${recived_data}
</div>
`

const now=`
   <!-- now section  -->
             <div class="col-sm-12 col-md-4">
                <section class="cards">
                     <!-- titles -->
                      <div class="d-flex justify-content-between">
                     <h4>Beni Mallalll</h4>
                     <h5>c°</h5>
                    </div>
                    <div class="today d-flex justify-content-between">
                        
                     <!-- card now  -->
                     <section class="card">
                        <h4 class="p-2">Now</h4>
                        <img class="p-1" src="./assets/rain.png">
                        <h5 class="p-1 ms-3">10°</h5>
                     </section>

                     <section class="card">
                        <h4 class="p-2">Now</h4>
                        <img class="p-1" src="./assets/rain.png">
                        <h5 class="p-1 ms-3">10°</h5>
                     </section>

                     <section class="card">
                        <h4 class="p-2">Now</h4>
                        <img class="p-1" src="./assets/rain.png">
                        <h5 class="p-1 ms-3">10°</h5>
                     </section>

                     <section class="card">
                        <h4 class="p-2">Now</h4>
                        <img class="p-1" src="./assets/rain.png">
                        <h5 class="p-1 ms-3">10°</h5>
                     </section>
                
                </div>



                </section>
              <section class="cards week-list mb-3">

                <div class="week  d-flex justify-content-between">
                        <!-- card now  -->
                           <h4 class="p-2">Today</h4>
                           <img class="p-1" src="./assets/rain.png">
                           <img class="p-1" src="./assets/rain.png">
                           <h5 class="p-1 ms-3">10°</h5>
                           <h5 class="p-1 ms-3">10°</h5>
                 </div>
                
           
                </section>


             </div>`
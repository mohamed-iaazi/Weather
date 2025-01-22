fetch("https://api.openweathermap.org/data/2.5/weather?lat=32.3143078&lon=-6.9101911&appid=2a71ab111db231ab910e09ad7286c395")
  .then(response => response.json()) // Ensure response.json() is called
  .then(data => {
    var speed = data['wind']['speed']; // Accessing wind speed correctly
    var feel = data['main']['feels_like']; // Accessing feels_like correctly
    var temp = data['main']['temp']; // Accessing temperature correctly
    console.log(`Wind Speed: ${speed}, Feels Like: ${feel}, Temperature: ${temp}`);
  })
  .catch(error => console.error('Error fetching data:', error)); // Catch errors

  
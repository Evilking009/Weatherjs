
async function getWeather(city) {
  if (city) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4f9f778866msh2d63fe61654e0fcp11feefjsnb884938ead14",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);

      if(!response.ok){
        throw Exception;
      }

      const resultjson = await response.text();
      const result = JSON.parse(resultjson);

      introText.innerHTML = "Weather For ";
      cityName.innerHTML = city;

      // Variables
      let varcloud_pct = result.cloud_pct;
      let vartemp = result.temp;
      let varfeels_like = result.feels_like;
      let varhumidity = result.humidity;
      let varmin_temp = result.min_temp;
      let varmax_temp = result.max_temp;
      let varwind_speed = result.wind_speed;
      let varwind_degrees = result.wind_degrees;

      // Assigning values in HTML
      temp.innerHTML = vartemp;
      temp2.innerHTML = vartemp;
      feels_like.innerHTML = varfeels_like;
      humidity.innerHTML = varhumidity;
      humidity2.innerHTML = varhumidity;
      min_temp.innerHTML = varmin_temp;
      max_temp.innerHTML = varmax_temp;
      wind_speed.innerHTML = varwind_speed;
      wind_speed2.innerHTML = varwind_speed;
      wind_degrees.innerHTML = varwind_degrees;

      sunriseDate = new Date(result.sunrise * 1000).toLocaleTimeString();
      sunsetDate = new Date(result.sunset * 1000).toLocaleTimeString();

      sunrise.innerHTML = sunriseDate;
      sunset.innerHTML = sunsetDate;

      previousData.innerHTML += `
    <tr>
    <th scope="row" class="text-start" style="text-transform: capitalize;">${city}</th>
    <td>${varcloud_pct}</td>
    <td>${vartemp}</td>
    <td>${varfeels_like}</td>
    <td>${varhumidity}</td>
    <td>${varmin_temp}</td>
    <td>${varmax_temp}</td>
    <td>${varwind_speed}</td>
    <td>${varwind_degrees}</td>
    <td class="text-nowrap">${sunriseDate}</td>
    <td class="text-nowrap">${sunsetDate}</td>
    </tr>
    `;
    } catch (error) {
      alert("Please Write Correctly");
    }
    
  } else {
    alert("Please Type your correct City/State/Country Name!");
  }
}

// Add Event Listeners
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(cityInput.value);
});

about.addEventListener("click", () => {
  alert("This App was made by Muzaffar Khan");
});

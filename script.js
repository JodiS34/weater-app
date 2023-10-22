 function formatDate(date) {
        let hours = date.getHours();
        if (hours < 10) {
          hours = `0${hours}`;
        }
        let minutes = date.getMinutes();
        if (minutes < 10) {
          minutes = `0${minutes}`;
        }

        let dayIndex = date.getDay();
        let days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        let day = days[dayIndex];

        return `${day} ${hours}:${minutes}`;
      }

      function search(event) {
        event.preventDefault();
        let cityElement = document.querySelector("#city");
        let cityInput = document.querySelector("#city-input");
        cityElement.innerHTML = cityInput.value;
      }
      function Current(event) {
        event.preventDefault();
        let cityElement = document.querySelector("#city");
        let cityInput = document.querySelector("#city-input");
        cityElement.innerHTML = cityInput.value;

      function convertToFahrenheit(event) {
        event.preventDefault();
        let temperatureElement = document.querySelector("#temperature");
        temperatureElement.innerHTML = 66;
      }

      function convertToCelsius(event) {
        event.preventDefault();
        let temperatureElement = document.querySelector("#temperature");
        temperatureElement.innerHTML = 19;
      }


      let dateElement = document.querySelector("#date");
      let currentTime = new Date();
      dateElement.innerHTML = formatDate(currentTime);


      let searchForm = document.querySelector("#search-form");
      searchForm.addEventListener("submit", search);


      let fahrenheitLink = document.querySelector("#fahrenheit-link");
      fahrenheitLink.addEventListener("click", convertToFahrenheit);

      let celsiusLink = document.querySelector("#celsius-link");
      celsiusLink.addEventListener("click", convertToCelsius);
      function retrievePosition(position) {
        console.log();
        let temperature = Math.round(response.data.main.temp);

        let heading = document.querySelector("h1");
        heading.innerHTML = `The outside temperature is ${temperature}°F`;
      }
      function retrievePosition(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let units = "metric";
        let apiKey = "85bbd3d16a2dfe0ecf253c7ae1e8fe03";
        let apiEndpoint =
          "https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}";
        let apiUrl = `${apiEndpoint}/lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

        axios.get(apiUrl).then(showTemperature);
      }
      navigator.geolocation.getCurrentPosition(retrievePosition);

      let button = document.querySelector("button");
      button.addEventListener("click", getCurrentPosition);

      function retrievePosition(position) {
        console.log();
        let temperature = Math.round(response.data.main.temp);

        let heading = document.querySelector("h1");
        heading.innerHTML = `The outside temperature is ${temperature}°F`;
      }

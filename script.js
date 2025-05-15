let key = "f68eeead0451edeb88050ccabb0c61c2";
        function search() {
            var input = document.getElementById("input").value;
            var loading = document.getElementById("loading");
            if (input == "") {
                alert("Please enter city name...");
                return false;
            }
            else if (input.length < 3) {
                alert("Please enter valid city name...");
            }
            else {
                loading.style.display = "block";
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&units=metric`).then((data) => {
                    return data.json();
                }).then((res) => {
                    if (res.cod == "404") {
                        document.getElementById("weather").innerHTML = "<span>Data not found</span>";
                        alert("Please enter valid city name...");
                    }
                    else {
                        document.getElementById("weather").innerHTML = `<div class="container2">
                <div class="icon"><img src="http://openweathermap.org/img/w/${res.weather[0].icon}.png" alt='Broken image'></div>
                <div class="text1">${res.weather[0].main}</div>
            </div>
            <div class="container3">
                <div class="text2">${res.name}</div>
                <div class="text3">${res.sys.country}
                </div>
            </div>
            <div class="container4">
                <div class="item1 a1">Temperature: ${res.main.temp} <sup>o</sup>C</div>
                <div class="item1 a2">Max-temp: ${res.main.temp_min} <sup>o</sup>C</div>
                <div class="item1 a3">Min-temp: ${res.main.temp_max} <sup>o</sup>C</div>
            </div>
            <div class="container5">
                <div class="item2">
                    <div class="content a"><i class="fa-solid fa-droplet"></i></div>
                    <div class="content b">${res.main.humidity}%</div>
                    <div class="content b">Humidity</div>
                </div>
                <div class="item2">
                    <div class="content a"><i class="fa-solid fa-wind"></i></div>
                    <div class="content b">${res.wind.speed} km/h</div>
                    <div class="content b">wind</div>
                </div>
            </div>`;
                    }
                    loading.style.display = "none";
                }).catch((err) => {
                    console.log("some thing went wrong.");
                })
            }
            document.getElementById("input").value="";
        }
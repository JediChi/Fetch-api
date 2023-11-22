function makeRequest() {
  const url = "https://syncventory-auth.nugitech.com/auth/login";
  const headers = {
    "Content-Type": "application/json",
    
    "X-Extra-Header-Info":
      '{"device":{"device_type":"Desktop","device_name":"My Computer","device_id": "2347","device_ip":"182.168.1.1"}}',
  };

  const data = {
    email: "adanmajedidiah@gmail.com",
    password: "String5$",
  };

  axios.post(url, data, { headers })
    .then((response) => {
        console.log(response);
      displayResult(response);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

    function displayResult(response) {
        const resultDiv = document.getElementById('result');
    
        if (response.ok) {
            response.headers.forEach((value, name) => {
                resultDiv.innerHTML += `<p><strong>${name}:</strong> ${value}</p>`;
            });
        } else {
            resultDiv.innerHTML = `<p>Error: ${response.status} - ${response.statusText}</p>`;
        }
    }
}

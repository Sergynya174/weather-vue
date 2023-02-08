const axios = require("axios");

const options = {
  method: "GET",
  url: "https://weatherapi-com.p.rapidapi.com/future.json",
  params: { q: "London", dt: "2022-12-25" },
  headers: {
    "X-RapidAPI-Key": "661616b231msh9b57c72786b102ep12deffjsncf48434c00de",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

export default options;

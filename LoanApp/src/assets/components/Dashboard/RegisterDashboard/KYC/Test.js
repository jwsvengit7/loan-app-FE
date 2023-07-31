

const url = "http://localhost:8083/api/profile/getDetails";
const headers = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJjZmVjYWVhNi1hYTNmLTQzNjEtYTFhYy1hYzdlZDUzZDE3OTQiLCJzdWIiOiJjaGlvcmx1amFja0BnbWFpbC5jb20iLCJpYXQiOjE2OTA4MjI1NzUsImV4cCI6MTc3MjAzMjE3NX0.090zPpg3xmDKpEeoq7LOD01hyXFdbQGPPtfq4z-jGos`,
  'Content-Type': 'application/json',
};

const options = {
  method: 'GET',
  headers: headers,
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

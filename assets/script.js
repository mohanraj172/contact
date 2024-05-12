
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.then(data => {
    localStorage.setItem('fetchedData', JSON.stringify(data));
    displayData(data);
   
})
.catch(error => console.error('Error fetching data:', error));

function displayData(data) {
    console.log(data);
}

const storedData = localStorage.getItem('fetchedData');
if (storedData) {
    const parsedData = JSON.parse(storedData);
    displayData(parsedData);
}
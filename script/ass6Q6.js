fetch("https://official-joke-api.appspot.com/random_joke")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))


fetchData();

async function fetchData(){
    try {
       const response = await fetch("https://dog.ceo/api/breeds/image/random")

       if(!response.ok){
        throw new Error("Could not fetch resources");
       }

       const data = await response.json();
       console.log(data);

    } catch (error) {
        console.error(error);
    }
}
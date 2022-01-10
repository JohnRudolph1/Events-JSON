
// api url 
const api_url =  

       
      "https://www.facebook.com/api/graphql/"
  
// Defining async function 

async function getapi(url) { 

    

    // Storing response 

    const response = await fetch(url); 

    

    // Storing data in form of JSON 

    var data = await response.json(); 

    console.log(data); 

    if (response) { 

        hideloader(); 

    } 

    show(data); 
} 
// Calling that async function 
getapi(api_url); 

  
// Function to hide the loader 

function hideloader() { 

    document.getElementById('loading').style.display = 'none'; 
} 
// Function to define innerHTML for HTML table 

function show(data) { 

    let tab =  

        `<tr> 

          <th>uri</th>

          <th>day_time_sentence/th> 

          <th>contextual_name</th> 

          <th>eventUrl</th> 

         

         </tr>`; 

    

    // Loop to access all rows  

    for (let r of data.list) { 

        tab += `<tr>  

    <td>${r.uri} </td> 

    <td>${r.day_time_sentence}</td> 

    <td>${r.contextual_name}</td>  

    <td>${r.eventUrl}</td>           
</tr>`; 

    } 

    // Setting innerHTML as tab variable 

    document.getElementById("node").innerHTML = tab; 
} 




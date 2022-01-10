
// // api url 
// const api_url =  

       
//       "https://www.facebook.com/api/graphql/"
  
// // Defining async function 

// async function getapi(url) { 

    

//     // Storing response 

//     const response = await fetch(url); 

    

//     // Storing data in form of JSON 

//     var data = await response.json(); 

//     console.log(data); 

//     if (response) { 

//         hideloader(); 

//     } 

//     show(data); 
// } 
// // Calling that async function 
// getapi(api_url); 

  
// // Function to hide the loader 

// function hideloader() { 

//     document.getElementById('loading').style.display = 'none'; 
// } 
// // Function to define innerHTML for HTML table 

// function show(data) { 

//     let tab =  

//         `<tr> 

//           <th>uri</th>

//           <th>day_time_sentence/th> 

//           <th>contextual_name</th> 

//           <th>eventUrl</th> 

         

//          </tr>`; 

    

//     // Loop to access all rows  

//     for (let r of data.list) { 

//         tab += `<tr>  

//     <td>${r.uri} </td> 

//     <td>${r.day_time_sentence}</td> 

//     <td>${r.contextual_name}</td>  

//     <td>${r.eventUrl}</td>           
// </tr>`; 

//     } 

//     // Setting innerHTML as tab variable 

//     document.getElementById("node").innerHTML = tab; 
// } 






const readline = require('readline');
const fs = require('fs');

let res = {};

function processLine(line) {
  const {id, __parentId} = line;

  // if there is no `__parentId`, this is a parent
  if (typeof __parentId === 'undefined') {
    res[line.id] = {
      id,
      childrens: []
    };
    return res;
  }
  
  // this is a child, create its parent if necessary
  if (typeof res[__parentId] === 'undefined') {
    res[__parentId] = {
      id: __parentId,
      childrens: []
    }
  }
  
  // add child to parent's children
  res[__parentId].childrens.push(line);
  return res;
}

const readInterface = readline.createInterface({
    input: fs.createReadStream('large.jsonl'),
    output: process.stdout,
    console: false
});

readInterface.on('line', processLine);

readInterface.on('close', function() {
    const resultArray = Object.values(res);
    console.log(resultArray);
});
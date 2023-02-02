// local storage is stored on the window object of the browser

let siteName = 'My Site';
// it takes key value pair

//to set data 
localStorage.setItem('siteName' , siteName)
localStorage.setItem('siteName2' , 'new site')

//to get data
console.log(localStorage.getItem("siteName"));

//to remove data
// localStorage.removeItem('siteName2')

//to remove all data
// localStorage.clear()

// to store object in local storage
const user = {
    name: 'Prashant',
    age: 21,
};
localStorage.setItem("User-info1",user); 
// this will store data as [object object] string]

// To store it in objectformat use stringify
localStorage.setItem("User-info",JSON.stringify(user)); 


//to get data 
console.log(localStorage.getItem("User-info"));
console.log(typeof(localStorage.getItem("User-info"))); //String

// to get as object
console.log(JSON.parse(localStorage.getItem("User-info")));
console.log(typeof(JSON.parse(localStorage.getItem("User-info"))));


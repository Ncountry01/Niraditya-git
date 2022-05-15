/**first */
const myElements = document.getElementById("h3");
document.getElementById("h4").innerHTML= "The text from javascript the id one paragraph is : "+ myElements.innerHTML;

/**Finding elements by Tag name */

const item = document.getElementsByTagName("h3");
document.getElementById("h5").innerHTML= "The text Is from Javascript "+ item[0].innerHTML;

/**Query Selectors */

const data = document.querySelectorAll("h3.query")
document.getElementById("h7").innerHTML= "The first paragraph with querry Selectors " + data[0].innerHTML;
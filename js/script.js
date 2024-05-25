function reqListener() {
    const countrys = (JSON.parse(this.responseText));
    
  //(b) population less than 200000 :
  
       function num(country){
        return (country.population<200000);
     }
       console.log(countrys.filter(num));
  
 
//(a)Finding the asia continent :

   // function num(country){
    //return (country.region == "Asia");
  // }
  // console.log(countrys.filter(num));

//(e)finding currencies of the country 

   // function money(country){
       //return (country.currencies);
  //  }
   //console.log(countrys.filter(money));


//(c)using for each loop :

     //countrys.forEach(country => console.log(country.name.common));
      //countrys.forEach(country => console.log(country.capital));
     //countrys.forEach(country => console.log(country.flags.png));


//(d) total population of countries :

//let sum = function(acc,values){
  //  return acc+values.population;
//}

//console.log(countrys.reduce(sum,0));
  


   

}


   
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  
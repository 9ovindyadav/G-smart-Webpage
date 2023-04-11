const url = "https://type.fit/api/quotes";
const para = document.getElementById("para");

const fetchData = ()=>{

    fetch(url).then((response)=> response.json()).then((data)=>{
        const jsonData = JSON.stringify(data);

        const result = JSON.parse(jsonData);
       
        const ranNum = Math.floor(Math.random()*1000);

        para.innerText = result[ranNum].text ;
       
     
     });
};

fetchData();

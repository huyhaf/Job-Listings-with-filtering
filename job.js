const jobelement=document.querySelectorAll('#Tec1');
const skillelement=document.querySelectorAll('#Tec');


const jobsearch=document.querySelector('#jobsearch');
const skillsearch=document.querySelector('#skillsearch');

let jobresult="",skillresult="";

jobsearch.addEventListener("keyup",() => {  // filtering the job
    jobresult=jobsearch.value.trim();
    jobresult=jobresult.toLowerCase(); // The searching result in lowercase

    jobelement.forEach(function (e){    
        let tmp1=e.innerHTML.toLowerCase();

        if(tmp1.includes(jobresult)){
            e.parentElement.style.display="block";
        }
        else{
            e.parentElement.style.display="none";
        }

    });
});

skillsearch.addEventListener("keyup", ()=>{
    skillresult=skillsearch.value.trim();
    skillresult=skillresult.toLowerCase(); // The searching result in lowercase

    skillelement.forEach(function (e){    
        let tmp2=e.innerHTML.toLowerCase();

        if(tmp2.includes(skillresult)){
            e.parentElement.style.display="block";
        }
        else{
            e.parentElement.style.display="none";
        }
    });
});



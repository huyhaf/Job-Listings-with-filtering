const jobelement=document.querySelectorAll('#Tec1');
const jobselement=document.querySelectorAll('#Job');


const jobsearch=document.querySelector('#jobsearch');
const skillsearch=document.querySelector('#skillsearch');

let jobresult="",skillresult="";
let searched = new Set();   // the variable record the job finded after the job searching

jobsearch.addEventListener("keyup",() => {  // filtering the job
    jobresult=jobsearch.value.trim();
    jobresult=jobresult.toLowerCase(); // The searching result in lowercase

    for(var i =0 ;i<jobelement.length;i++){
        let tmp1=jobelement[i].innerHTML.toLowerCase();

        if(tmp1.includes(jobresult)){
            jobelement[i].parentElement.style.display="block";
            searched.add(i);
        }
        else{
            jobelement[i].parentElement.style.display="none";
        }
    }
});

skillsearch.addEventListener("keyup", ()=>{
    skillresult=skillsearch.value.trim();
    skillresult=skillresult.toLowerCase(); // The searching result in lowercase

    for(var i=0;i<jobelement.length;i++){
        if(searched.has(i)){ // if the tag appears after the job filtering
            var len=jobelement[i].children.length;
            var check=false;

            for(var j=0;j<len;j++){
                let tmp2=jobelement[i].children[j].innerHTML;
                tmp2=tmp2.toLowerCase();

                if(tmp2.includes(skillresult)){
                    check=true;
                    jobelement[i].style.display="block";
                }
            }
            if(!check){
                jobelement[i].style.display="none";
            }
        }
    };
});
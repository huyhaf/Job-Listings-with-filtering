const typeelement=document.querySelectorAll('#Tec1');
const jobselement=document.querySelectorAll('#Job');
const nonavail=document.querySelector('#Noneavailble')

const jobsearch=document.querySelector('#jobsearch');
const skillsearch=document.querySelector('#skillsearch');

let jobresult="",skillresult="";
let searched = new Set();   // the variable record the job finded after the job searching
var check;
function availble(){
    check=false;
    for (let i = 0; i < jobselement.length; i++) {
        if(jobselement[i].style.display=="block"){
            check=true;
            return check;
        }
    }
    return check;
}

jobsearch.addEventListener("keyup",() => {  // filtering the job
    jobresult=jobsearch.value.trim();
    jobresult=jobresult.toLowerCase(); // The searching result in lowercase
    searched.clear();

    for(var i =0 ;i<typeelement.length;i++){
        let tmp1=typeelement[i].innerHTML.toLowerCase();

        if(tmp1.includes(jobresult)){
            typeelement[i].parentElement.style.display="block";
            searched.add(i);
        }
        else{
            typeelement[i].parentElement.style.display="none";
        }
    }
    if(!availble()) nonavail.style.display="block";
    else nonavail.style.display="none";
});

skillsearch.addEventListener("keyup", ()=>{
    skillresult=skillsearch.value.trim();
    skillresult=skillresult.toLowerCase(); // The searching result in lowercase

    for(var i=0;i<jobselement.length;i++){
        if(searched.has(i)){ // if the tag appears after the job filtering
            let len=jobselement[i].children.length;
            let check=false;

            for(var j=1;j<len;j++){
                let tmp2=jobselement[i].children[j].innerHTML;
                tmp2=tmp2.toLowerCase();

                if(tmp2.includes(skillresult)){
                    check=true;
                    jobselement[i].style.display="block";
                }
            }
            if(!check){
                jobselement[i].style.display="none";
            }
        }
    }
    if(!availble()) nonavail.style.display="block";
    else nonavail.style.display="none";
});


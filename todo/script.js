const inputBox = document.getElementById("input-text");
const listContainer = document.getElementById("details");
const timeshow = document.getElementById("date");
var time = new Date();


function addTask(){
    if(inputBox.value === ''){
        alert("You must write a task!!");

    }
    else{
        let li=document.createElement("li");
        li.classList.add("input-elements");
        li.setAttribute("id","list");
       


        let inp=document.createElement("input");
        inp.setAttribute("id","input-value");
        
        inp.setAttribute("readonly", "readonly");
        inp.type="text"
        inp.value=inputBox.value;
        li.appendChild(inp);
        listContainer.appendChild(li);

        
        
        
        let edit=document.createElement("i");
        edit.classList.add("fa", "fa-edit","editicon");
        li.appendChild(edit);
        let delet=document.createElement("i");
        delet.classList.add("fa" ,"fa-trash");
        li.appendChild(delet);
        
        
        
      
       
        
        let timenow=  time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        
        let li2=document.createElement("li");
        li2.innerHTML=timenow;
        timeshow.appendChild(li2);
        
        inputBox.value=""
        edit.addEventListener('click',()=>{
            if(edit.classList.contains("fa-edit")){

                inp.removeAttribute("readonly");
                inp.focus();
                edit.classList.replace("fa-edit","fa-save");
            }
            else{
                inp.setAttribute("readonly", "readonly");
                edit.classList.replace("fa-save","fa-edit");
            }
        })
        delet.addEventListener('click',()=>{
            listContainer.removeChild(li);
            timeshow.removeChild(li2);
        })
          

    }
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        // const lis=document.getElementById("")
        e.target.classList.toggle("checked");
        const check = document.getElementById("input-value");
        check.classList.toggle("checked");
        const date2 = document.getElementById("date");
        date2.classList.toggle("checked");
        saveData();
    }
       
},false);
// function saveData(){
//     localStorage.setItem("data",inp.innerHTML);
// }
// function showTask(){
//     listContainer.innerHTML=localStorage.getItem("data");
// }
// showTask();


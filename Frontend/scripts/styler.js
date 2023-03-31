const time_btn=document.querySelector("#time_picker");

time_btn.addEventListener("submit",(event)=>{
    event.preventDefault();
    let obj={};
    obj["date"]=document.querySelector("#date").value;
    obj["time"]=document.querySelector("#time").value;
    console.log(obj);
})
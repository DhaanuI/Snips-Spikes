let fetAllStylerFn=async()=>{
    try {
        let req=await fetch("http://localhost:7005/stylist/styler",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        });
        if(req.ok){
            let allData=await req.json();
            renderStylerFunction(allData);
        }else{
            alert("Unable to Load the Data");
        }
    } catch (error) {
        console.log(error.message);
        alert("Unable to Load the Data");
    }
}

window.onload=fetAllStylerFn();

let renderStylerFunction=(allData)=>{
    console.log(allData);
    let displayContainer=document.getElementById("styler_grid");
    displayContainer.innerHTML=null;
    let stylerArr=allData.map((item)=>{
        return`<div class="styler_card">
                <img class="styler_img" width="100%"
                    src=${item.image}
                    alt=${item.name+item._id}>
                <div class="styler_name">${item.name}</div>
                <button class="appointment_btn" data-id=${item._id}>Book Appointment</button>
            </div>`;
    })
    displayContainer.innerHTML=stylerArr.join("");

    let all_appointment_btns=document.querySelectorAll(".appointment_btn");
    for(let appointment_btn of all_appointment_btns){
        appointment_btn.addEventListener("click",(event)=>{
            let stylerid=event.target.dataset.id;
            console.log(stylerid);
        })
    }
}




const time_btn=document.querySelector("#time_picker");

time_btn.addEventListener("submit",(event)=>{
    event.preventDefault();
    let obj={};
    obj["date"]=document.querySelector("#date").value;
    obj["time"]=document.querySelector("#time").value;
    console.log(obj);
})
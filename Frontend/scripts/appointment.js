let userdata=JSON.parse(localStorage.getItem("userdata"));
window.onload=fetAllStylerFn(userdata.userid);

async function fetAllStylerFn(userid){
    try {
        let req=await fetch("http://localhost:8080/appointments/appointment",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        });
        if(req.ok){
            let allData=await req.json();
            let newData=allData.filter((item)=>item.userid===userid);
            renderAppointmentFunction(newData);
        }else{
            alert("Unable to Load the Data");
        }
    } catch (error) {
        console.log(error.message);
        alert("Unable to Load the Data");
    }
}



async function renderAppointmentFunction(data){
    let displayContainer=document.getElementById("appointment_grid");
    displayContainer.innerHTML=null;
    let appointmentArr=data.map((item)=>{
        return`<div class="appointment_card">
        <div class="service_name">${item.service_name}</div>
        <div class="service_des">
        ${item.service_des}
        </div>
        <div class="appointment_styler">Styler Name : ${"Jishnu"}</div>
        <div class="appointment_date">Appointment Date : ${item.date}</div>
        <div class="appointment_time">Appointment Time : ${item.time}</div>
        <button class="cancel_btn" data-id=${item._id}>cancel</button>
    </div>`;
    })
    displayContainer.innerHTML=appointmentArr.join("");
}



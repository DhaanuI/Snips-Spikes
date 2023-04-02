let userdata=JSON.parse(localStorage.getItem("userdata"));
window.onload=fetAllAppointmentFn(userdata.userid);

async function fetAllAppointmentFn(userid){
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
        <div class="appointment_styler"></div>
        <div class="appointment_date">Appointment Date : ${item.date}</div>
        <div class="appointment_time">Appointment Time : ${item.time}</div>
        <button class="cancel_btn" data-id=${item._id}>cancel</button>
    </div>`;
    })
    displayContainer.innerHTML=appointmentArr.join("");
    let all_cancel_btns=document.querySelectorAll(".cancel_btn");
    for(let cancel_btn of all_cancel_btns){
        cancel_btn.addEventListener("click",(event)=>{
            let id=event.target.dataset.id;
            deleteAppointmentFunction(id);
        })
    } 
}


async function deleteAppointmentFunction(id){
    try {
        let delete_req=await fetch(`http://localhost:8080/appointments/appointment/delete/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })
        if(delete_req.ok){
            alert("Appointment is successfully canceled");
            fetAllAppointmentFn(userdata.userid);
        }else{
            alert("Unable to cancel the appointment!");
        }
    } catch (error) {
        console.log(error.message);
        alert("Unable to cancel the appointment!");
    }
}

<p  align="center">
<img src="https://user-images.githubusercontent.com/106810850/229245859-a25d1ba5-34ac-4aff-8897-01edf9c7d41f.jpg" alt="Image" style="width: 20%; border-radius:50%">
</p>

## Project Code :  
   > military-waste-5460

## Project Name : 
   > Snips & Spikes

<br>

## Warning :  useCamelCase  



  
<br>

# What are the requirements ?

- User can login and sign up
    - OTP will be sent by nodmailer
- User can login with google account
- User can visit pages 
- User can see services 
- User can book services / appointments and pay
    - User can view appointment 
    - User rescheduled apointments
    - User can cancel appointment
    - User can book the appointment for someone else.
    - User can give feedback on appointment
    - User can see account details / update them / get previous appointment  
    - User will be notified confirmationi email 
- Real time chat support
- Feedback 
- Logout 



# Tech stack 

### Frontend 

- Bootstrap / HTML / CSS / JavaScript / SweeperJS 

### Backend 
 
- NodeJS 
- ExpressJS

- Database : MongoDB, MySQL 



# Schema : 

- user 
     - name
     - email
     - image
     - password
     - gender 
     - appointments = [];

- stylist 
     - name 
     - email 
     - salary
     - image 
     - available : true/false / default : true;
     - occupied_timeSlot : sloteId 


- services 

    - service_name 
    - service_image
    - service_price
    - service_description
    - service_category 
    - service_by_gender



- Slots 
     - id
     - start time
     - end time
     - stylistId
     - available
     - slotId  


- appointments 
    - id 
    - stylistId
    - userID
    - serviceId


## 
<br>

# API Endpoints 
----
<br>

## `Services`
<br>   

- Male Services
                
        GET -    /services/male 
        POST -   /services/male/addMaleService
        PATCH -  /services/male/update/:id
        DELETE - /services/male/delete/:id

- Female Services

        GET -    /services/female 
        POST -   /services/female/addFemaleService
        PATCH -  /services/female/update/:id
        DELETE - /services/female/delete/:id
        Get single products - http://localhost:8080/services/female/


<br>

## `Stylist`
<br>   

- Stylers 
                
        GET -    /stylist/styler 
        POST -   /stylist/styler/addStylistService
        PATCH -  /stylist/styler/update/:id
        DELETE - /stylist/styler/delete/:id

# Additional 
- we can give home services



![snips spikes drawio (1)](https://user-images.githubusercontent.com/87657007/228304975-dc21afa6-a2bb-407a-bcd0-fbd1d1baa52c.png)


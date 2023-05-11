<p  align="center">
<img src="https://user-images.githubusercontent.com/106810850/229245859-a25d1ba5-34ac-4aff-8897-01edf9c7d41f.jpg" alt="Image" style="width: 20%; border-radius:50%">
</p>

## Project Code :  
   ```
    military-waste-5460
   ```

## Project Name : 
   ```
   Snips & Spikes
   ```

<br>

## Deployed Link :

   - Frontend - https://snipsandspikes.netlify.app/
   - Backend  - https://hair-salon-backend.onrender.com


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
     - password

- stylist 
     - name 
     - email 
     - salary
     - image

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
    - stylerid
    - userID
    - serviceId
    - date,
    - time,
    - service_name,
    - service_des,
    - styler_name


## 
<br>

# API Endpoints 
----
<br>

## `Services`
<br>   

- Male Services
                
        GET    -   /services/male 
        POST   -   /services/male/addMaleService
        PATCH  -   /services/male/update/:id
        DELETE -   /services/male/delete/:id

- Female Services

        GET    -   /services/female 
        GET    -   /services/female/female/:id 
        POST   -   /services/female/addFemaleService
        PATCH  -   /services/female/update/:id
        DELETE -   /services/female/delete/:id


<br>

## `Stylist`
<br>   

- Stylers 
                
        GET    -   /stylist/styler 
        POST   -   /stylist/styler/addStylistService
        PATCH  -   /stylist/styler/update/:id
        DELETE -   /stylist/styler/delete/:id


<br>

## `Appointment`
<br>   

- Appointment 
                
        GET    -   /appointments/appointment
        POST   -   /appointments/appointment/add
        PATCH  -   /appointments/appointment/update/:id
        DELETE -   /appointments/appointment/delete/:id

# Additional 
- we can give home services



![snips spikes drawio (1)](https://user-images.githubusercontent.com/87657007/228304975-dc21afa6-a2bb-407a-bcd0-fbd1d1baa52c.png)

# screenshots

![Screenshot (572)](https://user-images.githubusercontent.com/87657007/230887457-e7d94561-9b0e-4a47-9a83-cae79ae561b1.png)
![Screenshot (574)](https://user-images.githubusercontent.com/87657007/230887473-4ad81427-a907-408a-a6ba-53846b06e6ba.png)
![Screenshot (575)](https://user-images.githubusercontent.com/87657007/230887479-1c74c055-4256-4abf-a12f-f2e04b765c25.png)
![Screenshot (576)](https://user-images.githubusercontent.com/87657007/230887490-b548760e-f5d9-4a1b-838a-f30f595b6928.png)
![Screenshot (577)](https://user-images.githubusercontent.com/87657007/230896989-737da941-7023-4439-bf72-58f065c09a5e.png)


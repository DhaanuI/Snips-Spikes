
document.getElementById('renderMaleservice').style.display = 'none';
document.getElementById('renderFemaleservice').style.display = 'none';
document.getElementById('renderStylists').style.display = 'none';


let maleServices = document.getElementById("male");
maleServices.addEventListener("click", callMale);

let femaleServices = document.getElementById("female");
femaleServices.addEventListener("click", callFemale);

let stylists = document.getElementById("stylists");
stylists.addEventListener("click", callStylists);


async function callMale() {
    // let response = await fetch(url)
    // let data = await response.json()
    document.getElementById('renderMaleservice').style.display = 'block';
    document.getElementById('renderFemaleservice').style.display = 'none';
    document.getElementById('renderStylists').style.display = 'none';

    document.getElementById('threedivs').style.display = 'flex';
    document.getElementById("threedivs").style.flexDirection = "column";
    document.getElementById("male").style.width = "auto";
    document.getElementById("female").style.width = "auto";
    document.getElementById("stylists").style.width = "auto";
    document.getElementById("threedivs").style.width = "35%";
    document.getElementById("threedivs").style.marginLeft = "10px";


    maleServices.classList.toggle("active");

    femaleServices.classList.remove("active");
    stylists.classList.remove("active");
    //  renderMale(data);
}

async function callFemale() {
    // let response = await fetch(url)
    // let data = await response.json()
    document.getElementById('renderMaleservice').style.display = 'none';
    document.getElementById('renderFemaleservice').style.display = 'block';
    document.getElementById('renderStylists').style.display = 'none';
    document.getElementById('threedivs').style.display = 'flex';
    document.getElementById("threedivs").style.flexDirection = "column";

    document.getElementById("threedivs").style.width = "35%";

    document.getElementById("male").style.width = "auto";
    document.getElementById("female").style.width = "auto";
    document.getElementById("stylists").style.width = "auto";
    document.getElementById("threedivs").style.marginLeft = "10px";

    maleServices.classList.remove("active");

    femaleServices.classList.toggle("active");

    stylists.classList.remove("active");
    //  renderFemale(data);
}

async function callStylists() {
    // let response = await fetch(url)
    // let data = await response.json()
    document.getElementById('renderMaleservice').style.display = 'none';
    document.getElementById('renderFemaleservice').style.display = 'none';
    document.getElementById('renderStylists').style.display = 'block';
    document.getElementById('threedivs').style.display = 'flex';
    document.getElementById("threedivs").style.flexDirection = "column";
    document.getElementById("male").style.width = "auto";
    document.getElementById("female").style.width = "auto";
    document.getElementById("stylists").style.width = "auto";
    document.getElementById("threedivs").style.width = "35%";
    document.getElementById("threedivs").style.marginLeft = "10px";

    maleServices.classList.remove("active");
    femaleServices.classList.remove("active");

    stylists.classList.toggle("active");
    // renderStylists(data);
}


function renderMale(data) {
    data.forEach((item) => {
        let div = document.createElement("div")
        div.setAttribute("class", "card")

        let name = document.createElement("h1")
        name.innerText = item.service_name;
        let des = document.createElement("p")
        des.innerText = item.service_desc;
        let image = document.createElement("img");
        img.src = item.img;
        let cost = document.createElement("p")
        cost.innerText = item.service_price;

        let edit = document.createElement("button")
        edit.innerText = "Edit";
        edit.setAttribute("class", "edit-button")

        let del = document.createElement("button")
        del.innerText = "Delete";

        div.append(image, name, des, cost, edit, del);
        maleServices.append(div)
    })

}

function renderFeale(data) {
    data.forEach((item) => {
        let div = document.createElement("div")

        let name = document.createElement("h1")
        name.innerText = item.service_name;
        let des = document.createElement("p")
        des.innerText = item.service_desc;
        let image = document.createElement("img");
        img.src = item.img;
        let cost = document.createElement("p")
        cost.innerText = item.service_price;

        let edit = document.createElement("button")
        edit.innerText = "Edit";

        let del = document.createElement("button")
        del.innerText = "Delete";

        div.append(image, name, des, cost, edit, del);
        femaleServices.append(div)
    })

}

function renderStylists(data) {
    data.forEach((item) => {
        let div = document.createElement("div")

        let name = document.createElement("h1")
        name.innerText = item.name;
        let email = document.createElement("p")
        email.innerText = item.email;
        let image = document.createElement("img");
        img.src = item.img;
        let phone = document.createElement("p")
        phone.innerText = item.phone;
        let availability = document.createElement("div")
        item.availabilitySlots.forEach((i) => {
            let time = document.createElement("p")
            time.innerText = item.i;
            availability.append(time);
        })

        let edit = document.createElement("button")
        edit.innerText = "Edit";

        let del = document.createElement("button")
        del.innerText = "Delete";

        div.append(image, name, email, phone, availability, edit, del);
        femaleServices.append(div)
    })

}


const editButtons = document.querySelectorAll('.edit-button');

editButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.card');
        const cardContent = card.querySelector('h3').textContent;
        const cardPrice = card.querySelector('h5').textContent;
        const cardTitle = card.querySelector('h1').textContent;

        const modal = document.createElement('div');
        modal.classList.add('modal');

        const form = document.createElement('form');
        form.classList.add('edit-form');
        modal.appendChild(form);

        // const imageLabel = document.createElement('label');
        // imageLabel.textContent = 'Image URL:';
        // form.appendChild(imageLabel);

        // const imageInput = document.createElement('input');
        // imageInput.setAttribute('type', 'url');
        // imageInput.setAttribute('value', cardImage);
        // form.appendChild(imageInput);

        const titleLabel = document.createElement('label');
        titleLabel.textContent = 'Title:';
        form.appendChild(titleLabel);

        const titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('value', cardTitle);
        form.appendChild(titleInput);

        const label = document.createElement('label');
        label.textContent = 'Edit card content:';
        form.appendChild(label);

        const textarea = document.createElement('textarea');
        textarea.value = cardContent;
        form.appendChild(textarea);


        const priceLabel = document.createElement('label');
        priceLabel.textContent = 'Price:';
        form.appendChild(priceLabel);

        const priceInput = document.createElement('input');
        priceInput.setAttribute('type', 'text');
        priceInput.setAttribute('value', cardPrice);
        form.appendChild(priceInput);

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        form.appendChild(saveButton);

        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        modal.appendChild(closeButton);

        card.appendChild(modal);

        titleInput.focus(); // Give focus to titleInput element

        saveButton.addEventListener('click', async (event) => {
            event.preventDefault();

            const formData = {
                // image: imageInput.value,
                title: titleInput.value,
                price: priceInput.value,
                content: textarea.value
            };

            Swal.fire({
                title: 'Are you sure?',
                // text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Edit it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the PATCH request
                    fetch('/api/{id}', {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formData)
                    })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return response.json();
                        })
                        .then(data => {
                            console.log(data); // log the response from the server
                            Swal.fire(
                                'Modified!',
                                'Service has been modified.',
                                'success'
                            );

                            card.querySelector('h1').textContent = formData.title
                            card.querySelector('h3').textContent = formData.content
                            card.querySelector('h5').textContent = formData.price;
                        })
                        .catch(error => {
                            console.error('There was a problem with the PATCH request:', error);
                            Swal.fire(
                                'Error!',
                                'There was a problem with the PATCH request.',
                                'error'
                            );
                        });
                }
            });


            modal.remove();
        });
        closeButton.addEventListener('click', () => {
            modal.remove();
        });
    });
});



let productName = document.getElementById("productName");
let productPrice = document.getElementById("productPrice");
let addBtn = document.getElementById("addBtn");
let tableBody = document.getElementById("tableBody");
let editHeading = document.getElementById("editHeading");
let status = document.getElementsByName('status');
let index = 1;
let toggle = 0;
let eid = 0;
let delid = 0;


const handleProductName = (e) => {
    let value = e.target.value;
    console.log(value)
    if (productName.value.replace(/\s/g, '').length >= 1) {
        productName.classList.add('is-valid');
        productName.classList.remove('is-invalid');
        document.getElementById('nameErr').innerHTML = ""

    }
    else {
        productName.classList.add('is-invalid');
        productName.classList.remove('is-valid');
        document.getElementById('nameErr').innerHTML = "Enter atleast 10 Characters";
    }
    if (productName.value.replace(/\s/g, '').length >= 1 && productPrice.value.length <= 6 && productPrice.value.length != 0) {
        addBtn.disabled = false;
    }
    else {
        addBtn.disabled = true;
    }
}

const handleProductPrice = (e) => {
    let val = e.target.value;

    if (val.length > 6 || val.length == 0) {
        productPrice.classList.add('is-invalid');
        productPrice.classList.remove('is-valid');
        document.getElementById('priceErr').innerHTML = "Please enter the price";
    }
    else {
        productPrice.classList.add('is-valid');
        productPrice.classList.remove('is-invalid');
        document.getElementById('priceErr').innerHTML = "";
    }

    if (productName.value.replace(/\s/g, '').length >= 1 && productPrice.value.length <= 6 && productPrice.value.length != 0) {
        addBtn.disabled = false;
    }
    else {
        addBtn.disabled = true;
    }
}

productName.addEventListener('input', handleProductName)
productName.addEventListener('blur', handleProductName)
productPrice.addEventListener('input', handleProductPrice)
productPrice.addEventListener('blur', handleProductPrice)

addBtn.addEventListener("click", (e) => {




    setTimeout(() => {
        document.getElementById('liveToast').classList.remove('show');
    }, 2000);

    if (productName.value.replace(/\s/g, '').length >= 1 && productPrice.value.length <= 6) {

        let loading = document.getElementById('loading');
        loading.innerText = "Loading. . .";

        loading.innerText = "";

        let pprice = parseInt(productPrice.value).toLocaleString('en-IN', {
            style: "currency",
            currency: "INR"
        });

        if (toggle == 0) {


            let html = `<tr id="row${index}">
            <td class="text-center">${index}</td>
            <td id="name${index}">${productName.value}</td>
            <td id="price${index}" style="text-align: right;">${pprice}</td>
            <td id="radio${index}" class="text-center">${status[0].value}</td>
            <td id="actions${index}" class="d-flex"><button type="button" class="btn btn-outline-primary"  id='${index}' onclick="handleEdit(this.id)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
          </svg></button> <button type="button" class="btn btn-outline-danger mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal" id="deleteBtn${index}" style="display: none;" onclick="handleDel(${index})" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
        </svg></button></td>
            </tr>`;
            tableBody.innerHTML += html;
            document.getElementById('liveToast').classList.add('show');
            document.getElementById('toastText').innerHTML = "Product added successfully";
            document.getElementById('liveToast').classList.remove('bg-primary');
            document.getElementById('liveToast').classList.remove('bg-success');
            document.getElementById('liveToast').classList.remove('bg-warning');
            document.getElementById('liveToast').classList.remove('bg-danger');

            document.getElementById('liveToast').classList.add('bg-dark');


            let radioColor = document.getElementById(`radio${index}`);
            console.log(radioColor)
            if (radioColor.innerText == "Pending") {
                radioColor.style.backgroundColor = "red";
                radioColor.style.color = "white";

            }
            document.getElementById(`deleteBtn${index}`).style.display = "block";

            productName.value = "";
            productPrice.value = "";
            productPrice.classList.remove('is-valid');
            productName.classList.remove('is-valid');
            addBtn.disabled = true;

            index++;
        }
        else {

            let editName = document.getElementById(`name${eid}`);
            let editPrice = document.getElementById(`price${eid}`);
            let editCheck = document.getElementById(`radio${eid}`);

            if (status[0].checked) {
                editCheck.innerText = status[0].value;
                document.getElementById(`deleteBtn${eid}`).style.display = "block";
                document.getElementById('liveToast').classList.add('show');
                document.getElementById('toastText').innerHTML = "Product updated successfully";
                document.getElementById('liveToast').classList.remove('bg-dark');
                document.getElementById('liveToast').classList.remove('bg-danger');
                document.getElementById('liveToast').classList.add('bg-warning');

            }
            else if (status[1].checked) {
                editCheck.innerText = status[1].value;
                document.getElementById('liveToast').classList.add('show');
                document.getElementById('toastText').innerHTML = "product is being processed";
                document.getElementById('liveToast').classList.remove('bg-dark');
                document.getElementById('liveToast').classList.remove('bg-warning');
                document.getElementById('liveToast').classList.remove('bg-danger');
                document.getElementById('liveToast').classList.add('bg-primary');
                document.getElementById(`deleteBtn${eid}`).style.display = "none";

            }
            else if (status[2].checked) {
                editCheck.innerText = status[2].value;
                document.getElementById(`${eid}`).innerText = 'Done';
                document.getElementById(`${eid}`).disabled = true;
                document.getElementById(`deleteBtn${eid}`).style.display = "block";

                document.getElementById('liveToast').classList.add('show');
                document.getElementById('toastText').innerHTML = "Product completed successfully";
                document.getElementById('liveToast').classList.remove('bg-dark');
                document.getElementById('liveToast').classList.remove('bg-warning');
                document.getElementById('liveToast').classList.remove('bg-danger');

                document.getElementById('liveToast').classList.add('bg-success');

            }
            editName.innerText = productName.value
            editPrice.innerText = parseInt(productPrice.value).toLocaleString('en-IN', {
                style: "currency",
                currency: "INR"
            });

            console.log(editName, editPrice)

            toggle = 0;
            editHeading.innerHTML = "<h2>Add Product</h2>";
            addBtn.innerText = "Add";
            productPrice.classList.remove('is-valid')
            productName.classList.remove('is-valid')
            productName.value = "";
            productPrice.value = "";
            status[0].disabled = false;
            status[0].checked = true;
            status[1].disabled = true;
            status[1].checked = false;
            status[2].disabled = true;
            status[2].checked = false;

            let radioColor = document.getElementById(`radio${eid}`);

            if (radioColor.innerText == "Pending") {
                radioColor.style.backgroundColor = "red";
                radioColor.style.color = "white";

            }
            else if (radioColor.innerText == "Processing") {
                radioColor.style.backgroundColor = "blue";
                radioColor.style.color = "white";
            }
            else if (radioColor.innerText == "Completed") {
                radioColor.style.backgroundColor = "green";
                radioColor.style.color = "white";
            }
            addBtn.disabled = true;

        }
    }

});

const handleEdit = (id) => {
    addBtn.disabled = false;

    console.log("hello", id)
    editHeading.innerHTML = "<h2>EDIT</h2>";
    addBtn.innerText = "Save";

    let editName = document.getElementById(`name${id}`);
    let editPrice00 = document.getElementById(`price${id}`);
    let editPrice = editPrice00.innerText.slice(0, editPrice00.innerText.length - 3)
    editPrice = editPrice.substring(1);
    editPrice = editPrice.replace(/,/g, '')
    let editRadio = document.getElementById(`radio${id}`);

    if (editRadio.innerText == 'Pending') {
        status[0].checked = true;
    }
    else if (editRadio.innerText == 'Processing') {
        status[1].checked = true;
    }


    status[1].disabled = false;
    status[2].disabled = false;
    productName.value = editName.innerText;
    productPrice.value = editPrice;
    toggle = 1;
    eid = id;
}



function confirmationTrue() {

    setTimeout(() => {
        document.getElementById('liveToast').classList.remove('show');
    }, 2000);
    setTimeout(() => {
        document.getElementById(`row${delid}`).remove();
        document.getElementById('liveToast').classList.add('show');
        document.getElementById('toastText').innerHTML = "Product deleted successfully";
        document.getElementById('liveToast').classList.remove('bg-dark');
        document.getElementById('liveToast').classList.remove('bg-warning');
        document.getElementById('liveToast').classList.remove('bg-success');
        document.getElementById('liveToast').classList.add('bg-danger');
        delid = 0;
    }, 100);

}

const handleDel = (e) => delid = e;






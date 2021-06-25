let productName = document.getElementById("productName");
let productPrice = document.getElementById("productPrice");
let addBtn = document.getElementById("addBtn");
let tableBody = document.getElementById("tableBody");
let editHeading = document.getElementById("editHeading");
let status = document.getElementsByName('status');
// let editBtn = document.getElementById('edit');
let index=1;
let toggle = 0;
let eid= 0;
addBtn.addEventListener("click", (e) => {

    let loading = document.getElementById('loading');
    loading.innerText="Loading. . .";
    setTimeout(() => {
    loading.innerText="";
        
    
    if(toggle == 0){

        if (productName.value != 0 && productPrice.value != 0) {
            let html = `<tr>
            <td>${index}</td>
            <td id="name${index}">${productName.value}</td>
            <td id="price${index}">${productPrice.value}</td>
            <td id="radio${index}">${status[0].value}</td>
            <td><button type="button" class="btn btn-outline-primary" id='${index}' onclick="handleEdit(this.id)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
          </svg></button></td>
            </tr>`;
            tableBody.innerHTML += html;
            
            
            let radioColor = document.getElementById(`radio${index}`);
            console.log(radioColor)
            if(radioColor.innerText == "Pending"){
                radioColor.style.backgroundColor = "red";
                radioColor.style.color = "white";

            }
            productName.value = "";
            productPrice.value = "";
            index++;
        }
    }
    else
    { 
        // console.log('helllllll')
        let editName = document.getElementById(`name${eid}`);
        let editPrice = document.getElementById(`price${eid}`);
        let editCheck = document.getElementById(`radio${eid}`);

        if(status[0].checked){
            editCheck.innerText = status[0].value
        }
        else if(status[1].checked){
            editCheck.innerText = status[1].value
        }
        else if(status[2].checked){
            editCheck.innerText = status[2].value;
            document.getElementById(`${eid}`).innerText = 'Done';
            document.getElementById(`${eid}`).disabled = true;
        }
        editName.innerText = productName.value
        editPrice.innerText = productPrice.value

        console.log(editName,editPrice)
        
        toggle =0;
        editHeading.innerHTML = "";
    addBtn.innerText = "Add";
        productName.value = "";
        productPrice.value = "";
        status[0].disabled = false;
        status[0].checked = true;
        status[1].disabled = true;
        status[1].checked = false;
        status[2].disabled = true;
        status[2].checked = false;

        let radioColor = document.getElementById(`radio${eid}`);

        if(radioColor.innerText == "Pending"){
            radioColor.style.backgroundColor = "red";
            radioColor.style.color = "white";

        }
        else if(radioColor.innerText == "Processing"){
            radioColor.style.backgroundColor = "blue";
            radioColor.style.color = "white";
        }
        else if(radioColor.innerText == "Completed"){
            radioColor.style.backgroundColor = "green";
            radioColor.style.color = "white";
        }
    }
}, 2000);
});

const handleEdit = (id)=>{
    console.log("hello",id)
    editHeading.innerHTML = "<h2>EDIT</h2>";
    addBtn.innerText = "Edit";
    let editName = document.getElementById(`name${id}`);
    let editPrice = document.getElementById(`price${id}`);
    let editRadio = document.getElementById(`radio${id}`);

    if(editRadio.innerText == 'Pending'){
        status[0].checked = true;
    }
    else if(editRadio.innerText == 'Processing'){
        status[1].checked = true;
    }
    

    status[1].disabled = false;
    status[2].disabled = false;
    productName.value = editName.innerText;
    productPrice.value = editPrice.innerText;
    toggle=1;
    eid=id;    
}






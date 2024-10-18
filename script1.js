const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');
if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}

// Function to handle adding product to cart
document.getElementById("addToCart").addEventListener("click", function() {
    let product = {
        name: "CameraRoll keychain - 5 pictures",
        price: 150,
        quantity: document.getElementById("quantity").value,
        image: "image/image14.png"
    };
    
    // Retrieve existing cart from local storage, or initialize it as an empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    let productIndex = cart.findIndex(item => item.name === product.name);
    if (productIndex > -1) {
        // If product exists, update the quantity
        cart[productIndex].quantity = parseInt(cart[productIndex].quantity) + parseInt(product.quantity);
    } else {
        // If product does not exist, add it to the cart
        cart.push(product);
    }

    // Save the updated cart back to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
    
    // Provide feedback to the user
    alert("Product added to cart!");
});

/* product
const fileInput = document.getElementById('file-upload');
const uploadedImagesDiv = document.getElementById('uploadedImages');
let uploadedFiles = [];
fileInput.addEventListener('change', function () {
    // Clear previous images
    uploadedImagesDiv.innerHTML = '';
    uploadedFiles = Array.from(fileInput.files);

    // Alert user of successful upload
    alert('Pictures uploaded successfully!');

    // Display uploaded images
    uploadedFiles.forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('image-container');
            const img = document.createElement('img');
            img.src = e.target.result;

            const removeBtn = document.createElement('button');
            removeBtn.classList.add('remove-btn');
            removeBtn.innerText = 'Remove';

            // Remove button click event
            removeBtn.addEventListener('click', function () {
                uploadedFiles.splice(index, 1);
                displayUploadedImages();
            });

            imgContainer.appendChild(img);
            imgContainer.appendChild(removeBtn);
            uploadedImagesDiv.appendChild(imgContainer);
        };

        reader.readAsDataURL(file);
    });
});

function displayUploadedImages() {
    uploadedImagesDiv.innerHTML = ''; // Clear the container first

    uploadedFiles.forEach((file, index) => {
        const reader = new FileReader();

        reader.onload = function (e) {
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('image-container');

            const img = document.createElement('img');
            img.src = e.target.result;

            const removeBtn = document.createElement('button');
            removeBtn.classList.add('remove-btn');
            removeBtn.innerText = 'Remove';

            // Remove button click event
            removeBtn.addEventListener('click', function () {
                uploadedFiles.splice(index, 1);
                displayUploadedImages();
            });

            imgContainer.appendChild(img);
            imgContainer.appendChild(removeBtn);
            uploadedImagesDiv.appendChild(imgContainer);
        };

        reader.readAsDataURL(file);
    });
}*/
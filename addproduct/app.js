const compressImage = () => {
    const pName = inputName.value;
    const pDescription = inputDescription.value;
    const pPrice = inputPrice.value;
    const pImage = inputImage.files[0];

    if (!pName) {
        alert('Please enter product name');
        return;
    }
    if (!pDescription) {
        alert('Please enter product description');
        return;
    }
    if (!pPrice) {
        alert('Please enter product price');
        return;
    }
    if (!pImage) {
        alert('Please select image');
        return;
    }

    const reader = new FileReader();

    reader.addEventListener('load', () => {
        const img = new Image();

        img.src = reader.result;

        img.onload = () => {
            const canvas = document.createElement('canvas');

            canvas.width = 500;
            canvas.height = 400;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, 500, 400);

            canvas.toBlob((blob) => {
                const compressedReader = new FileReader();

                compressedReader.addEventListener('load', () => {
                    const compressedImageData = compressedReader.result;
                    return compressedImageData
                });
                compressedReader.readAsDataURL(blob);
            }, 'image/jpeg', 0.5);
        };
    });
    reader.readAsDataURL(pImage);
}
function addProduct(){
    let compressedImageData = compressImage()
    productDetails.push({
        pName: pName,
        pDescription: pDescription,
        pPrice: pPrice,
        pImage: compressedImageData
    });

    try {
        localStorage.setItem('addProduct', JSON.stringify(productDetails));
        getProduct();
    } catch (err) {
        alert("Storage full!! Please remove some products from your List.");
        return;
    }
    const toastLiveExample = document.getElementById('liveToast')
    const toast = new bootstrap.Toast(toastLiveExample)
    document.getElementById('toastMessage').innerHTML = "Product added successfully!!!";
    toast.show()

    clearInputs();
    document.querySelector('#closeAddBtn').click();
}
createproduct()
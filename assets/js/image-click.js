function handleImageClick(event) {
    const img = event.target;
    const rect = img.getBoundingClientRect();
    const clickX = event.clientX - rect.left; // X position relative to image
    const clickY = event.clientY - rect.top;  // Y position relative to image
    
    const imgWidth = rect.width;
    const imgHeight = rect.height;
    
    // Define vertical center range (e.g., middle 1/3 of the image height)
    const centerTop = imgHeight / 3;
    const centerBottom = (imgHeight / 3) * 2;
    
    // Define horizontal exclusion zones (first 25% and last 25%)
    const leftExclusion = imgWidth * 0.25;
    const rightExclusion = imgWidth * 0.75;
    
    // Define horizontal regions
    const middleBoundary = imgWidth / 2;
    
    let zone = "";
    if (clickY >= centerTop && clickY <= centerBottom && clickX >= leftExclusion && clickX <= rightExclusion) {
        if (clickX < middleBoundary) {
            zone = "Left Center";
            if (event.type == "mousemove") {
                img.style.cursor = "pointer";
            } else {
                window.location.href = "trida_1.html";
            }
        } else {
            zone = "Right Center";
            if (event.type == "mousemove") {
                img.style.cursor = "pointer";
            } else {
                window.location.href = "trida_2.html";
            }
        }
        console.log(`Clicked in ${zone}`);
    } else {
        console.log("Clicked outside allowed zones");
        img.style.cursor = ""
    }
}

document.querySelector(".imgclick").addEventListener("mousemove", handleImageClick);
document.querySelector(".imgclick").addEventListener("click", handleImageClick);

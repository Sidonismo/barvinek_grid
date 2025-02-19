var delay = function (elem, callback) {
    var timeout = null;
    elem.onmouseover = function() {
        // Set timeout to be a timer which will invoke callback after 1s
        timeout = setTimeout(callback, 1000);
    };

    elem.onmouseout = function() {
        // Clear any timers set to timeout
        clearTimeout(timeout);
    }
};

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
            window.location.href = "trida_1.html";
        } else {
            zone = "Right Center";
            window.location.href = "trida_2.html";
        }
        console.log(`Clicked in ${zone}`);
    } else {
        console.log("Clicked outside allowed zones");
    }
}

document.querySelector(".imgclick").addEventListener("click", handleImageClick);
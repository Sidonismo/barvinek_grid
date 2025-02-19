document.onreadystatechange = function(e)
{
    if (document.readyState === 'complete')
    {
        getSeason();
    }
};
const img = document.querySelector(".spodni-banner");

const d = new Date();
let theMonth = d.getMonth().toString();

function getSeason(month = theMonth) {
    season = '';
    switch (true) {
        case ["12", "1", "2"].includes(theMonth) :
            img.src = "images/barvinek-spodni_baner-zima.png";
            break;
        case ["3", "4", "5"].includes(theMonth) :
            img.src = "images/barvinek-spodni_baner-jaro.png";
            break;
        case ["6", "7", "8"].includes(theMonth) :
            img.src = "images/barvinek-spodni_baner-leto.png";
            break;
        case ["9", "10", "11"].includes(theMonth) :
            img.src = "images/barvinek-spodni_baner-podzim.png";
            break;
    }
}
$( document ).tooltip();

function getTime()
{
    var currentDateandTime = new Date();
    var hour = currentDateandTime.getHours();
    var minutes = currentDateandTime.getMinutes();
    var am_pm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var time = hour + ":" + minutes + ' ' + am_pm;
    document.getElementById("displayTime").innerHTML = time.toLocaleString();
}

function getOption() {
    getTime();
    var obj = document.getElementById("permitDropDown");
    document.getElementById("permitName").innerHTML =
        obj.options[obj.selectedIndex].text;

    /*var greekParkingParagraph = document.getElementById("greekParking");
    greekParkingParagraph.style.display = "visibility: hidden";*/
    var coneRow = document.getElementById("cone");
    coneRow.style.opacity = "0.4";

    var unionRow = document.getElementById("union");
    unionRow.style.opacity = "0.4";

    var criRow = document.getElementById("cri");
    criRow.style.opacity = "0.4";

    var westRow = document.getElementById("west");
    westRow.style.opacity = "0.4";

    var eastRow = document.getElementById("east");
    eastRow.style.opacity = "0.4";

    var southRow = document.getElementById("south");
    southRow.style.opacity = "0.4";

    var northRow = document.getElementById("north");
    northRow.style.opacity = "0.4";

    /* Greek Village:
    Greek Lot
    North Deck */
    if(obj.value === "Greek Village")
    {
        northRow.style.opacity = "1";
    }

    /* Resident Parking:
    North Deck
    South Deck */
    if(obj.value === "Resident Standard")
    {
        northRow.style.opacity = "1";
        southRow.style.opacity = "1";
    }

    if(obj.value === "Faculty/Staff")
    {
        northRow.style.opacity = "1";
        coneRow.style.opacity = "1";
        eastRow.style.opacity = "1";
        westRow.style.opacity = "1";
    }

    if(obj.value === "Night" && (hour > 5 && am_pm === 'PM'))
    {
        westRow.style.opacity = "1";
        eastRow.style.opacity = "1";
        unionRow.style.opacity = "1";
        criRow.style.opacity = "1";
        northRow.style.opacity = "1";
        coneRow.style.opacity = "1";
        southRow.style.opacity = "1";
    }

    /* Commuter Parking:
    CRI Deck
    East Deck
    Union Deck
    West Deck */
    if(obj.value === "Commuter Standard" || obj.value === "Two-Day Commuter Permit")
    {
        westRow.style.opacity = "1";
        eastRow.style.opacity = "1";
        unionRow.style.opacity = "1";
        criRow.style.opacity = "1";
    }
}


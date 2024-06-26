const links = [
    //combine harvester
    'https://youtu.be/IgOcYyb8suU?si=6WXLN-iOU0Jz5Qmv',
    //MEDIC!
    'https://youtu.be/-6NQx4WRRg0?si=M7GABzaDouBfSsTk',
    //fish
    'https://youtu.be/YAgJ9XugGBo?si=_-E5uxFv74rD_wt9',
    //corn
    //corn is now exclusive to the 0.5% chance corn theme
    //chonny jash mind electric
    'https://youtu.be/uIQbSzkXIsk?si=Y-U8pbSxD0bAcMyJ',
    //creator
    'https://youtu.be/Qtf8YFw8iZg?si=H0duiieO0FO92Gfe',
    //adrift cover
    'https://youtu.be/O_bdDtyow2Y?si=Zui4RHc5ix3bLfF3',
    //pretty in pink
    'https://youtu.be/eJUA0EYKFWI?si=gqCP9XMKRTjZWDY4',
    //drunk
    'https://youtu.be/T3hTwgDy_Ww?si=lXH-68Zae2MDux2Q',
    //echo
    'https://youtu.be/i92AZxL6Wl4?si=wfLUWXCZoPzX6DgM',
    //epoch
    'https://youtu.be/K3m3_7RoGZk?si=9hRwK_Gc9L3iDC_q',
    //escape velocity
    'https://youtu.be/HKT4XiEayRc?si=8ihEatVV3y08VGGK',
    //never gonna give you up
    'https://youtu.be/dQw4w9WgXcQ?si=HbZf2yVj4-lGf6F-',
    //bad apple
    'https://youtu.be/FtutLA63Cp8?si=c-vcN-xoh7Aju6DR',
    //cosmo sheldrake the moss
    'https://youtu.be/62RvnXZgHwQ?si=IOekVjMe304PhjuY',
    //chonny jash the moss
    'https://youtu.be/_HU1ZwN2PQ0?si=1rB4JhjaF7rUOUQI',
    //stuck inside
    'https://youtu.be/AWPB2p1CEZQ?si=vaBKCzGvpNomcZJV',
    //terrible things
    'https://youtu.be/0tBY30TS190?si=oQa4tSgC9JDA9CQp',
    //hello world
    'https://youtu.be/Yw6u6YkTgQ4?si=LgZTZvVlFxrZ2IzI',
    //goodbye to a world
    'https://youtu.be/W2TE0DjdNqI?si=GQ2tvB0sPzvCzko2',
    //loser baby
    'https://youtu.be/9sVoglgJjRg?si=bySPh8cg67O05BjI',
    //don't be a fool
    'https://youtu.be/6V02y3q1tpo?si=xIiZxnAYH00RV-8V',
    //mindustry ost
    'https://youtube.com/playlist?list=PLKtSsQFPB7SugSqHCfFIXMFeI4sqq2iNE&si=sGQRFoyRTQ5J81li',
    //biggering
    'https://youtu.be/cpyuolKoeAY?si=D0RH6ipWljnZCBdy',
    //con lentitud poderosa
    'https://youtu.be/Nn9trJXUrp0?si=m-Nr9-uQnTIV8sq2',
    //here comes a savior
    'https://youtu.be/LNXjBnZfu3Q?si=-gRdKbKzi8xn4hls',
    //literally a d20 roll
    'https://www.google.com/search?q=roll+a+d20',
    //chekhov's gun wiki
    "https://en.wikipedia.org/wiki/Chekhov's_gun",
    //jack of all trades wiki
    'https://en.wikipedia.org/wiki/Jack_of_all_trades',
    //taste is subjective wiki
    'https://en.wikipedia.org/wiki/De_gustibus_non_est_disputandum',
    //the court jester
    'https://youtu.be/Lr6lTKAto68?si=A2I6XgSCp66fmbPG'
];
var isCornThemed = false;

tryCornTheme(false);

function feelingLucky() {
    setCookie("lucky", "true", 10);
    tryCornTheme(true);
    openRandomLink();
}

function openRandomLink() {
    var link;
    if (isCornThemed) {
        //corn by slimecicle
        link = 'https://youtu.be/j8qp3ITVqY0?si=rAu6o_2Y7zcNYDyX';
    } else {
        let i = Math.floor(Math.random() * (links.length + 1));
        link = links[i];
    }
    window.open(link, '_blank');
}


function tryCornTheme(overrideCookie) {
    if (isCornThemed) {
        return;
    }
    if ((overrideCookie | getCookie("lucky") == "true") & Math.random() < 0.005) {
        var r = document.querySelector(':root');

        document.getElementById("sidebar-score-name").textContent = "Corn List:";
        document.getElementById("feeling-lucky-text").textContent = "I'm feeling corny (0.5%)";
        let list = document.getElementsByClassName("button-image");
        for (let i = 0; i < list.length; i++) {
            let name = list[i].src.substring(0, list[i].src.length-4);
            list[i].src = name + "_corn.png";
        }

        list = document.getElementById("hidden-link-button-container").children;
        for (let i = 0; i < list.length; i++) {
            list[i].style.visibility = "visible";
        }

        r.style.setProperty('--text', '#6b340d');
        r.style.setProperty('--background', '#e3c42c');
        r.style.setProperty('--outset-top', '#fae683');
        r.style.setProperty('--outset-bottom', '#6b340d');
        r.style.setProperty('--inset-top', '#6b340d');
        r.style.setProperty('--inset-bottom', '#fae683');
        r.style.setProperty('--selected-background', '#cf7f1f');
        r.style.setProperty('--divider', '#cf7f1f');

        isCornThemed = true;
    }
}
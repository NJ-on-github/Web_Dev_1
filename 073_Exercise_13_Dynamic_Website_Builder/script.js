

function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function
    let cont = document.body.querySelector(".container");
    let card = document.createElement("div");
    card.className = "card";

    //card styling
    card.style.display = "flex";
    card.style.background = "#000";
    card.style.color = "white";
    card.style.fontFamily = "Segoe UI, Tahoma, Geneva, Verdana, sans-serif";
    card.style.flexDirection = "row";
    card.style.flexWrap = "wrap";
    card.style.padding = "5px 15px";
    card.style.marginTop = "10px";
    card.style.marginBottom = "10px";

    //
    let left_cont = document.createElement("div");
    left_cont.className = "left_cont";

    //
    let img_cont = document.createElement("div");
    img_cont.className = "img_cont";

    //styling the img_cont
    img_cont.style.background = "#000";
    img_cont.style.width = "150px";
    img_cont.style.overflow = "hidden";
    img_cont.style.borderRadius = "5px";
    img_cont.style.position = "relative";
    img_cont.style.flex = "1 1 100%";

    //
    let thumbnail_el = document.createElement("img");
    thumbnail_el.src = thumbnail;
    thumbnail_el.alt = "thumbnail";

    //styling the thumbnail
    thumbnail_el.style.width = "100%";
    thumbnail_el.style.height = "100%";
    thumbnail_el.style.objectFit = "contain";

    //
    let duration_el = document.createElement("div");
    duration_el.className = "duration";
    duration_el.textContent = duration;

    //styling the duration
    duration_el.style.position = "absolute";
    duration_el.style.bottom = "0.6em";
    duration_el.style.right = "0.2em";
    duration_el.style.background = "rgb(0, 0, 0)";
    duration_el.style.color = "white";
    duration_el.style.padding = "0.1em 0.4em";
    duration_el.style.borderRadius = "4px";
    duration_el.style.fontSize = "0.7rem";

    //
    let right_cont = document.createElement("div");
    right_cont.className = "right_cont";

    //styling the right_cont
    right_cont.style.display = "flex";
    right_cont.style.flexWrap = "wrap";
    right_cont.style.alignContent = "start";
    right_cont.style.marginLeft = "6px";
    right_cont.style.width = "max-content";
    right_cont.style.flex = "1 1";

    let h2_1 = document.createElement("h2");
    h2_1.textContent = title;

    //styling the h2_1
    h2_1.style.fontSize = "0.9rem";
    h2_1.style.flex = "1 1 100%";
    h2_1.style.boxSizing = "border-box";
    h2_1.style.margin = "5px";

    //
    let details_el = document.createElement("div");
    details_el.className = "details";

    //styling the details_el
    details_el.style.marginTop = "7px";
    details_el.style.display = "flex";

    //
    let cName_el = document.createElement("p");
    cName_el.className = "cName";
    cName_el.textContent = cName;

    let views_el = document.createElement("p");
    views_el.className = "views";
    views_el.textContent = "● " + viewFormat(views) + " views";

    let time_el = document.createElement("p");
    time_el.className = "time";
    time_el.textContent = "● " + monthsOld +" months ago";

    //styling the cName_el, vews_el, time_el
    cName_el.style.width = "min-content";
    cName_el.style.textWrap = "nowrap";
    cName_el.style.color = "gray";
    cName_el.style.margin = "0px 5px";
    cName_el.style.boxSizing = "border-box";
    cName_el.style.fontSize = "0.75rem";
    cName_el.style.flex = "0 1";
    cName_el.style.textAlign = "start";

    views_el.style.width = "min-content";
    views_el.style.textWrap = "nowrap";
    views_el.style.color = "gray";
    views_el.style.margin = "0px 5px";
    views_el.style.boxSizing = "border-box";
    views_el.style.fontSize = "0.75rem";
    views_el.style.flex = "0 1";
    views_el.style.textAlign = "start";

    time_el.style.width = "min-content";
    time_el.style.textWrap = "nowrap";
    time_el.style.color = "gray";
    time_el.style.margin = "0px 5px";
    time_el.style.boxSizing = "border-box";
    time_el.style.fontSize = "0.75rem";
    time_el.style.flex = "0 1";
    time_el.style.textAlign = "start";

    //Arranging elements in place
    let last_card = document.body.querySelector(".container").insertAdjacentElement("beforeend", card);

    // console.log(document.body.querySelector(".container").insertAdjacentElement("beforeend", card))

    // document.querySelector(".container:lastchild").insertAdjacentElement("afterbegin", left_cont)

    // document.querySelector(".left_cont").insertAdjacentElement("afterbegin", img_cont)

    // document.querySelector(".img_cont").insertAdjacentElement("afterbegin", thumbnail_el)

    // document.querySelector(".img_cont").appendChild(duration_el);

    // document.querySelector(".card").appendChild(right_cont);

    // document.querySelector(".right_cont").insertAdjacentElement("afterbegin", h2_1);

    // document.querySelector(".right_cont").appendChild(details_el);

    // document.querySelector(".details").insertAdjacentElement("afterbegin", cName_el);

    // document.querySelector(".details").appendChild(views_el);

    // document.querySelector(".details").appendChild(time_el);

    // console.log(document.body.querySelector(".container").insertAdjacentElement("beforeend", card))

    last_card.insertAdjacentElement("afterbegin", left_cont)

    last_card.querySelector(".left_cont").insertAdjacentElement("afterbegin", img_cont)

    last_card.querySelector(".img_cont").insertAdjacentElement("afterbegin", thumbnail_el)

    last_card.querySelector(".img_cont").appendChild(duration_el);

    last_card.appendChild(right_cont);

    last_card.querySelector(".right_cont").insertAdjacentElement("afterbegin", h2_1);

    last_card.querySelector(".right_cont").appendChild(details_el);

    last_card.querySelector(".details").insertAdjacentElement("afterbegin", cName_el);

    last_card.querySelector(".details").appendChild(views_el);

    last_card.querySelector(".details").appendChild(time_el);
}

document.body.style.margin = "0px";
document.body.style.padding = "0px";
document.body.style.background = "rgb(66, 64, 64)";


function viewFormat(v) {
    if(v<0)
        return 'What?';
    const v_len = v.toString().length;

    // If B
    if (v_len > 9) {

        const newWithDec = v.toString().slice(0, (v_len - 8));

        if (newWithDec.length < 4 && newWithDec[newWithDec.length - 1] != 0) {
            let temp = newWithDec.slice(0, newWithDec.length - 1) + "." + newWithDec.slice(newWithDec.length - 1, newWithDec.length) + " B";
            return temp;
        }
        return newWithDec.slice(0, newWithDec.length - 1) + " B";
    }

    // If M
    else if (v_len > 6) {
        const newWithDec = v.toString().slice(0, (v_len - 5));

        if (newWithDec.length < 4 && newWithDec[newWithDec.length - 1] != 0) {
            let temp = newWithDec.slice(0, newWithDec.length - 1) + "." + newWithDec.slice(newWithDec.length - 1, newWithDec.length) + " M";
            return temp;
        }
        return newWithDec.slice(0, newWithDec.length - 1) + " M";
    }

    //If K
    else if (v_len > 3) {
        const newWithDec = v.toString().slice(0, (v_len - 2));
        
        if (newWithDec.length < 4 && newWithDec[newWithDec.length - 1] != 0) {
            let temp = newWithDec.slice(0, newWithDec.length - 1) + "." + newWithDec.slice(newWithDec.length - 1, newWithDec.length) + " K";
            return temp;
        }
        return newWithDec.slice(0, newWithDec.length - 1) + " K";
        }
        
        // If as it is
    else
        return v.toString();
}

//Testing the function

// console.log("testing");
// console.log("700.5 billion ->");
// console.log(viewFormat(700500000000));

// console.log("700 billion ->");
// console.log(viewFormat(700000000000));

// console.log("70.5 billion ->");
// console.log(viewFormat(70500000000));

// console.log("70 billion ->");
// console.log(viewFormat(70000000000));

// console.log("7.5 billion ->");
//  console.log(viewFormat(7500000000));

// console.log("7 billion ->");
// console.log(viewFormat(7000000000));

// console.log("700.5 million ->");
// console.log(viewFormat(700500000));

// console.log("700 million ->");
// console.log(viewFormat(700000000));

// console.log("70.5 million ->");
// console.log(viewFormat(70500000));

// console.log("70 million ->");
// console.log(viewFormat(70000000));

// console.log("7.5 million ->");
// console.log(viewFormat(7500000));

// console.log("7 million ->");
// console.log(viewFormat(7000000));

// console.log("700.5 thousand ->");
// console.log(viewFormat(700500));

// console.log("700 thousand ->");
// console.log(viewFormat(700000));

// console.log("70.5 thousand ->");
// console.log(viewFormat(70500));

// console.log("70 thousand ->");
// console.log(viewFormat(70000));

// console.log("7.5 thousand ->");
// console.log(viewFormat(7500));

// console.log("7 thousand ->");
// console.log(viewFormat(7000));

// console.log("700.5 hundred ->");
// console.log(viewFormat(70050));

// console.log("700 hundred->");
// console.log(viewFormat(70000));

// console.log("70.5 hundred->");
// console.log(viewFormat(7050));

// console.log(viewFormat(7000));

// console.log(viewFormat(7500));
  
// console.log(viewFormat(100));

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
function addEventListenerList(list, event, fn) {
    for(let i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, function() {
            handleClick(this);
        }, false);
    }
}

function handleClick(elem) {
    
    document.querySelector("." + elem.innerText.toLowerCase()).scrollIntoView({

        behavior: 'smooth'
    });
}

window.addEventListener('load', function() {
    let navbarItems = document.getElementsByClassName("nav--elem");
    addEventListenerList(navbarItems, 'click', handleClick);
})

/* NAV MENU FUNCTION */



function asideMenuToggle() {
    const asideMenu = document.getElementById('aside-menu');
    asideMenu.classList.toggle('aside-menu--active');
}

const menuButton = document.getElementById('site-header__menuButton');
menuButton.addEventListener('click', asideMenuToggle);

/* CONTROLS FUNCTION */

function asideControlsToggle() {
    const asideControls = document.getElementById('aside-controls');
    asideControls.classList.toggle('aside-controls--active');
}

const controlsButton = document.getElementById('site-header__controlsButton');
controlsButton.addEventListener('click', asideControlsToggle);


/* STORE POPUP FUNCTION */

function popupAdd(index) {
   debugger;

    const popupWindow = document.getElementById('merch-item-popup')[index];
    if (popupWindow != null) {
        
        popupWindow[index].classList.add('merch-item-popup--active')
    }
    
};

//  Get all items with specific id
// Check if itemIcons != null
// for each item with id from querySelectorAll
// add click event for each item

const itemIcons = document.querySelectorAll('#main-content-store__merch-item-icon');
if (itemIcons != null) {
itemIcons.forEach((item, index) => {
    
    item.addEventListener('onclick', popupAdd(index))
})};



function popupRemove(index) {
    const popupWindow = document.querySelectorAll('#merch-item-popup');
    popupWindow[index].classList.remove('merch-item-popup--active');
}
debugger;
const popupClose = document.querySelectorAll('#popup-close');
if (popupClose != null){
    popupClose.forEach((item, index) => {
    item.addEventListener('click', popupRemove(index), false)
})};


/* CLOCK */



/* COMMENT SECTION password */
// funktion som tar in en sträng parameter (input)
function checkPassword(input) {
    // deklarerar en variabel med ett sträng värde
    var correctString = 'I never saw him live';
    // kollar ifall inkommande sträng matchar min variabel
    // om värdena matchar alert succed else alert wrong
    if (input == correctString) {
        alert('succeed');
    }
    else {
        alert('wrong');
    }
}

/* COMMENT SECTION */



window.onload = function setTemplate() {
    var allComments = document.getElementById('allComments');
    if(allComments != null){
    allComments.innerHTML = localStorage.getItem('template');
}};

const commentContainer = document.getElementById('allComments');
if (commentContainer != null){
document.getElementById('addComments').addEventListener('click', function (ev) {
  // hämtar string från textarea med hjälp av dess id. skickar det sedan till min func.
    var inputText = document.getElementById('comment').value;
    checkPassword(inputText);
    addComment(ev);
})};

function addComment(ev) {
    
    let commentText, wrapDiv;
    const textBox = document.createElement('div');
    const replyButton = document.createElement('button');
    replyButton.className = 'reply';
    replyButton.innerHTML = 'Reply';
    const likeButton = document.createElement('button');
    likeButton.innerHTML = 'Like';
    likeButton.className = 'likeComment';
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'deleteComment';
    if(hasClass(ev.target.parentElement, 'container')) {
        const wrapDiv = document.createElement('div');
        wrapDiv.className = 'wrapper';
        wrapDiv.style.marginLeft = 0;
        commentText = document.getElementById('comment').value;
        document.getElementById('comment').value = '';
        textBox.innerHTML = commentText;
        textBox.style.backgroundColor = "var(--content-color-1)";
        wrapDiv.append(textBox, replyButton, likeButton, deleteButton);
        commentContainer.appendChild(wrapDiv);
    } else {
        wrapDiv = ev.target.parentElement;
        commentText = ev.target.parentElement.firstElementChild.value;
        textBox.innerHTML = commentText;
        textBox.style.backgroundColor = "var(--content-color-2)";
        wrapDiv.innerHTML = '';
        wrapDiv.append(textBox, replyButton, likeButton, deleteButton);
    }
    setOnLocalStorage();
}

function setOnLocalStorage () {
    localStorage.setItem('template', document.getElementById('allComments').innerHTML);
}
function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}

var allComments = document.getElementById('allComments');
if (allComments != null) {
allComments.addEventListener('click', function (e) {
    if (hasClass(e.target, 'reply')) {
        const parentDiv = e.target.parentElement;
        const wrapDiv = document.createElement('div');
        wrapDiv.style.marginLeft = (Number.parseInt(parentDiv.style.marginLeft) + 15).toString() + 'px';
        wrapDiv.className = 'wrapper';
        const textArea = document.createElement('textarea');
        textArea.style.marginRight = '1rem';
        const addButton = document.createElement('button');
        addButton.className = 'addReply';
        addButton.innerHTML = 'Add';
        const cancelButton = document.createElement('button');
        cancelButton.innerHTML = 'Cancel';
        cancelButton.className='cancelReply';
        wrapDiv.append(textArea, addButton, cancelButton);
        parentDiv.appendChild(wrapDiv);

    } else if(hasClass(e.target, 'addReply')) {
        addComment(e);
    } else if(hasClass(e.target, 'likeComment')) {
         const likeBtnValue = e.target.innerHTML;
         e.target.innerHTML = likeBtnValue !== 'Like' ? Number.parseInt(likeBtnValue) + 1 : 1;
        setOnLocalStorage();
    } else if(hasClass(e.target, 'cancelReply')) {
        e.target.parentElement.innerHTML = '';
        setOnLocalStorage();
    } else if(hasClass(e.target, 'deleteComment')) {
        e.target.parentElement.remove();
    }
})}; 




/* COMMENT SECTION */

/* RINGTONE PLAYER */


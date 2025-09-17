
let translateModal = document.getElementById('translateModal');
let closeTranslateModal = document.getElementById('closeTranslateModal');
let okTranslateModal = document.getElementById('okTranslateModal');

document.querySelectorAll('#translateBtn').forEach(function(btn) {
    btn.onclick = function () {
        if (translateModal && bodyOvrly) {
            translateModal.classList.remove('d-none');
            translateModal.classList.add('drop-in');
            translateModal.style.display = 'block';
            bodyOvrly.style.display = 'block';
        }
    };
});

function hideTranslateModal() {
    if (translateModal) {
        translateModal.classList.add('d-none');
        translateModal.classList.remove('drop-in');
        translateModal.style.display = 'none';
    }
    if (bodyOvrly) {
        bodyOvrly.style.display = 'none';
    }
}

if (closeTranslateModal) {
    closeTranslateModal.onclick = hideTranslateModal;
}
if (okTranslateModal) {
    okTranslateModal.onclick = hideTranslateModal;
}
let toggleHeaderMenu = document.getElementById('toggleHeaderMenu');
let headerMenu = document.getElementById('headerMenu');
// document.querySelectorAll("#translateBtn").forEach(function(btn) {
//     btn.onclick= function() {
//         alert("The translation feature is coming soon!");
//     }
//     });
if (toggleHeaderMenu && headerMenu) {
    let clickCount = 0;
    toggleHeaderMenu.addEventListener('click', function () {
        clickCount++;
        if (clickCount === 1) {
            headerMenu.classList.remove('d-none');

        } else if (clickCount === 2) {
            headerMenu.classList.add('d-none');
            clickCount = 0;
        }
        setTimeout(() => { clickCount = 0; }, 2600);
    });
}
let loginBtn = document.getElementById('loginBtn');
let signUpBtn = document.getElementById('signUpBtn');
let bodyOvrly = document.getElementById('overlay');
loginBtn.onclick = function (){
    console.log("login");
    let firstForm = document.getElementsByClassName("firstForm")[0];
    if (firstForm) {
        firstForm.classList.remove("d-none");
        firstForm.classList.add("drop-in");
        firstForm.style.display = "block";
    }
    let overlay = document.getElementById("overlay");
    if (overlay) {
        overlay.style.display = "block";
    }
}
signUpBtn.onclick = function (){
    console.log("login");
    let firstForm1 = document.getElementsByClassName("firstForm1")[0];
    if (firstForm1) {
        firstForm1.classList.remove("d-none");
        firstForm1.classList.add("drop-in");
        firstForm1.style.display = "block";
    }
    let overlay = document.getElementById("overlay");
    if (overlay) {
        overlay.style.display = "block";
    }
}
bodyOvrly.onclick = function (){
    let firstForm = document.getElementsByClassName("firstForm")[0];
    let firstForm1 = document.getElementsByClassName("firstForm1")[0];
    if (firstForm) {
        firstForm.classList.add("d-none");
        firstForm.classList.remove("drop-in");
        firstForm.style.display = "none";
    }
    if (firstForm1) {
        firstForm1.classList.add("d-none");
        firstForm1.classList.remove("drop-in");
        firstForm1.style.display = "none";
    }
    if(translateModal) {
        translateModal.classList.add('d-none');
        translateModal.classList.remove('drop-in');
        translateModal.style.display = 'none';
    }
    let overlay = document.getElementById("overlay");
    if (overlay) {
        overlay.style.display = "none";
    }
}
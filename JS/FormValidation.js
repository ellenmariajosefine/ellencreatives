const contactForm   = document.querySelector('#contactForm');
const submitBtn     = document.querySelector('#submitform')

contactForm.addEventListener('submit', function (evt) {
    let inputName       = document.querySelector('#inputName');
    let inputEmail      = document.querySelector('#inputEmail');
    let inputPhone      = document.querySelector('#inputPhone');
    let textArea        = document.querySelector('#inputDescr');
    let allFields       = document.querySelectorAll('.input');
    console.log(allFields);

    if (ifStringEmpty(inputName, inputEmail, inputPhone, textArea)) {
        alert(
    `It's nicer if we know your name... 💔 Please fill in!

We kinda' need your e-mail... 😏 Please fill in your e-mail address!

Sometimes it's easier to just call...Please fill in your number!

It helps if we know what you need help with... 🥸 Please write something in the text area!`)
    }
    else if (ifStringEmpty(inputName)) {
        alert("It's nicer if we know your name... 💔 Please fill in!");
    }
    else if (ifStringEmpty(inputEmail)) {
        alert("We kinda' need your e-mail... 😏 Please fill in!");
    }
    else if (ifStringEmpty(inputPhone)) {
        alert("Sometimes it's easier to just call...Please fill in!");
    }
    else if (ifStringEmpty(textArea)) {
        alert("It helps if we know what you need help with... 🥸 Please write something!");
    }

    function ifStringEmpty(input) {
        return input.value.trim() === '';
    }

    if  ((ifStringEmpty(inputName)) || (ifStringEmpty(inputEmail)) || (ifStringEmpty(inputPhone)) || (ifStringEmpty(textArea))){
        alert("Aw.. it didn't work, please try again 😢");
        evt.preventDefault();
    }
    else {
        alert("Woho! Your message has been sent to us 🥳");
    } 
})


//  ******************

const contactForm1   = document.querySelector('#contactForm1');
const submitBtn1     = document.querySelector('#submitform1')

contactForm1.addEventListener('submit', function (evt) {
    let inputName1       = document.querySelector('#inputName1');
    let inputEmail1      = document.querySelector('#inputEmail1');
    let inputPhone1      = document.querySelector('#inputPhone1');
    let textArea1        = document.querySelector('#inputDescr1');
    let allFields1       = document.querySelectorAll('.input');
    console.log(allFields1);

    if (ifStringEmpty(inputName1, inputEmail1, inputPhone1, textArea1)) {
        alert(
    `It's nicer if we know your name... 💔 Please fill in!

We kinda' need your e-mail... 😏 Please fill in your e-mail address!

Sometimes it's easier to just call...Please fill in your number!

It helps if we know what you need help with... 🥸 Please write something in the text area!`)
    }
    else if (ifStringEmpty(inputName1)) {
        alert("It's nicer if we know your name... 💔 Please fill in!");
    }
    else if (ifStringEmpty(inputEmail1)) {
        alert("We kinda' need your e-mail... 😏 Please fill in!");
    }
    else if (ifStringEmpty(inputPhone1)) {
        alert("Sometimes it's easier to just call...Please fill in!");
    }
    else if (ifStringEmpty(textArea1)) {
        alert("It helps if we know what you need help with... 🥸 Please write something!");
    }

    function ifStringEmpty(input) {
        return input.value.trim() === '';
    }

    if  ((ifStringEmpty(inputName1)) || (ifStringEmpty(inputEmail1)) || (ifStringEmpty(inputPhone1)) || (ifStringEmpty(textArea1))){
        alert("Aw.. it didn't work, please try again 😢");
        evt.preventDefault();
    }
    else {
        alert("Woho! Your message has been sent to us 🥳");
    } 
})

//  ******************

const contactForm2   = document.querySelector('#contactForm2');
const submitBtn2     = document.querySelector('#submitform2')

contactForm2.addEventListener('submit', function (evt) {
    let inputName2       = document.querySelector('#inputName2');
    let inputEmail2      = document.querySelector('#inputEmail2');
    let inputPhone2      = document.querySelector('#inputPhone2');
    let textArea2        = document.querySelector('#inputDescr2');
    let allFields2       = document.querySelectorAll('.input');
    console.log(allFields2);

    if (ifStringEmpty(inputName2, inputEmail2, inputPhone2, textArea2)) {
        alert(
    `It's nicer if we know your name... 💔 Please fill in!

We kinda' need your e-mail... 😏 Please fill in your e-mail address!

Sometimes it's easier to just call...Please fill in your number!

It helps if we know what you need help with... 🥸 Please write something in the text area!`)
    }
    else if (ifStringEmpty(inputName2)) {
        alert("It's nicer if we know your name... 💔 Please fill in!");
    }
    else if (ifStringEmpty(inputEmail2)) {
        alert("We kinda' need your e-mail... 😏 Please fill in!");
    }
    else if (ifStringEmpty(inputPhone2)) {
        alert("Sometimes it's easier to just call...Please fill in!");
    }
    else if (ifStringEmpty(textArea2)) {
        alert("It helps if we know what you need help with... 🥸 Please write something!");
    }

    function ifStringEmpty(input) {
        return input.value.trim() === '';
    }

    if  ((ifStringEmpty(inputName2)) || (ifStringEmpty(inputEmail2)) || (ifStringEmpty(inputPhone2)) || (ifStringEmpty(textArea2))){
        alert("Aw.. it didn't work, please try again 😢");
        evt.preventDefault();
    }
    else {
        alert("Woho! Your message has been sent to us 🥳");
    } 
})
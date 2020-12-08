let form = document.querySelector('form');

contactForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    let inputName = document.querySelector('#inputName');
    let inputEmail = document.querySelector('#inputEmail');
    let inputPhone = document.querySelector('#inputPhone');
    let textArea = document.querySelector('HTMLTextAreaElement');
    const emailError = document.querySelector('#mail + span.error');

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

    if (ifStringEmpty === false) {
        alert('Woho! Your message was sent to us 🤗');
    } else {
        alert("Aw.. it didn't work, please try again 😢")
    }

})
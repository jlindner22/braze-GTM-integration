'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
    // console.log('current class name: ' + className);

});

//signup form submission
const submitForm = () => {
    const text = document.getElementById("signup");
    const email = document.getElementById("email");
    // const name = document.getElementById("name");
    // console.log(email.value)
    
    if (email.value) {
        email_value = email.value;
    } else {
        email_value = "Jen";
    }

    dataLayer.push({
        'User ID': email_value,
        'event': 'change-user'
    })
    // appboy.changeUser(email.value)
    // appboy.getUser().setEmail(email.value)
    // appboy.getUser().setFirstName(name.value)
    setTimeout(function(){ text.reset() }, 2000)
    console.log(appboy.getUser().getUserId(x => console.log(x)))
    console.log("form submitted!")
}

const formButton = document.getElementById("signup-form-button")
formButton.addEventListener("click", submitForm);

const submitEventForm = () => {
    const event = document.getElementById("event-name");
    console.log(event.value);
    // appboy.logCustomEvent(event.value);
    event.value = '';
    // dataLayer.push({'event': 'logged_event'});
}

const eventButton = document.getElementById("event-button")
eventButton.addEventListener("click", submitEventForm);

const submitAttributeForm = () => {
    const attributeName = document.getElementById("attribute-name");
    const attributeValue = document.getElementById("attribute-value");
    console.log(attributeName.value, attributeValue.value)
    // appboy.getUser().setCustomUserAttribute(
    //     attributeName.value,
    //     attributeValue.value
    //   );
      attributeName.value = '';
      attributeValue.value = '';
    //   dataLayer.push({'event': 'event_name'});
}

const attributeButton = document.getElementById("attribute-button")
attributeButton.addEventListener("click", submitAttributeForm);

// const submitPushPrompt = () => {
//     appboy.logCustomEvent("prime-for-push")
// }

// const pushPromptButton = document.getElementById("push-prompt-button")
// pushPromptButton.addEventListener("click", submitPushPrompt);





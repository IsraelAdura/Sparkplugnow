
class main {
    constructor () {

        this.$form = document.querySelector("#registrationform");
        this.$username = document.querySelector("#username");
        this.$email = document.querySelector("#email");
        this.$phone = document.querySelector("#phone");
        this.$age = document.queryselector("#age");
        this.$status = document.queryselector("#status");
        this.$experience = document.queryselector("#experience");
        this.$others = document.querySelector("#others");
        this.$reason = document.queryselector("reason");
        this.$submit = document.queryselector("#submit");


    this.$form.addEventListener("submit", event => {
        this.onFormSubmit(event);
    });


    }

    onFormSubmit(event) {
        event.preventDefault();
        const formValues = this. getFormValues();
        const formStatus = validateRegistrationForm(formValues);

        if(formStatus.isValid) {
            this.clearErrors();
            this.submitForm(formValues);
        } else{
            this.clearErrors();
            this.highlightErrors(formStatus.result);
        }

    
        
    }

    clearErrors () {

        this.$username.parentElement.classList.remove("has-error");
        this.$phone.parentElement.classList.remove("has-error");
        this.$email.parentElement.classList.remove("has-error");
        this.$age.parentElement.classList.remove("has-error");
        this.$status.parentElement.classList.remove("has-error");
        this.$experience.parentElement.classList.remove("has-error");
        this.$others.parentElement.classList.remove("has-error");

       
    }

    highlightErrors (result) {
        if(!result.username) {
            this.$username.parentElement.classList.add("has-error");
        }

        if(!result.phone) {
            this.$phone.parentElement.classList.add("has-error");
        }

        if(!result.email) {
            this.$email.parentElement.classList.add("has-error");
        }

        if(!result.age) {
            this.$age.parentElement.classList.add("has-error");
        }

        if(!result.status) {
            this.$status.parentElement.classList.add("has-error");
        }

        if(!result.experience) {
            this.$experience.parentElement.classList.add("has-error");
        }

        if(!result.others) {
            this.$others.parentElement.classList.add("has-error");
        }

    }

    getFormValues () {
        return {
            username = this.$username.value,
            email = this.$email.value,
            phone = this.$phone.value,
            age = this.$age.value,
            status = this.$status.value,
            experience = parseInt(document.querySelector('input[name = "experience"]: checked').value),
            others = this.$others.value,
            reason = this.reason.value
        };
    }

    submitForm(formValues) {

       //API call 

    }

    resetForm () {
        this.$username.value = "";
        this.$email.value = "";
        this.$phone.value = "";
        this.$age.value = "";
        this.$status.value = "";
        this.$experience.value = "";
        this.$reason.value = "";
    }

}


function validateUserName (name) {
    return name.length > 3;
}

function validateEmailAddress (email) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\ [\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}

function validatePhoneNumber (phone) {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(phone);
}

function validateAge (age) {
    return age >= 15 && age <= 45;
}

function validateStatus (status) {
    const acceptedValues = ["school", "college", "trainee", "employer" ];

    return acceptedValues.indexOf(status) > -1;
}


function validateExperience (experience) {
    return experience > 0 && experience < 4; 
}

function validateOthers (others) {
    return others.length > 4;
} 

function validateReason (reason) {
    return reason.tostring;
}





function validateRegistrationForm (formValues) {
   const result =  {
       username: validateUserName(formValues.username),
       email: validateEmailAddress(formValues.email),
       phone: validatePhoneNumber(formValues.phone),
       age: validateAge(formValues.age),
       status: validateStatus(formValues.status),
       experience: validateExperience(formValues.experience)
   };

   return {isValid, result};
}




let field, isValid = true;

for(field in result) {
    isValid = isValid && result[field];
} 










window.addEventListener("load", () => {
    new main();
});
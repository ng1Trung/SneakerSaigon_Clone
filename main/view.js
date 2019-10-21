// lam cau noi, them chuc nang
const view = {}

view.showComponent = function (name) {

    switch (name) {


        case 'begin': {



            let app = document.getElementById('app');
             
            app.innerHTML = component.begin;
 
            window.postMessage({ name: 'mounted' });

            let signOut = document.getElementById('sign-out-btn')

            signOut.onclick = signOutHandler

            function signOutHandler() {

                firebase.auth().signOut()
                localStorage.removeItem('infor')
                location.reload(true)
    
            }

            if (typeof(localStorage.getItem('infor')) == 'string') {
                let objInfor = JSON.parse(localStorage.getItem('infor'))
                console.log(objInfor)
                let user = objInfor.user.displayName
                console.log(user)
                console.log(typeof(user))
                document.getElementById('current-user').innerText = 'Xin Chào' + " " + user
                
            }

            let button = document.getElementById('log-btn')

            button.onclick = signIn;

            function signIn() {
                view.showComponent('logIn')
            }
            
            // dang xuat
            

            break

        }
        case 'logIn': {

            let app = document.getElementById('app');

            app.innerHTML = component.logIn;

            let form = document.getElementById('form-link')

            form.onclick = register;

            function register() {

                view.showComponent('register')
                

            }

            let formsubmit = document.getElementById('log-in-form')

            formsubmit.onsubmit = formSubmitHandler

            function formSubmitHandler(event) {
                event.preventDefault()

                // get email password

                let logInInfor = {
                    email:formsubmit.email.value,
                    password:formsubmit.password.value

                }
                //check
                let validateResult = [

                    view.validate(logInInfor.email,'email-error','invalid email'),
                    view.validate(logInInfor.password,'password-error','invalid password')


                ]


                // submit

                if (check(validateResult)) {

                    controller.logIn(logInInfor)
                    
                }


                
            }

            break

        }

        case 'register': {

            let app = document.getElementById('app');

            app.innerHTML = component.register;

            let form = document.getElementById('form-link')

            form.onclick = logIn;

            function logIn() {

                view.showComponent('logIn')

            }

            let formsubmit = document.getElementById('register-form')

            formsubmit.onsubmit = formSubmitHandler

            function formSubmitHandler(event) {
                event.preventDefault()

                //1, get data

                let registerInfor = {
                    firstname:formsubmit.firstname.value,
                    lastname: formsubmit.lastname.value,
                    email: formsubmit.email.value,
                    password: formsubmit.password.value,
                    confirmPassword: formsubmit.confirmPassword.value
                }
                console.log(registerInfor)

                //2, xac thuc thong tin (validate infor)

                let validateResult = [
                    view.validate(registerInfor.firstname, 'firstname-error', 'invalid first name'),
                    view.validate(registerInfor.lastname, 'lastname-error', 'invalid last name'),
                    view.validate(registerInfor.email, 'email-error', 'invalid email'),
                    view.validate(registerInfor.password && registerInfor.password.length >= 6, 'password-error', 'invalid password'),
                    view.validate(registerInfor.confirmPassword && registerInfor.confirmPassword === registerInfor.password, 'confirmPassword-error', 'invalid confirm password'),
                ]



                //3, kiem tra, submit

                if (check(validateResult)) {
                    controller.register(registerInfor)
                }

            }

        }

    }

}
view.setText = function (id, text) {

    document.getElementById(id).innerText = text
    
}

view.validate = function(condition, id, text) {

    if (condition) {
        view.setText(id, '')
        return true
    }
    else {
        view.setText(id, text)
        return false
    }
}

function check(validateResult) {

    for (let result of validateResult) {

        if (!result) {
            return false
        }
    }
    return true

}

/*
view.disable = function (id) {

    document.getElementById(id).setAttribute('disabled',true)
    
}

view.enable = function (id) {

    document.getElementById(id).removeAttribute('disabled')
    
}
*/
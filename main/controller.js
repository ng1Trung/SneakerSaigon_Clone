const controller = {}



controller.signOut = function () {

    firebase.auth().onAuthStateChanged(onAuthStateChangedHandler)

    function onAuthStateChangedHandler(user) {
        
        
    }

    
}

controller.register = async function (registerInfor) {

    let email = registerInfor.email
    let password = registerInfor.password
    let displayName = registerInfor.firstname + " "+registerInfor.lastname

    // tao user
    // update profile
    // send mail 

    //view.disable('register-btn')
    try {
        // tao user
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        //update profile
        await firebase.auth().currentUser.updateProfile({
            displayName: displayName
        })
        //send mail 
        await firebase.auth().currentUser.sendEmailVerification()
        view.setText('register-success','An email has been sent to your email address')

        
    } catch (error) {
        view.setText('register-error',error.message)
        
    }
    //view.enable('register-btn')
}

controller.logIn = async function (logInInfor) {

    let email = logInInfor.email
    let password = logInInfor.password
    //view.disable('register-btn')
    
   

    try {

         let res = await firebase.auth().signInWithEmailAndPassword(email,password)

         if (res.user && res.user.emailVerified) {
             
             let data = localStorage.setItem('infor', JSON.stringify(res));

            
            view.showComponent('begin')

             

             
         } else {

            throw new Error('Must have verified email')
             
         }
                
        
    } catch (error) {
        view.setText('logIn-error',error.message)
        
    }
    //view.enable('register-btn')
    
}



document.addEventListener("DOMContentLoaded", function(){
    const signInForm = document.getElementById("signInForm");
    const signupLink = document.getElementById("signupLink");
    const signupOverlay = document.getElementById("signupOverlay");
    const signupForm = document.getElementById("signupForm");
    const signinLink = document.getElementById("signinLink");

    signupLink.addEventListener("click", function()
    {
        signupOverlay.style.display = "block";
    });

    signinLink.addEventListener("click", function()
    {
        signupOverlay.style.display = "none";
    });

    signInForm.addEventListener("submit", function(e)
    {
        e.preventDefault();
        //your sign in logic here
        alert("Sign in clicked!");
    });

    signupForm.addEventListener("submit", function(e)
    {
        e.preventDefault();
        //your sign-up logic here

        //get form input values
        const newUsername = document.getElementById("newUsername").value;
        const newPassword = document.getElementById("newPassword").value;
        const newEmail = document.getElementById("newEmail").value;
        const newMobile = document.getElementById("newMobile").value;

        //Validate and process the sign-up data
        if(newUsername && newPassword && newEmail && newMobile)
        {
            //your sign-up logic here
            alert("Sign up successful!");
        }
        else{
            alet("Please fill in all fields.");
        }


        alert("Sign up clicked");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const forgotPasswordLink = document.getElementById("forgotPasswordLink");

    forgotPasswordLink.addEventListener("click", function (e) {
        e.preventDefault();
        // Add your password reset logic here, e.g., show a modal or redirect to a password reset page.
        alert("Forgot Password link clicked. it will be available after making the full code");
    });
});
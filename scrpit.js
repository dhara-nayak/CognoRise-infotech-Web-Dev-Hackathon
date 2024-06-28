document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = form.elements["name"].value;
        const email = form.elements["email"].value;
        const phone = form.elements["phone"].value;
        const age = form.elements["age"].value;
        const gender = form.elements["gender"].value;

        if (name && email && phone && age && gender) {
            successMessage.style.display = "block";
            form.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const passcode = "1234";  // Set your passcode here

    function checkPasscode() {
        const inputPasscode = document.getElementById("passcode-input").value;
        if (inputPasscode === passcode) {
            document.getElementById("passcode-popup").style.display = "none";
            document.getElementById("page-content").classList.remove("blurred");
            showNotification("Access granted!"); // Show custom notification
        } else {
            alert("Incorrect passcode. Please try again.");
            document.getElementById("passcode-input").value = ""; // Clear the input field
        }
    }

    window.checkPasscode = checkPasscode;

    // Automatically add blur when the page loads
    document.getElementById("page-content").classList.add("blurred");

    // Detect 'Enter' key press in the passcode input field
    document.getElementById("passcode-input").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent form submission if any
            checkPasscode(); // Trigger the passcode check function
        }z
    });

    // Function to show custom notification
    function showNotification(message) {
        const notification = document.createElement("div");
        notification.classList.add("notification");
        notification.textContent = message;

        // Append the notification to the body
        document.body.appendChild(notification);

        // Remove the notification after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 1000);
    }
});

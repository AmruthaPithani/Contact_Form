document.getElementById("message").addEventListener("input", function () {
  const maxLength = 300;
  const currentLength = this.value.length;
  document.getElementById("charCount").textContent = `${currentLength}/${maxLength}`;

  if (currentLength > maxLength) {
    this.value = this.value.substring(0, maxLength);
  }
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMsg = document.getElementById("successMsg");

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMsg.textContent = "";

  let valid = true;

  if (name === "") {
    nameError.textContent = "Please enter your name.";
    valid = false;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  if (email === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  }

  if (message === "") {
    messageError.textContent = "Message cannot be empty.";
    valid = false;
  }

  if (valid) {
    successMsg.textContent = "✅ Message submitted successfully!";
    document.getElementById("contactForm").reset();
    document.getElementById("charCount").textContent = "0/300";
  }
});

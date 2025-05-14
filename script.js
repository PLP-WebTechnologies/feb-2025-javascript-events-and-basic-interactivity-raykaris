 // Button Click Event
 const changeColorBtn = document.getElementById("changeColorBtn");
 changeColorBtn.addEventListener("click", () => {
   changeColorBtn.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
   changeColorBtn.textContent = "Clicked!";
 });

 // Double-click Secret
 changeColorBtn.addEventListener("dblclick", () => {
   document.getElementById("secretMsg").style.display = "block";
 });

 // Keypress Detection
 document.addEventListener("keypress", (e) => {
   console.log("Key Pressed:", e.key);
 });

 // Tabs Logic
 const tabButtons = document.querySelectorAll('.tab-button');
 const tabContents = document.querySelectorAll('.tab-content');

 tabButtons.forEach(btn => {
   btn.addEventListener('click', () => {
     tabButtons.forEach(b => b.classList.remove('active'));
     tabContents.forEach(c => c.classList.remove('active'));

     btn.classList.add('active');
     document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
   });
 });

 // Form Validation
 const emailInput = document.getElementById("email");
 const passwordInput = document.getElementById("password");
 const emailFeedback = document.getElementById("emailFeedback");
 const passwordFeedback = document.getElementById("passwordFeedback");

 emailInput.addEventListener("input", () => {
   const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
   emailFeedback.textContent = emailValid ? "" : "Invalid email format";
 });

 passwordInput.addEventListener("input", () => {
   passwordFeedback.textContent = passwordInput.value.length < 8
     ? "Password must be at least 8 characters"
     : "";
 });

 document.getElementById("signupForm").addEventListener("submit", (e) => {
   e.preventDefault();
   alert("Form submitted successfully!");
 });
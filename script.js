document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Bu yerda ma’lumotlarni bazaga yuborish mumkin

  alert("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
  // Istasangiz, boshqa sahifaga yo'naltirish:
  // window.location.href = "home.html";
});
document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Bu yerda siz foydalanuvchi ma'lumotlarini tekshirishingiz yoki saqlashingiz mumkin

  // Muvaffaqiyatli ro‘yxatdan o‘tgach asosiy sahifaga o‘tamiz
  window.location.href = "home.html";
});
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Formani yashiramiz, asosiy sahifani ko‘rsatamiz
  document.getElementById("register-section").style.display = "none";
  document.getElementById("main-content").style.display = "block";
});
function closeSplash() {
  document.getElementById("splash-message").style.display = "none";
}
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Oddiy tekshiruv (demo maqsadida). Keyinroq localStorage bilan bog‘laymiz.
  const storedEmail = localStorage.getItem("registeredEmail");
  const storedPassword = localStorage.getItem("registeredPassword");

  if (email === storedEmail && password === storedPassword) {
    alert("Muvaffaqiyatli kirdingiz!");
    window.location.href = "home.html";
  } else {
    alert("Email yoki parol noto‘g‘ri!");
  }
});
localStorage.setItem("registeredEmail", email);
localStorage.setItem("registeredPassword", password);
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // localStorage dan ma'lumotni tekshirish
  const storedEmail = localStorage.getItem("registeredEmail");
  const storedPassword = localStorage.getItem("registeredPassword");

  if (email === storedEmail && password === storedPassword) {
    alert("Muvaffaqiyatli kirdingiz!");
    window.location.href = "home.html"; // Kirgach yo‘naltiradigan sahifa
  } else {
    alert("Email yoki parol noto‘g‘ri!");
  }
});


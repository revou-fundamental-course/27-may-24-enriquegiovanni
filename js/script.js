document.addEventListener("DOMContentLoaded", function () { const nameSpan = document.getElementById("name"); const name = prompt("Nama anda: ", ""); if (name) { nameSpan.textContent = name; }});

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah form melakukan reload halaman

  const name = document.getElementById('name').value;
  const birthdate = document.getElementById('birthdate').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById('message').value;

  const result = `Nama: ${name}\nTanggal Lahir: ${birthdate}\nJenis Kelamin: ${gender}\nPesan: ${message}`;

  alert(result);
});
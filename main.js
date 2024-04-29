// Tentukan waktu akhir (dalam milidetik)
var countDownDate = new Date("May 5, 2024 15:37:25").getTime();

// Fungsi untuk memperbarui penghitung waktu setiap 1 detik
var x = setInterval(function() {

  // Dapatkan waktu saat ini
  var now = new Date().getTime();

  // Hitung selisih antara waktu akhir dan waktu saat ini
  var distance = countDownDate - now;

  // Hitung waktu untuk hari, jam, menit, dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Tampilkan hasilnya di elemen dengan id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Jika penghitung waktu selesai, tulis teks tertentu
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Waktu Habis";
  }
}, 1000);


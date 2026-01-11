const API_URL = "https://script.google.com/macros/s/AKfycbwqZYghamgLWcq9TwVL1ieFfACyBZESeF3qFPUK5yKCwzvAJ3p6p_IhdVbcHEXJi_B0ww/exec";

function kaydet() {

  const veri = {
    adSoyAd: document.getElementById("adSoyAd").value.trim(),
    adSoyad: document.getElementById("adSoyad").value.trim(),
    telefon: document.getElementById("telefon").value.trim(),
    gun: document.getElementById("gun").value,
    saat: document.getElementById("saat").value,
    kisiSayisi: document.getElementById("kisiSayisi").value,
    oda: document.getElementById("oda").value,
    odeme: document.getElementById("odeme").value,
    notlar: document.getElementById("notlar").value.trim()
  };

  // Basit doğrulama
  if (!veri.adSoyad || !veri.telefon || !veri.gun || !veri.saat) {
    alert("Lütfen Ad Soyad, Telefon, Gün ve Saat alanlarını doldurunuz.");
    return;
  }

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(veri),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.json())
  .then(_ => alert("Randevu kaydedildi"))
  .catch(err => {
    console.error(err);
    alert("Kayıt sırasında hata oluştu");
  });
}

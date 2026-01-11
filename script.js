const API_URL = "https://script.google.com/macros/s/AKfycbwqZYghamgLWcq9TwVL1ieFfACyBZESeF3qFPUK5yKCwzvAJ3p6p_IhdVbcHEXJi_B0ww/exec";

function kaydet() {

  const veri = {
    adSoyad: document.getElementById("adSoyad").value.trim(),
    telefon: document.getElementById("telefon").value.trim(),
    gun: document.getElementById("gun").value,
    saat: document.getElementById("saat").value,
    kisiSayisi: document.getElementById("kisiSayisi").value,
    oda: document.getElementById("oda").value,
    odeme: document.getElementById("odeme").value,
    notlar: document.getElementById("notlar").value.trim()
  };

  if (!veri.adSoyad || !veri.telefon || !veri.gun || !veri.saat) {
    alert("Lütfen Ad Soyad, Telefon, Gün ve Saat alanlarını doldurun.");
    return;
  }

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(veri)
  })
  .then(res => res.json())
  .then(() => {
    alert("Randevu kaydedildi ✅");
  })
  .catch(err => {
    console.error(err);
    alert("Kayıt sırasında hata oluştu ❌");
  });
}

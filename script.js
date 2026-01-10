function kaydet() {

  const veri = {
    musteriadSoyad: document.getElementById("adSoyad").value,
    telefon: document.getElementById("telefon").value,
    gun: document.getElementById("gun").value,
    saat: document.getElementById("saat").value,
    kisiSayisi: document.getElementById("kisiSayisi").value,
    oda: document.getElementById("oda").value, // 🔥 EN ÖNEMLİ SATIR
    notlar: document.getElementById("notlar").value
  };

  fetch("BURAYA_APPS_SCRIPT_URL_GELECEK", {
    method: "POST",
    body: JSON.stringify(veri),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.text())
  .then(cevap => {
    alert("Randevu kaydedildi");
    console.log(veri); // 🔍 TEST İÇİN
  })
  .catch(err => {
    alert("Hata oluştu");
    console.error(err);
  });
}

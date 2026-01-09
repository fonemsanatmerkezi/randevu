const API_URL = "APPS_SCRIPT_URL_BURAYA";

function kaydet() {
  const data = {
    adSoyad: document.getElementById("adSoyad").value,
    telefon: document.getElementById("telefon").value,
    gun: document.getElementById("gun").value,
    saat: document.getElementById("saat").value,
    kisiSayisi: document.getElementById("kisiSayisi").value,
    oda: document.getElementById("oda").value,
    notlar: document.getElementById("notlar").value
  };

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(() => alert("Randevu kaydedildi"))
  .catch(() => alert("Hata oluştu"));
}

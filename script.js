function kaydet() {

  const veri = {
    adSoyad: document.getElementById("adSoyad").value,
    telefon: document.getElementById("telefon").value,
    gun: document.getElementById("gun").value,
    saat: document.getElementById("saat").value,
    kisiSayisi: document.getElementById("kisiSayisi").value,
    oda: document.getElementById("oda").value,
    odeme: document.getElementById("odeme").value,
    notlar: document.getElementById("notlar").value
  };

  fetch("APPS_SCRIPT_URL_BURAYA", {
    method: "POST",
    body: JSON.stringify(veri),
    headers: { "Content-Type": "application/json" }
  })
  .then(() => alert("Randevu kaydedildi"))
  .catch(() => alert("Hata oluştu"));
}

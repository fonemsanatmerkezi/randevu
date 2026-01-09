const API_URL = "https://script.google.com/macros/s/AKfycbwB1oCleAyUsBllYeXWgvD9vDGI05bHoza_DRf-wenCiSmEkEVMEsLkkV0CO0RA82w1wA/exec";

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
  .then(() => {
    alert("Randevu kaydedildi");
    document.querySelectorAll("input, textarea").forEach(e => e.value = "");
  })
  .catch(() => {
    alert("Hata oluştu");
  });
}

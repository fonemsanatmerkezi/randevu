alert("script.js yüklendi");

const API_URL = "https://script.google.com/macros/s/AKfycbwnv-b64O-on-6RznkGm-XyUQ0EZkwcIlORtiSMUYXmIdj-yFuA7nn_REXFj3ehkMdoyA/exec";

function kaydet() {
  alert("Kaydet fonksiyonu çalıştı");

  const data = {
    adSoyad: document.getElementById("adSoyad").value,
    telefon: document.getElementById("telefon").value,
    gun: document.getElementById("gun").value,
    saat: document.getElementById("saat").value,
    kisi: document.getElementById("kisi").value,
    oda: document.getElementById("oda").value,
    odeme: document.getElementById("odeme").value,
    notlar: document.getElementById("notlar").value
  };

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(r => r.text())
    .then(t => {
      alert("Sunucudan cevap geldi:\n" + t);
    })
    .catch(err => {
      alert("FETCH HATASI: " + err);
    });
}

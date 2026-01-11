const API_URL = "https://script.google.com/macros/s/AKfycbwnv-b64O-on-6RznkGm-XyUQ0EZkwcIlORtiSMUYXmIdj-yFuA7nn_REXFj3ehkMdoyA/exec";

function kaydet() {
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

  document.getElementById("mesaj").innerText = "Kaydediliyor...";

  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(res => {
      document.getElementById("mesaj").innerText = res.message;
    })
    .catch(err => {
      document.getElementById("mesaj").innerText = "Bağlantı hatası";
      console.error(err);
    });
}

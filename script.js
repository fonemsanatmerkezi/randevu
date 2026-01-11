const API_URL =
  "https://script.google.com/macros/s/AKfycbwnv-b64O-on-6RznkGm-XyUQ0EZkwcIlORtiSMUYXmIdj-yFuA7nn_REXFj3ehkMdoyA/exec";

function kaydet() {
  document.getElementById("mesaj").innerText = "Kaydediliyor...";

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
    body: JSON.stringify(data)
  })
    .then(() => {
      document.getElementById("mesaj").innerText =
        "Randevu başarıyla kaydedildi";
    })
    .catch(() => {
      document.getElementById("mesaj").innerText =
        "Kayıt alındı (yanıt engellendi)";
    });
}

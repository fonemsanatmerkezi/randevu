const form = document.getElementById("randevuForm");

form.addEventListener("submit", e => {
  e.preventDefault();

  const data = {
    adsoyad: adsoyad.value,
    telefon: telefon.value,
    gun: gun.value,
    saat: saat.value,
    kisi: kisi.value,
    oda: oda.value,
    odeme: odeme.value,
    notlar: notlar.value
  };

  fetch("https://script.google.com/macros/s/AKfycbzwyqT1WwVOZ48jR69FuCNy2pwg-DU3QWDjMX6cvxKPCPFblN41e0m83t1LWt1ewMTTQw/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())
  .then(res => {
    if (res.status === "success") {
      alert("Kayıt başarıyla alındı ✅");
      form.reset();
    } else {
      alert("Kayıt hatası ❌");
    }
  })
  .catch(err => {
    console.error(err);
    alert("Bağlantı hatası ❌");
  });
});

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

  fetch("BURAYA_EXEC_URL_YAPIŞTIR", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(veri)
  })
  .then(r => r.text())
  .then(t => {
    if (t === "OK") {
      alert("✅ Randevu kaydedildi");
    } else {
      alert("❌ " + t);
    }
  })
  .catch(err => {
    alert("❌ Bağlantı hatası");
    console.error(err);
  });
}

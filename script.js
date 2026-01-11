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

  fetch("https://script.google.com/macros/s/AKfycbzTXLy2L0l3qhEYcoS_Bp2Ip_WdT7J5Fsg0L5WT4iPDSuI1WLC8NWtHKTEKeeRYHKAcDg/exec", {
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

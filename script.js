const EXEC_URL = "https://script.google.com/macros/s/AKfycbx2EtxqxR0BzSuoDAnh3gJfPgw1g-JDdgc3r60TTJPTpgQ7WJHzECcRDBlrHWmwhA2u/exec"; // /exec URL

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

  fetch(EXEC_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(veri)
  })
  .then(r => r.json())
  .then(res => {
    if (res.success) {
      alert("✅ " + res.message);
      temizleForm();
    } else {
      alert("❌ " + res.message);
    }
  })
  .catch(err => {
    alert("❌ Bağlantı hatası");
    console.error(err);
  });
}

function temizleForm() {
  document.getElementById("adSoyad").value = "";
  document.getElementById("telefon").value = "";
  document.getElementById("gun").value = "";
  document.getElementById("saat").value = "";
  document.getElementById("kisiSayisi").value = 1;
  document.getElementById("oda").selectedIndex = 0;
  document.getElementById("odeme").selectedIndex = 0;
  document.getElementById("notlar").value = "";
}

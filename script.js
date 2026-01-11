const EXEC_URL = "https://script.google.com/macros/s/AKfycby3K3nV1ARg00Z31wO4vFjpv16aRNu9fK-5QtHzKI-cy_WX4UNnX3AFfbK7xCFXfRAn/exec"; // Apps Script /exec URL

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
    alert(res.success ? "✅ " + res.message : "❌ " + res.message);
    if(res.success) temizleForm();
  })
  .catch(err => {
    alert("❌ Bağlantı hatası, URL ve erişim ayarlarını kontrol et");
    console.error(err);
  });
}

function rapor() {
  const baslangic = document.getElementById("baslangic").value;
  const bitis = document.getElementById("bitis").value;
  let url = EXEC_URL;
  if(baslangic && bitis) url += `?baslangic=${baslangic}&bitis=${bitis}`;

  fetch(url)
    .then(r => r.json())
    .then(data => {
      const alan = document.getElementById("raporAlani");
      if(!data.length) alan.textContent = "📌 Randevu bulunamadı.";
      else alan.textContent = JSON.stringify(data, null, 2);
    })
    .catch(err => {
      alert("❌ Rapor alınırken hata oluştu");
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

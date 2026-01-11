const EXEC_URL = "https://script.google.com/macros/s/AKfycby3K3nV1ARg00Z31wO4vFjpv16aRNu9fK-5QtHzKI-cy_WX4UNnX3AFfbK7xCFXfRAn/exec"; // Apps Script /exec URL

function kaydet() {
  // ID otomatik oluşturabiliriz (timestamp kullanıyorum)
  const id = new Date().getTime();

  const veri = {
    id: id,
    musteriadisoyadi: document.getElementById("musteriadisoyadi").value,
    musteritelefonu: document.getElementById("musteritelefonu").value,
    randevutarihi: document.getElementById("randevutarihi").value,
    randevusaati: document.getElementById("randevusaati").value,
    kisisayisi: document.getElementById("kisisayisi").value,
    odaadi: document.getElementById("odaadi").value,
    odemedurumu: document.getElementById("odemedurumu").value,
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
  document.getElementById("musteriadisoyadi").value = "";
  document.getElementById("musteritelefonu").value = "";
  document.getElementById("randevutarihi").value = "";
  document.getElementById("randevusaati").value = "";
  document.getElementById("kisisayisi").value = 1;
  document.getElementById("odaadi").selectedIndex = 0;
  document.getElementById("odemedurumu").selectedIndex = 0;
  document.getElementById("notlar").value = "";
}

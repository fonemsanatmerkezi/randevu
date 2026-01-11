const form = document.getElementById("randevuForm");
const mesaj = document.getElementById("mesaj");

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

  fetch("YOUR_DEPLOY_URL_HERE", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.json())
  .then(res => {
    if (res.success) {
      mesaj.innerHTML = "<span style='color:#22c55e'>Kayıt başarılı ✅</span>";
      form.reset();
    } else {
      mesaj.innerHTML = "<span style='color:#f87171'>Kayıt hatası ❌</span>";
    }
  })
  .catch(() => {
    mesaj.innerHTML = "<span style='color:#f87171'>Bağlantı hatası ❌</span>";
  });
});

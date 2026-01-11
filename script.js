const form = document.getElementById("randevuForm");
const mesaj = document.getElementById("mesaj");

form.addEventListener("submit", e => {
  e.preventDefault();

  const data = {
    adsoyad: document.getElementById("adsoyad").value,
    telefon: document.getElementById("telefon").value,
    gun: document.getElementById("gun").value,
    saat: document.getElementById("saat").value,
    kisi: document.getElementById("kisi").value,
    oda: document.getElementById("oda").value,
    odeme: document.getElementById("odeme").value,
    notlar: document.getElementById("notlar").value
  };

  fetch("https://script.google.com/macros/s/AKfycbxmEBr31-s1XcXUfQMuI-aJhmvbTEYGobp-uJBS4zQawN4RMBos0l281Hh0mjr3pN9J/exec", {
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
  .catch(err => {
    console.error(err);
    mesaj.innerHTML = "<span style='color:#f87171'>Bağlantı hatası ❌</span>";
  });
});

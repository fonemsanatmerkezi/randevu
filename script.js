const API_URL = "https://script.google.com/macros/s/AKfycbwgV6kTyeafxp9YcODP6rZYh3kt2YFDdybBLVMfgvdzyz_YViTrHLYFz6hWpsJhPBJO/exec";

function randevuKaydet() {
  const data = {
    adSoyad: document.getElementById("adSoyad").value,
    telefon: document.getElementById("telefon").value,
    gun: document.getElementById("gun").value,
    saat: document.getElementById("saat").value,
    kisiSayisi: document.getElementById("kisi").value,
    oda: document.getElementById("oda").value,
    odeme: document.getElementById("odeme").value,
    notlar: document.getElementById("notlar").value
  };

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(() => {
    alert("Randevu başarıyla kaydedildi");
  })
  .catch(() => {
    alert("Randevu alınırken bir hata oluştu");
  });
}

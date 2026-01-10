// ⚠️ Kendi Apps Script URL'ni buraya koy
const URL = "APPS_SCRIPT_URL_BURAYA";

// Rapor getir fonksiyonu
function raporGetir() {
  const baslangic = document.getElementById("baslangic").value;
  const bitis = document.getElementById("bitis").value;

  let istek = URL;

  if (baslangic && bitis) {
    istek += `?baslangic=${baslangic}&bitis=${bitis}`;
  }

  fetch(istek)
    .then(res => res.json())
    .then(veri => tabloYaz(veri))
    .catch(err => {
      console.error(err);
      alert("Rapor alınırken bir hata oluştu.");
    });
}

// Tabloya yazma ve boş mesaj kontrolü
function tabloYaz(veri) {
  const tbody = document.querySelector("#tablo tbody");
  const mesaj = document.getElementById("bosMesaj");

  // Tabloyu temizle
  tbody.innerHTML = "";

  // Eğer veri yoksa mesaj göster
  if (veri.length === 0) {
    mesaj.style.display = "block";
    return;
  }

  // Veri varsa mesajı gizle
  mesaj.style.display = "none";

  // Her randevuyu tabloya ekle
  veri.forEach(r => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${r[1]}</td>
      <td>${r[2]}</td>
      <td>${r[3]}</td>
      <td>${r[4]}</td>
      <td>${r[5]}</td>
      <td>${r[6]}</td>
      <td>${r[7]}</td>
      <td>${r[8]}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Sayfa açılınca otomatik olarak bugünün randevularını getir
window.onload = raporGetir;

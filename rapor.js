const URL = "APPS_SCRIPT_URL_BURAYA";

function raporGetir() {
  const baslangic = document.getElementById("baslangic").value;
  const bitis = document.getElementById("bitis").value;

  let istek = URL;

  if (baslangic && bitis) {
    istek += `?baslangic=${baslangic}&bitis=${bitis}`;
  }

  fetch(istek)
    .then(res => res.json())
    .then(veri => tabloYaz(veri));
}

function tabloYaz(veri) {
  const tbody = document.querySelector("#tablo tbody");
  tbody.innerHTML = "";

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

// Sayfa açılınca BUGÜNÜN KAYITLARI
window.onload = raporGetir;

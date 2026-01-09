const API_URL = "https://script.google.com/macros/s/AKfycbzYwsHWw53vh1ApVp7eUqV9mpXrMDgG904cd5A2sYRGD97-74mnm0AsczQakNJgPT_Bvw/exec";

let tumRandevular = [];

function giris() {
  document.querySelector(".login").classList.add("hidden");
  document.querySelector(".panel").classList.remove("hidden");
  yukle();
}

function yukle() {
  fetch(API_URL)
    .then(r => r.json())
    .then(data => {
      oda.innerHTML = "";
      data.odalar.forEach(o => {
        oda.innerHTML += `<option>${o}</option>`;
      });
      tumRandevular = data.randevular;
      listele();
    });
}

function kaydet() {
  if (!oda.value || !tarih.value || !saat.value) {
    alert("Oda, gün ve saat seçilmeli");
    return;
  }

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      sifre: sifre.value,
      oda: oda.value,
      ad: ad.value,
      tarih: tarih.value,
      saat: saat.value,
      not: not.value
    })
  })
  .then(r => r.json())
  .then(d => {
    if (d.durum === "dolu") {
      alert("Bu oda bu saatte dolu");
    }
    yukle();
  });
}

function listele() {
  liste.innerHTML = "";
  tumRandevular.forEach(r => {
    liste.innerHTML += `
      <li>
        🏠 <b>${r[1]}</b><br>
        👤 ${r[2]}<br>
        📅 ${r[3]} ⏰ ${r[4]}<br>
        📝 ${r[5] || "-"}
      </li>
    `;
  });
}

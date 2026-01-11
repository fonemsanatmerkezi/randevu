const API_URL = "https://script.google.com/macros/s/AKfycbw1oUGP0DC46S1zlnC8hSJ9CmnenawehHVVOPN35v0UzQFHW3x7ofzzBZt_lNj4UAVNdg/exec";

function raporGetir() {
  const bas = document.getElementById("baslangic").value;
  const bit = document.getElementById("bitis").value;
  const sonuc = document.getElementById("sonuc");

  let url = API_URL;
  if (bas && bit) {
    url += `?baslangic=${bas}&bitis=${bit}`;
  }

  fetch(url)
    .then(res => res.json())
    .then(data => {
      sonuc.innerHTML = "";

      if (data.length === 0) {
        sonuc.innerHTML = `<div class="yok">❌ Randevu bulunamadı</div>`;
        return;
      }

      data.forEach(r => {
        sonuc.innerHTML += `
          <div class="kart">
            <b>${r[1]}</b><br>
            📞 ${r[2]}<br>
            📅 ${tarih(r[3])} ${saat(r[4])}<br>
            👥 ${r[5]} | 🏠 ${r[6]}<br>
            💳 ${r[7]}<br>
            📝 ${r[8] || "-"}
          </div>
        `;
      });
    })
    .catch(() => {
      sonuc.innerHTML = `<div class="yok">⚠️ Rapor alınırken hata oluştu</div>`;
    });
}

function tarih(d) {
  return new Date(d).toLocaleDateString("tr-TR");
}

function saat(d) {
  return new Date(d).toLocaleTimeString("tr-TR", {
    hour: "2-digit",
    minute: "2-digit"
  });
}

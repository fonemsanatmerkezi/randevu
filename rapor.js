const API_URL = "https://script.google.com/macros/s/AKfycbwgV6kTyeafxp9YcODP6rZYh3kt2YFDdybBLVMfgvdzyz_YViTrHLYFz6hWpsJhPBJO/exec";

function raporGetir() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const alan = document.getElementById("raporAlan");
      alan.innerHTML = "";

      if (!data || data.length === 0) {
        alan.innerHTML = "<p>Randevu bulunamadı</p>";
        return;
      }

      data.forEach(r => {
        alan.innerHTML += `
          <div class="kart">
            <b>${r[1]}</b><br>
            📞 ${r[2]}<br>
            📅 ${r[3]} ⏰ ${r[4]}<br>
            👥 ${r[5]} | 🏠 ${r[6]}<br>
            💳 ${r[7]}<br>
            📝 ${r[8] || "-"}
          </div>
        `;
      });
    })
    .catch(() => {
      document.getElementById("raporAlan").innerHTML =
        "<p>Rapor alınırken bir hata oluştu</p>";
    });
}

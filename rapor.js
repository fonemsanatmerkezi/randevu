<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <title>Randevu Raporu</title>

  <style>
    body {
      font-family: Arial, sans-serif;
      background: #111;
      color: #fff;
      padding: 20px;
    }

    h2 {
      text-align: center;
    }

    .kart {
      background: #1e1e1e;
      border-radius: 8px;
      padding: 12px;
      margin-bottom: 10px;
      box-shadow: 0 0 8px rgba(0,255,255,0.3);
    }

    p {
      text-align: center;
      opacity: 0.8;
    }
  </style>
</head>

<body onload="raporGetir()">

  <h2>📋 Randevu Raporu</h2>

  <div id="raporAlan">
    <p>Yükleniyor...</p>
  </div>

  <script>
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
                👥 ${r[5]} kişi | 🏠 ${r[6]}<br>
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
  </script>

</body>
</html>

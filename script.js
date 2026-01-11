const API_URL = "https://script.google.com/macros/s/AKfycbxxeYiCXxLQ-U8u8IwFWkXVHOAofzXnAXurBBtnTx9iWrTU81kMk88G0V6FoE3JyaRtCg/exec";

function raporGetir() {
  const bas = document.getElementById("baslangic").value;
  const bit = document.getElementById("bitis").value;
  const sonuc = document.getElementById("sonuc");

  let url = API_URL;
  if (bas && bit) url += `?baslangic=${bas}&bitis=${bit}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      sonuc.innerHTML = "";
      if (!data.length) { sonuc.innerHTML = "Randevu bulunamadı ❌"; return; }

      data.forEach(r => {
        sonuc.innerHTML += `
          <div>
            <b>${r[1]}</b> 📞 ${r[2]} 📅 ${r[3]} ${r[4]} 👥 ${r[5]} 🏠 ${r[6]} 💳 ${r[7]} 📝 ${r[8]||"-"}
          </div>
        `;
      });
    });
}

const EXEC_URL = "https://script.google.com/macros/s/AKfycbyFBQGFizX8FbNv-4JVChqXvVP3zuA-EKeqT0K_PiUWYpGKBvEhljqojj82yLu70cl1/exec"; // Apps Script /exec URL

function kaydet() {
  const veri = {
    adSoyad: document.getElementById("adSoyad").value,
    telefon: document.getElementById("telefon").value,
    gun: document.getElementById("gun").value,
    saat: document.getElementById("saat").value,
    kisiSayisi: document.getElementById("kisiSayisi").value,
    oda: document.getElementById("oda").value,
    odeme: document.getElementById("odeme").value,
    notlar: document.getElementById("notlar").value
  };

  fetch(EXEC_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(veri)
  })
  .then(r => r.text())
  .then(t => {
    if (t === "OK") {
      alert("✅ Randevu kaydedildi");
      temizleForm();
    } else {
      alert("❌ " + t);
    }
  })
  .catch(err => {
    alert("❌ Bağlantı hatası");
    console.error(err);
  });
}

function temizleForm() {
  document.getElementById("adSoyad").value = "";
  document.getElementById("telefon").value = "";
  document.getElementById("gun").value = "";
  document.getElementById("saat").value = "";
  document.getElementById("kisiSayisi").value = 1;
  document.getElementById("oda").selectedIndex = 0;
  document.getElementById("odeme").selectedIndex = 0;
  document.getElementById("notlar").value = "";
}

function raporGetir() {
  const baslangic = document.getElementById("baslangic").value;
  const bitis = document.getElementById("bitis").value;

  let url = EXEC_URL;
  if (baslangic && bitis) {
    url += `?baslangic=${baslangic}&bitis=${bitis}`;
  }

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const tbody = document.querySelector("#raporTablo tbody");
      tbody.innerHTML = "";
      if (data.length === 0) {
        tbody.innerHTML = "<tr><td colspan='9'>Randevu bulunamadı</td></tr>";
        return;
      }

      data.forEach(r => {
        const tr = document.createElement("tr");
        r.forEach(col => {
          const td = document.createElement("td");
          td.textContent = col || "";
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });
    })
    .catch(err => {
      alert("❌ Rapor alınırken hata oluştu");
      console.error(err);
    });
}

function raporYazdir() {
  const div = document.querySelector(".rapor-alani");
  const yeniPencere = window.open("");
  yeniPencere.document.write(div.innerHTML);
  yeniPencere.print();
  yeniPencere.close();
}

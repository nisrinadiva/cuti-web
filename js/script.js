javascript;
function keForm() {
  window.location.href = "form.html";
}

function reviewForm() {
  let nama = document.getElementById("nama").value.trim();
  let divisi = document.getElementById("divisi").value.trim();
  let alasan = document.getElementById("alasan").value.trim();
  let tanggal = document.getElementById("tanggal").value.trim();
  if (!nama || !divisi || !alasan || !tanggal) {
    alert("Harap isi semua data sebelum melanjutkan!");
    return; 
  }
  let ttd = canvas.toDataURL();

  localStorage.setItem(
    "reviewCuti",
    JSON.stringify({ nama, divisi, alasan, tanggal, ttd })
  );

  window.location.href = "review.html";
}

function loadReview() {
  let data = JSON.parse(localStorage.getItem("reviewCuti"));
  if (!data) return;

  document.getElementById("revNama").textContent = data.nama;
  document.getElementById("revDiv").textContent = data.divisi;
  document.getElementById("revAlasn").textContent = data.alasan;
  document.getElementById("revTgl").textContent = data.tanggal;
  document.getElementById("revTTD").src = data.ttd;
}

function submit() {
  let data = JSON.parse(localStorage.getItem("reviewCuti"));
  let list = JSON.parse(localStorage.getItem("cutiList")) || [];

  list.push({ ...data, status: "Menunggu Persetujuan" }); //disini saya pakai kondisi dimana user sedang menunggu persetujuan saja pak
  localStorage.setItem("cutiList", JSON.stringify(list));

  window.location.href = "index.html";
}

function loadHome() {
  let list = JSON.parse(localStorage.getItem("cutiList")) || [];
  let ul = document.getElementById("leaveList");

  if (!ul) return;
  ul.innerHTML = "";

  list.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
<strong>${item.tanggal}</strong> <br><br>
Status: ${item.status}<br><br>
${
  item.status === "Menunggu Persetujuan"
    ? `<button onclick=\"reminder(${index})\">Kirim Reminder</button>`
    : ""
}
`;
    ul.appendChild(li);
  });
}

function reminder(i) {
  alert("Reminder telah dikirim ke atasan!");
}

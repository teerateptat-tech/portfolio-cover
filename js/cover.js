// บาร์โค้ด (ตกแต่งเฉยๆ สแกนไม่ได้)
document.querySelectorAll('.barcode').forEach(function (el) {
  var s = el.dataset.code, total = +el.dataset.w, html = '', used = 0, i = 0;
  while (used < total - 1) {
    var c = s.charCodeAt(i % s.length) + i * 7;
    var bar = [0.3, 0.5, 0.8, 1.2][c % 4], gap = [0.3, 0.5, 0.8][(c >> 2) % 3];
    if (used + bar + gap > total) break;
    html += '<i style="width:' + bar + 'mm;margin-right:' + gap + 'mm"></i>';
    used += bar + gap; i++;
  }
  el.innerHTML = html;
});
// qr
(function () {
  var box = document.getElementById('qr');
  if (window.QRCode) {
    new QRCode(box, { text: box.dataset.url, width: 512, height: 512, colorDark: '#070707', colorLight: '#ffffff', correctLevel: QRCode.CorrectLevel.M });
  } else {
    box.innerHTML = '<div style="height:100%;display:flex;align-items:center;justify-content:center;font:800 7pt JetBrains Mono,monospace;text-align:center">QR<br>(ต้องต่อเน็ต)</div>';
  }
})();
// แคปทีละหน้า #front / #back
(function () {
  var h = location.hash.replace('#', '');
  if (h === 'front' || h === 'back') document.body.classList.add('solo', 'solo-' + h);
})();

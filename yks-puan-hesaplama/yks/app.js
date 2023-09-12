let hesaplama = document.getElementById('hesap');

function hesap() {

    // türkçe fonksiyonu
let trdog = Number(document.getElementById('trdog').value);
let tryan = Number(document.getElementById('tryan').value);
let trnet = document.getElementById('trnet');
let trsonuc = trdog - (0.25 * tryan);
trnet.innerHTML = trsonuc;

    // sosyal fonksiyonu
let sosdog = Number(document.getElementById('sosdog').value);
let sosyan = Number(document.getElementById('sosyan').value);
let sosnet = document.getElementById('sosnet');
let sossonuc = sosdog - (0.25 * sosyan);
sosnet.innerHTML = sossonuc;

    // matematik fonksiyonu
let matdog = Number(document.getElementById('matdog').value);
let matyan = Number(document.getElementById('matyan').value);
let matnet = document.getElementById('matnet');
let matsonuc = matdog - (0.25 * matyan);
matnet.innerHTML = matsonuc;

    //fen bilgisi fonksiyonu

let fendog = Number(document.getElementById('fendog').value);
let fenyan = Number(document.getElementById('fenyan').value);
let fennet = document.getElementById('fennet');
let fensonuc = fendog - (0.25 * fenyan);
fennet.innerHTML = fensonuc;

    // toplam net fonksiyonu 
let topnet = document.getElementById('topnet');
let toplam = trsonuc + sossonuc + matsonuc + fensonuc;
topnet.innerHTML = toplam;

    //toplam puan fonksiyonu

    let toppuan = document.getElementById('toppuan');
    let toplamp = toplam * 4.25
    toppuan.innerHTML = toplamp;
}
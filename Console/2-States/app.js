let kasa = [1, 0, 2, 0, 3, 0, 4, 0];
let sayi = [0, 2, 4, 6];

i = sayi[Math.floor(Math.random() * 4)];
console.log(i);
while (kasa[i + 1] < 1500) {
    kasa[i + 1] += Math.floor(Math.random() * 100);
    console.log("Kasa " + kasa[i] % 5, kasa[i + 1]);
    if (kasa[i + 1] >= 1500) {
        console.log("Kasa " + kasa[i] % 5 + " Sınır");
        //kasa[i + 1] = 0;
        i = sayi[Math.floor(Math.random() * 4)];
    } else {
        i = sayi[Math.floor(Math.random() * 4)];
    }
}


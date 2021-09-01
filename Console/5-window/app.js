// if (confirm("Emin misiniz?")) {
//     console.log("Silinir.");
// } else {
//     console.log("Elleme");
// }

const n1 = Math.floor(Math.random() * 100);
const n2 = Math.floor(Math.random() * 100);

const sum = n1 + n2;
const cevap = prompt(`${n1} + ${n2} = ?`);
if (cevap == sum) {
  console.log("Geç");
} else {
  console.log(
    `Oha bunu da yapamayan gitsin kendini atsın cevabın ile aradaki fark ${Math.abs(
      sum - cevap
    )} \nCevap= ${sum}`
  );
}

const mod = document.querySelectorAll(".bash")
const bin_val = document.querySelectorAll(".sum")
const file_n = document.querySelectorAll(".file_name")
const file = document.querySelectorAll(".file")
var bin = 0;
var arr = [];
bin_val[0].innerHTML = "0"
file_n[0].addEventListener("keypress", (event) => {
  if (event.key==="Enter") {
    file[0].innerHTML = file_n[0].value;
  }
});
for (let i = 0; i < mod.length; i++) {
  mod[i].innerHTML = 0;
  arr[i] = 0;
}

for (let i = 0; i < mod.length; i++) {
  mod[i].addEventListener("click", () => {
    if (mod[i].innerHTML != 1) {
      arr[i] = 1
    } else {
      arr[i] = 0
    }
    calcBin(arr);
    mod[i].innerHTML = arr[i];
  });
}

function calcBin(numb_arr) {
  let sum = [];
  let index = 0;
  for (let y = 0; y < numb_arr.length; y+=3) {
  	let power = 2;
    let tot = 0;
    for (let i = y; i < y+3; i++) {
    	if (numb_arr[i] == 1) {
      	tot += Math.pow(2, power);
      }
      power--;
    }
    sum[index] = tot;
    index++;
  }
  bin_val[0].innerHTML = sum[0] +""+ sum[1] +""+ sum[2];
}

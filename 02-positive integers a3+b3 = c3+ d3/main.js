const allPossibleNumbers = (n) => {
  let count = 0;
  for(let a = 1; a <= n; a++) {
    for(let b = 1; b <= n; b++) {
      for(let c = 1; c <= n; c++) {
          let d = Math.round(Math.pow(Math.pow(a,3) + Math.pow(b, 3) - Math.pow(c,3), 1/3))
          if(Math.pow(a,3) + Math.pow(b,3) === Math.pow(c,3) + Math.pow(d, 3) && d <= n) {
            console.log(a + " " + b + " " + c + " " + d);
            count++;
          }
      }
    }
  }
  console.log(count)
}

allPossibleNumbers(10);
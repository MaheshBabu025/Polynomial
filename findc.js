const fs = require("fs")

const data = JSON.parse(fs.readFileSync("Testcase1.json", "utf-8"));
const k = data.keys.k;


function baseToBigInt(value, base) {
  let result = 0n;
  const b = BigInt(base);

  for (let i = 0; i < value.length; i++) {
    const digit = BigInt(parseInt(value[i], base));
    result = result * b + digit;
  }
    return result;
    }
const points = [];
for (const key of Object.keys(data)) {
    if (key !== "keys" && points.length < k) {
        const x = BigInt(key);
        const base = Number(data[key].base);
        const y = baseToBigInt(data[key].value, base);

        points.push({x, y});
    }
}
function findConstantC(points) {
    let c = 0n;

    for (let i = 0; i < points.length; i++) {
        let term = points[i].y;

        for(let j = 0; j < points.length; j++) {
            if (i !== j) {
                term = (term * -points[j].x) / (points[i].x - points[j].x);
            }
        }
        c  += term;
    }
    return c;
}
const constantC = findConstantC(points);
console.log("Constant c:", constantC.toString());
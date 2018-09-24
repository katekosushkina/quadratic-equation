module.exports = function solveEquation(equation) {
    let mass = equation.split(' ');
    let a = parseInt(mass[0]);
    let b = parseInt(mass[3]+mass[4]);
    let c = parseInt(mass[7]+mass[8]);;
    let d = b*b-4*a*c;
    let x1 = Math.round((-b+Math.sqrt(d))/(2*a));
    let x2 = Math.round((-b-Math.sqrt(d))/(2*a));
    let sol = [x1, x2];
    sol.sort(function(a, b) {
      return a - b;
    });
    return sol;
  }

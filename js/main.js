//* 1. Bir nömrənin faktorialını hesablamaq üçün JavaScript proqramı yazın.
//* Riyaziyyatda n! İlə işarələnən mənfi olmayan tam n faktoru, n-dən az və ya
//* bərabər olan bütün müsbət tam ədədlərin məhsuludur. Məsələn, 5! = 5 x 4 x 3 x 2 x 1 = 120

var eded = prompt("Faktoriyalini hesablamaq istədiyiniz ədədi daxil edin:");

if (eded < 0) {
  console.log("Mənfi ədədlərin faktöriyeli hesablanmır.");
} else {
  function faktoriyelHesabla(eded) {
    if (eded === 0 || eded === 1) {
      return 1;
    } else {
      return eded * faktoriyelHesabla(eded - 1);
    }
  }

  console.log(eded + "! = " + faktoriyelHesabla(eded));
}

//* 5. Bir nömrənin eksponentini hesablamaq üçün JavaScript proqramı yazın.
//*  Qeyd: Bir nömrənin eksponenti baza nömrəsinin bir amil olaraq neçə dəfə istifadə edildiyini söyləyir.
//*  8 ustu 2 = 8 x 8 = 64. Burada 8 əsas, 2 isə eksponentdir.

var əsas = prompt("Əsas rəqəmi daxil edin:");
var üst = prompt("Üstü daxil edin:");

console.log(Math.pow(əsas, üst));

//* 4. Bir sıra tam ədədlərin cəmini hesablamaq üçün JavaScript proqramı yazın.

var arraylerinCemi = function (array) {
  if (array.length === 1) {
    return array[0];
  } else {
    return array[0] + arraylerinCemi(array.slice(1));
  }
};

console.log(arraylerinCemi([10, 20, 30, 40, 50]));

"use strict"

// __________________Exercise1_____________
//  const user = {
//      name: 'Mango',
//      age: 20,
//      hobby: 'html',
//      premium: true,
//  };

//  user.mood = 'happy';
//  user.hobby = 'skydiving';
//  user.premium = false;

//  console.log(Object.keys(user));
//  for (keys in user)  {
//    console.log("key: ", key)
//  }

// __________________Exercise2_____________
//  const countProps = function(obj) { 
//    return Object.keys(obj).length
//    };
  
//    console.log(countProps({})); // 0
  
//    console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
//    console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// __________________Exercise3_____________


//  const findBestEmployee = function(employees) {
//    let keysArr = Object.keys(employees);
//      let newArray = Object.values(employees);
//      let maxNumber = 0;
//      for (let i = 0; i < newArray.length; i++) {
//        if (newArray[i] > maxNumber) {
//          maxNumber = newArray[i];
//        }
//       }
//       for (let key in employees) {
//         if (employees[key] == maxNumber) {
//           console.log(`the hardest worker is ${key}`);
//       } 
//      }
//    };
  
//    /*
//     * Вызовы функции для проверки работоспособности твоей реализации.
//     */
//      findBestEmployee({
//        ann: 29,
//        david: 35,
//        helen: 1,
//        lorence: 99,
//      }) // lorence
  
  //  console.log(
  //    findBestEmployee({
  //      poly: 12,
  //      mango: 17,
  //      ajax: 4,
  //    }),
  //  ); // mango
  
  //    findBestEmployee({
  //      lux: 147,
  //      david: 21,
  //      kiwi: 19,
  //      chelsy: 38,
  //    }) // lux

// // __________________Exercise4_____________
//  const countTotalSalary = function(employees) {
//    let total = 0;
//    const salaryArr = Object.values(employees)
//    for (let element in salaryArr) {
//      total += salaryArr[element]
//    }
//    return total;
//    };
  
//    /*
//     * Вызовы функции для проверки работоспособности твоей реализации.
//     */
//    console.log(countTotalSalary({})); // 0
  
//    console.log(
//      countTotalSalary({
//        mango: 100,
//        poly: 150,
//        alfred: 80,
//      }),
//    ); // 330
  
//    console.log(
//      countTotalSalary({
//        kiwi: 200,
//        lux: 50,
//        chelsy: 150,
//      }),
//    ); // 400

// __________________Exercise5_____________
//  const products = [
//      { name: 'Радар', price: 1300, quantity: 4 },
//      { name: 'Сканер', price: 2700, quantity: 3 },
//      { name: 'Дроид', price: 400, quantity: 7 },
//      { name: 'Захват', price: 1200, quantity: 2 },
//    ];
  
//    const getAllPropValues = function(arr, prop) {
//      let newArr = [];
//      for (let i = 0; i < arr.length; i++) {
//        newArr.push(arr[i][prop]);
//      }
//      return newArr;
//    };
  
//    /*
//     * Вызовы функции для проверки работоспособности твоей реализации.
//     */
//   console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
  
//   console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
  
//    console.log(getAllPropValues(products, 'category')); // []

// __________________Exercise6_____________
//  const products = [
//      { name: 'Радар', price: 1300, quantity: 4 },
//      { name: 'Сканер', price: 2700, quantity: 3 },
//      { name: 'Дроид', price: 400, quantity: 7 },
//      { name: 'Захват', price: 1200, quantity: 2 },
//    ];
  
//    const calculateTotalPrice = function(allProducts, productName) {
//      let total = 0;
//      for (let i = 0; i < allProducts.length; i++) {
//        if (allProducts[i].name == productName)
//        total = allProducts[i].price * allProducts[i].quantity
//      }
//      return total;
//    };
  
//    /*
//     * Вызовы функции для проверки работоспособности твоей реализации.
//     */
//    console.log(calculateTotalPrice(products, 'Радар')); // 5200
  
//    console.log(calculateTotalPrice(products, 'Дроид')); // 2800


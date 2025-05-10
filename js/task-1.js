function isEnoughCapacity(products, containerSize) {
    var totalQuantity = 0;
  
    for (var product in products) {
      if (products.hasOwnProperty(product)) {
        totalQuantity += products[product];
      }
    }
  
    return totalQuantity <= containerSize;
  }
  
  console.log(
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
  ); // false
  
  console.log(
    isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
  ); // false
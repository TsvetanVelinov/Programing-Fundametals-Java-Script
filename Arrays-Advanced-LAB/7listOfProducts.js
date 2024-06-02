function listOfProducts(products) {

    let sortedProduct = products.sort();

    for (i = 0; i < sortedProduct.length; i++) {
        console.log(`${i + 1}.${sortedProduct[i]}`);
    }
  
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
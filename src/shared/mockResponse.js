

import { faker } from '@faker-js/faker';

// const faker = require('@faker-js/faker').faker

 export const createMockRecords = (arg) => {
    const response = [];
    for (let i = 0; i < arg; i++) {
      let temp = {
        display_name: faker.commerce.productName(),
        in_stock: faker.random.numeric(),
        image_url: faker.image.fashion(640, 480, true),
        categories: faker.commerce.product(),
        price:
          i % 2 === 0
            ? faker.commerce.price(500, 1000, 0, "$")
            : faker.commerce.price(100, 400, 0, "$"),
        discount: faker.commerce.price(0, 15, 0),
        color: faker.color.human(),
        seller_names: faker.company.name(),
        brand: faker.commerce.productAdjective(),
        description: faker.commerce.productDescription(),
        review: [],
        ratings: faker.commerce.price(0, 4, 0),
      };
      response.push(temp);
    }
    console.log(response);
  
    return response;
  };

  // createMockRecords(2)
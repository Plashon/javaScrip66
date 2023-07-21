/**console.log("hello")
const person = {
    frist : "Phubate",
    last : "Nimnuan",
    location : {
        district:"Muang",
        province:"KanChaNaBuri"
    }
}
//const {province} = person.location;
const {
    frist:fristName,
    last:LastName,
    location:{district,province}
} = person;

console.log(fristName);
console.log(LastName);
console.log(district);
console.log(province);
 */
const product = {
  products: {
    data: {
      items: [
        {
          id: "GGOEAFKA087499",
          name: "Android Small Removable Sticker Sheet",
          description:
            "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
          features:
            "<p>8 Android stickers</p>\n<p>White colored sticker sheet</p>",
          price: "2.99",
          keywords:
            "Android Small Removable Sticker Sheet, android stickers, sticker sheets, removable sticker sheets, small sticker sheet, android small sticker sheets, Android Sheet",
          url: "Android+Small+Removable+Sticker+Sheet",
          category: "accessories",
          subcategory: "accessories",
        },
      ],
    },
  },
}
const price = product.products.data.items[0].price;


console.log(price);
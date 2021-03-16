var orderHistory = [
  {
    order: {
            productImg: "Rhino.png",
            product: "JavaScript for Impatient Programmers",
            productAuthor: "Rauschmayer, Dr. Axel",
            price: 31.55,
            number: "# 114-3941689-8772232",
            details: " ",
            invoice: " ",
            taxAmount: 2.45,
            total: 34.00, //order.price + order.taxAmount, or function sum (price,taxAmount) {
                                                            // return total = price + taxAmount
                                                            // };
            
            shipTo: "JS Masher",
            dates: {
                    ordered: "August 4, 2020",
                    delivered: "Aug 8, 2020",
                    returnClosed: "Sep 7, 2020",
                    },
            },
  },
  {
    order: {
            productImg: "circle.png",
            product: "The Timeless Way of Building",
            productAuthor: "Alexander, Christopher",
            price: 41.33,
            number: "# 113-9984268-1280257",
            details: " ",
            invoice: " ",
            taxAmount: 3.20,
            total: 44.53, //order.price + order.taxAmount,
            shipTo: "JS Masher",
            dates: {
                    ordered: "July 19, 2020",
                    delivered: "Jul 20, 2020",
                    returnClosed: "Aug 19, 2020",
                    },
            },
  },

{
    order: {
          productImg: "controller.png",
          product: "Gamecube Controller Adapter. Super Smash Bros switch Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No :Lag-Gamecube Adapter",
          productAuthor: ' ',
          price: 17.22,
          number: "# 114-2875557-9059409",
          details: " ",
          invoice: " ",
          taxAmount: 1.24,
          total: 15.98, //order.price + order.taxAmount,
          shipTo: "JS Masher",
          dates: {
                ordered: "July 4, 2020",
                delivered: "Jul 7, 2020",
                returnClosed: "Aug 5, 2020",
      },
    },
  },

  {


        order: {
          productImg: ["controller.png", "artofsql.png"],
          product: ["GameCube Controller- Super Smash Bros. Edition (Nintendo Switch)", "The Art of SQL"],
          productAuthor: ['', 'Faroult Stephane'],
          price: [94.95, 33.99],
          number: "# 113-2883177-2648248",
          details: " ",
          invoice: " ",
          taxAmount: 9.99,
          total: 138.93, //order.price[0]+ order.price[1] + order.taxAmount,
          shipTo: "JS Masher",
          dates: {
            ordered: "July 3, 2020",
            delivered: "Jul 5, 2020",
            returnClosed: "Aug 4, 2020",
                  },
        },
      },
];

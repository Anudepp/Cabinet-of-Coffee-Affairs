// src/utils/coffeeData.ts

export interface CoffeeProduct {
  id: number;
  name: string;
  type: "Arabica" | "Robusta";
  process: "Washed" | "Unwashed";
  Area: string;
  ScreenSize: string;
  FlavorProfile: string[];
  image: string;
}

export interface CoffeeCategory {
  title: string;
  type: "Arabica" | "Robusta";
  products: CoffeeProduct[];
}

export const coffeeCategories: CoffeeCategory[] = [
  {
    "title": "Unwashed Arabica",
    "type": "Arabica",
    "products": [
      {
        "id": 1,
        "name": " Cherry AA",
        "type": "Arabica",
        "process": "Unwashed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "18 (7.10mm)",
        "FlavorProfile": [
          "Mellow",
          "Earthy",
          "Chocolatey"
        ],
        "image": "/Beans/Arabica/Unwashed/arabica-cherry-aa.jpg"
      },
      {
        "id": 2,
        "name": " Cherry A",
        "type": "Arabica",
        "process": "Unwashed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "17 (6.65mm)",
        "FlavorProfile": [
          "caramel",
          "fruity",
          "floral"
        ],
        "image": "/Beans/Arabica/Unwashed/arabica-cherry-a.jpg"
      },
      {
        "id": 3,
        "name": " Cherry AB",
        "type": "Arabica",
        "process": "Unwashed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "15 (6.00mm)",
        "FlavorProfile": [
          "cocoa",
          "spice",
          "mild fruit"
        ],
        "image": "/Beans/Arabica/Unwashed/arabica-cherry-ab.jpg"
      },
      {
        "id": 4,
        "name": " Cherry PB",
        "type": "Arabica",
        "process": "Unwashed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "13 (5.00mm)",
        "FlavorProfile": [
          "cocoa",
          "dried fruit",
          "floral"
        ],
        "image": "/Beans/Arabica/Unwashed/arabica-cherry-pb.jpg"
      },
      {
        "id": 5,
        "name": " Cherry C",
        "type": "Arabica",
        "process": "Unwashed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "13 (5.00mm)",
        "FlavorProfile": [
          "rustic",
          "mild chocolate",
          "woody"
        ],
        "image": "/Beans/Arabica/Unwashed/arabica-cherry-c.jpg"
      }
    ]
  },
  {
    "title": "Washed Arabica",
    "type": "Arabica",
    "products": [
      {
        "id": 6,
        "name": "Mysore Nuggets",
        "type": "Arabica",
        "process": "Washed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "19 (7.50mm)",
        "FlavorProfile": [
          "nutty", "woody", "earthy notes"
        ],
        "image": "/Beans/Arabica/Washed/mysore-nuggets.jpg"
      },
      {
        "id": 7,
        "name": "Plantation AA",
        "type": "Arabica",
        "process": "Washed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "18 (7.10mm)",
        "FlavorProfile": [
          "fruity",
          "floral"
        ],
        "image": "/Beans/Arabica/Washed/plantation-aa.jpg"
      },
      {
        "id": 8,
        "name": "Plantation A",
        "type": "Arabica",
        "process": "Washed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "17 (6.65mm)",
        "FlavorProfile": [
          "melon",
          "Indian spice",
          "chocolate"
        ],
        "image": "/Beans/Arabica/Washed/plantation-a.jpg"
      },
      {
        "id": 9,
        "name": "Plantation B",
        "type": "Arabica",
        "process": "Washed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "15 (6.00mm)",
        "FlavorProfile": [
          "citrus",
          "caramel",
          "nuts"
        ],
        "image": "/Beans/Arabica/Washed/plantation-b.jpg"
      },
      {
        "id": 10,
        "name": "Plantation PB",
        "type": "Arabica",
        "process": "Washed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "13 (5.00mm)",
        "FlavorProfile": [
          "chocolate",
          "nuts",
          "Indian spices"
        ],
        "image": "/Beans/Arabica/Washed/plantation-pb.jpg"
      },
      {
        "id": 11,
        "name": "Plantation C",
        "type": "Arabica",
        "process": "Washed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "13 (5.00mm)",
        "FlavorProfile": [
          "sweet taste with hints of chocolate and nuts"
        ],
        "image": "/Beans/Arabica/Washed/plantation-c.jpg"
      }
    ]
  },
  {
    "title": "Unwashed Robusta",
    "type": "Robusta",
    "products": [
      {
        "id": 12,
        "name": "Cherry AAA",
        "type": "Robusta",
        "process": "Unwashed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "19 (7.50mm)",
        "FlavorProfile": [
          "dark chocolate",
          "nutty",
          "spice notes"
        ],
        "image": "/Beans/Robusta/Unwashed/cherry-aaa.jpg"
      },
      {
        "id": 13,
        "name": "Cherry AA",
        "type": "Robusta",
        "process": "Unwashed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "18 (7.10mm)",
        "FlavorProfile": [
          "earthy",
          "nutty",
          "dark cocoa"
        ],
        "image": "/Beans/Robusta/Unwashed/cherry-aa.jpg"
      },
      {
        "id": 14,
        "name": "Cherry A",
        "type": "Robusta",
        "process": "Unwashed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "17 (6.65mm)",
        "FlavorProfile": [
          "woody",
          "mild spiciness"
        ],
        "image": "/Beans/Robusta/Unwashed/cherry-a.jpg"
      },
      {
        "id": 15,
        "name": "Cherry AB",
        "type": "Robusta",
        "process": "Unwashed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "15 (6.00mm)",
        "FlavorProfile": [
          "earthy",
          "woody",
          "chocolate"
        ],
        "image": "/Beans/Robusta/Unwashed/cherry-ab.jpg"
      },
      {
        "id": 16,
        "name": "Cherry PB",
        "type": "Robusta",
        "process": "Unwashed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "13 (5.00mm)",
        "FlavorProfile": [
          "strong",
          "bitter",
          "peppery",
          "cocoa"
        ],
        "image": "/Beans/Robusta/Unwashed/cherry-pb.jpg"
      }
    ]
  },
  {
    "title": "Washed Robusta",
    "type": "Robusta",
    "products": [
      {
        "id": 17,
        "name": " Kaapi Royale",
        "type": "Robusta",
        "process": "Washed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "19 (7.50mm)",
        "FlavorProfile": [
          "chocolate",
          "dark cocoa",
          "woody",
          "earthy"
        ],
        "image": "/Beans/Robusta/Washed/kaapi-royale.jpg"
      },
      {
        "id": 18,
        "name": "Parchment AA",
        "type": "Robusta",
        "process": "Washed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "18 (7.10mm)",
        "FlavorProfile": [
          "cocoa",
          "nutty",
          "mild spice"
        ],
        "image": "/Beans/Robusta/Washed/parchment-aa.jpg"
      },
      {
        "id": 19,
        "name": "Parchment AB",
        "type": "Robusta",
        "process": "Washed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "15 (6.00mm)",
        "FlavorProfile": [
          "dark chocolate",
          "woody",
          "nutty tones"
        ],
        "image": "/Beans/Robusta/Washed/parchment-ab.jpg"
      },
      {
        "id": 20,
        "name": "Parchment C",
        "type": "Robusta",
        "process": "Washed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "13 (5.00mm)",
        "FlavorProfile": [
          "rustic",
          "woody",
          "earthy"
        ],
        "image": "/Beans/Robusta/Washed/parchment-c.jpg"
      },
      {
        "id": 21,
        "name": "Parchment PB",
        "type": "Robusta",
        "process": "Washed",
        "Area": "Karnataka, Kerala",
        "ScreenSize": "13 (5.00mm)",
        "FlavorProfile": [
          "bitter-sweet cocoa",
          "earthy"
        ],
        "image": "/Beans/Robusta/Washed/parchment-pb.jpg"
      }
    ]
  }
];
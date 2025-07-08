import milk from '../assets/milk2.png';
import drinks from '../assets/drinks2.png';
import fruits from '../assets/fruits2.png';
import spices from '../assets/spices2.png';
import grains from '../assets/grains2.png';
import namkeen from '../assets/namkeen2.png';
import crunchy_corner from '../assets/crunchy_corner2.png';
import sauces from '../assets/souces2.png'; // double-check spelling!
import protein from '../assets/protein2.png';
import gheeOil from '../assets/oil-ghee2.png'; // rename for valid variable name
import instantFood from '../assets/instant-food2.png';
import hygiene from '../assets/hygeine2.png'; // also double-check spelling
import icecream from '../assets/ice-cream.png'
import personal_care from '../assets/personal_care.png'
import apple from '../assets/apple2.jpg'
import apple2 from '../assets/apple3.avif'
import apple3 from '../assets/apple4.avif'
import apple4 from '../assets/apple5.webp'
import banana from '../assets/banana.jpg'
import banana1 from '../assets/banana2.avif'
import banana2 from '../assets/banana3.webp'
import banana3 from '../assets/banana4.webp'
import tomato from '../assets/tomato3.jpg'
import tomato4 from '../assets/tomato4.jpg'
import tomato5 from '../assets/tomato5.webp'
import tomato6 from '../assets/tomato6.jpg'
// import broccoli from '../assets/Broccoli.jpg'
// import broccoli2 from '../assets/brocolli2.jpeg'
// import broccoli3 from '../assets/Brocolli3.avif'
// import broccoli4 from '../assets/Brocolli4.jpeg'
import mango from '../assets/mango3.jpg'
import mango2 from '../assets/mango4.webp'
import mango3 from '../assets/mango5.webp'
import mango4 from '../assets/mango6.webp'
import spinach from '../assets/Spinach2.png'
// import spinach2 from '../assets/Spinach3.jpg'
// import spinach3 from '../assets/Spinach4.jpg'
// import spinach4 from '../assets/Spinach5.jpg'

import { FaTruck } from "react-icons/fa";
import { SiCodefresh } from "react-icons/si";
import { MdVerifiedUser } from "react-icons/md";

import { PiHandCoinsFill } from "react-icons/pi";


export const categories = [
    {
      text: "Fresh Dairy Goods",
      path: "Dairy Goods",
      image: milk, 
      bgColor: "#D0E8F2",
    },
    {
        text: "Icy Delights",
        path: "Cold Drikns",
        image: drinks, 
        bgColor: "#FDFBD4",
    },
    {
        text: "Fruits & Vegetables",
        path: "Fruits & Vegetables",
        image: fruits, 
        bgColor: "#FFE8E7",
    },
    {
        text: "Spice Bazaar",
        path: "Spice",
        image: spices, 
        bgColor: "#E0FFE0",
    },
    {
        text: "Essential Grains",
        path: "Grains",
        image: grains, 
        bgColor: "#F4E9FF",
    },
    {
        text: "Breakfast Bonanza",
        path: "Breakfast Bonanza",
        image: namkeen, 
        bgColor: "#e2ece9",
    },
    {
        text: "Crunchy Corner",
        path: "Crunchy Corner",
        image: crunchy_corner, 
        bgColor: "#ffe9f7",
    },
    {
        text: "Delicious Dips & Sauces",
        path: "Delicious Dips & Sauces",
        image: sauces, 
        bgColor: "#ffe9f7",
    },
    {
        text: "Protein",
        path: "Protein",
        image: protein, 
        bgColor: "#D0E8F2",
    },
    {
        text: "Ghee & Oil",
        path: "Ghee & Oil",
        image: gheeOil, 
        bgColor: "#FDFBD4",
    },
    {
        text: "Instant Foods",
        path: "Instant Foods",
        image: instantFood, 
        bgColor: "#FFE8E7",
    },
    {
        text: "Hygiene Essentials",
        path: "Hygiene Essentials",
        image: hygiene, 
        bgColor: "#E0FFE0",
    },
    {
        text: "Chill Corner",
        path: "Chill Corner",
        image: icecream, 
        bgColor: "#F4E9FF",
    },
    {
        text: "Personal Care",
        path: "Personal Care",
        image: personal_care, 
        bgColor: "#e2ece9",
    },

    // Add more categories here
  ];
  
  export const DummyProducts = [
  {
    id: 1,
    name: "Apple",
    category: "Fruit",
    price: 120,
    offerPrice: 100,
    image: [apple,apple2,apple3,apple4],
    description: ["Fresh and juicy apples, rich in vitamins.","Fresh and juicy apples, rich in vitamins.","Fresh and juicy apples, rich in vitamins."],
    createdAt: "2025-04-01T10:00:00Z",
    updatedAt: "2025-04-10T12:00:00Z",
    inStock: true
  },
  {
    id: 2,
    name: "Tomato",
    category: "Vegetable",
    price: 60,
    offerPrice: 50,
    image: [tomato,tomato4,tomato5,tomato6],
    description: ["Red ripe tomatoes, perfect for salads and cooking.","Red ripe tomatoes, perfect for salads and cooking.","Red ripe tomatoes, perfect for salads and cooking."],
    createdAt: "2025-04-02T09:30:00Z",
    updatedAt: "2025-04-12T15:00:00Z",
    inStock: true
  },
  {
    id: 3,
    name: "Banana",
    category: "Fruit",
    price: 40,
    offerPrice: 35,
    image: [banana,banana1,banana2,banana3],
    description: ["Naturally sweet bananas, full of energy.","Naturally sweet bananas, full of energy.","Naturally sweet bananas, full of energy."],
    createdAt: "2025-04-03T11:00:00Z",
    updatedAt: "2025-04-11T13:00:00Z",
    inStock: true
  },
  // {
  //   id: 4,
  //   name: "Broccoli",
  //   category: "Vegetable",
  //   price: 90,
  //   offerPrice: 80,
  //   image: [broccoli,broccoli2,broccoli3,broccoli4],
  //   description: ["Fresh green broccoli, packed with nutrients.","Fresh green broccoli, packed with nutrients.","Fresh green broccoli, packed with nutrients."],
  //   createdAt: "2025-04-04T14:20:00Z",
  //   updatedAt: "2025-04-15T09:10:00Z",
  //   inStock: false
  // },
  {
    id: 5,
    name: "Mango",
    category: "Fruit",
    price: 150,
    offerPrice: 130,
    image: [mango,mango2,mango3,mango4],
    description: ["Seasonal mangoes with a rich tropical flavor.","Seasonal mangoes with a rich tropical flavor.","Seasonal mangoes with a rich tropical flavor."],
    createdAt: "2025-04-05T08:15:00Z",
    updatedAt: "2025-04-13T10:45:00Z",
    inStock: true
  },
  {
    id: 6,
    name: "Spinach",
    category: "Vegetable",
    price: 30,
    offerPrice: 25,
    image: [spinach],
    description: ["Organic spinach leaves for a healthy meal.","Organic spinach leaves for a healthy meal.","Organic spinach leaves for a healthy meal."],
    createdAt: "2025-04-06T07:00:00Z",
    updatedAt: "2025-04-14T16:00:00Z",
    inStock: true
  }
]

export const features = [
  {
    icon: FaTruck ,
    title: "Instant Delivary",
    description: "Groceries Delivered in 30 minutes.",
  },
  {
    icon: SiCodefresh,
    title: "Always Fresh",
    description: "Freshness delivered straight to you.",
  },
  {
    icon: PiHandCoinsFill ,
    title: "Affordable Prices",
    description: "Quality you trust at prices you'll love.",
  },
  {
    icon: MdVerifiedUser,
    title: "Preferred by Thousands",
    description: "Thousands trust us for quality and service.",
  }
]

 export const FooterLinks = [
  {
    title: "Quick Links",
    links: [
      {text: "Home",url: "#"},
      {text: "Best Sellers",url: "#"},
      {text: "Offers & Deals",url: "#"},
      {text: "Contact Us",url: "#"},
      {text: "FAQ",url: "#"},

    ]
  },
  {
    title: "Need Help?",
    links: [
      {text: "Delivery Information",url: "#"},
      {text: "Return & Refund Policy",url: "#"},
      {text: "Payment Methods",url: "#"},
      {text: "Track your Order",url: "#"},
      {text: "Contact Us",url: "#"},

    ]
  },
  {
    title: "Follow Us",
    links: [
      {text: "Instagram",url: "#"},
      {text: "Twitter",url: "#"},
      {text: "Facebook",url: "#"},
    ]
  },
 ]

  export const dummyAddresses = [
  {
    id: 1,
    name: "Ravi Sharma",
    phone: "9876543210",
    addressLine1: "221B Baker Street",
    addressLine2: "Near City Mall",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400001",
    country: "India",
    isDefault: true
  },
  {
    id: 2,
    name: "Aarushi Mehta",
    phone: "9123456789",
    addressLine1: "Plot No. 32, Rose Avenue",
    addressLine2: "Opposite Green Park",
    city: "Delhi",
    state: "Delhi",
    pincode: "110001",
    country: "India",
    isDefault: false
  },
  {
    id: 3,
    name: "Siddharth Verma",
    phone: "9988776655",
    addressLine1: "Flat 10B, Sunshine Apartments",
    addressLine2: "Koregaon Park",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411001",
    country: "India",
    isDefault: false
  }
];

// export const dummyOrders = [
//   {
//     orderId: 'ORD001',
//     userId: 'USR001',
//     customerName: 'Anjali Mehta',
//     items: [
//       { productId: 'P001', name: DummyProducts[4], quantity: 1, price: 699 },
//       { productId: 'P002', name: DummyProducts[3], quantity: 1, price: 1299 },
//     ],
//     PaymenType: 'COD',
//     paymentStatus: 'Paid',
//     orderStatus: 'Shipped',
//     totalAmount: 1998,
//     orderDate: '2025-05-20',
//     shippingAddress: '123 Main Street, Jodhpur, Rajasthan',
//     createdAt: "2025-04-06T07:00:00Z",
//   },
//   {
//     orderId: 'ORD002',
//     userId: 'USR002',
//     customerName: 'Rahul Sharma',
//     items: [
//       { productId: 'P003', name: DummyProducts[2], quantity: 2, price: 1499 },
//     ],
//     PaymenType: 'COD',
//     paymentStatus: 'Pending',
//     orderStatus: 'Processing',
//     totalAmount: 2998,
//     orderDate: '2025-05-22',
//     shippingAddress: '45 Mall Road, Jaipur, Rajasthan',
//     createdAt: "2025-04-06T07:00:00Z",
//   },
//   {
//     orderId: 'ORD003',
//     userId: 'USR003',
//     customerName: 'Sneha Patel',
//     items: [
//       { productId: 'P004', name:DummyProducts[4], quantity: 3, price: 299 },
//       { productId: 'P005', name: DummyProducts[0], quantity: 2, price: 199 },
//     ],
//     PaymenType: 'Online  ',
//     paymentStatus: 'Paid',
//     orderStatus: 'Delivered',
//     totalAmount: 1395,
//     orderDate: '2025-05-18',
//     shippingAddress: '678 Lake View, Ahmedabad, Gujarat',
//     createdAt: "2025-04-06T07:00:00Z",
//   },
//   {
//     orderId: 'ORD004',
//     userId: 'USR004',
//     customerName: 'Vikram Joshi',
//     items: [
//       { productId: 'P006', name: DummyProducts[2], quantity: 1, price: 1499 },
//     ],
//     PaymenType: 'COD',
//     paymentStatus: 'Paid',
//     orderStatus: 'Out for Delivery',
//     totalAmount: 1499,
//     orderDate: '2025-05-25',
//     shippingAddress: '21 Tech Park, Pune, Maharashtra',
//     createdAt: "2025-04-06T07:00:00Z",
//   },
//   {
//     orderId: 'ORD005',
//     userId: 'USR005',
//     customerName: 'Priya Singh',
//     items: [
//       { productId: 'P007', name: DummyProducts[5], quantity: 1, price: 2499 },
//       { productId: 'P008', name:DummyProducts[0], quantity: 2, price: 799 },
//     ],
//     PaymenType: 'Online',
//     paymentStatus: 'Failed',
//     orderStatus: 'Cancelled',
//     totalAmount: 4097,
//     orderDate: '2025-05-21',
//     shippingAddress: '89 Central Plaza, Delhi',
//     createdAt: "2025-04-06T07:00:00Z",
//   },
// ];

export const dummyOrders = [
  {
    items: [
      { product: { name: DummyProducts[4] }, quantity: 1 },
      { product: { name: DummyProducts[3] }, quantity: 1 },
    ],
    address: {
      firstName: 'Anjali',
      lastName: 'Mehta',
      street: '123 Main Street',
      city: 'Jodhpur',
      state: 'Rajasthan',
      zipcode: '342001',
      country: 'India',
      phone: '9876543210',
    },
    amount: 1998,
    paymentType: 'COD',
    isPaid: true,
    createdAt: "2025-04-06T07:00:00Z"
  },
  {
    items: [
      { product: { name: DummyProducts[2] }, quantity: 2 },
    ],
    address: {
      firstName: 'Rahul',
      lastName: 'Sharma',
      street: '45 Mall Road',
      city: 'Jaipur',
      state: 'Rajasthan',
      zipcode: '302001',
      country: 'India',
      phone: '8765432109',
    },
    amount: 2998,
    paymentType: 'COD',
    isPaid: false,
    createdAt: "2025-04-06T07:00:00Z"
  },
  {
    items: [
      { product: { name: DummyProducts[4] }, quantity: 3 },
      { product: { name: DummyProducts[0] }, quantity: 2 },
    ],
    address: {
      firstName: 'Sneha',
      lastName: 'Patel',
      street: '678 Lake View',
      city: 'Ahmedabad',
      state: 'Gujarat',
      zipcode: '380001',
      country: 'India',
      phone: '9123456780',
    },
    amount: 1395,
    paymentType: 'Online',
    isPaid: true,
    createdAt: "2025-04-06T07:00:00Z"
  },
  {
    items: [
      { product: { name: DummyProducts[2] }, quantity: 1 },
    ],
    address: {
      firstName: 'Vikram',
      lastName: 'Joshi',
      street: '21 Tech Park',
      city: 'Pune',
      state: 'Maharashtra',
      zipcode: '411001',
      country: 'India',
      phone: '9988776655',
    },
    amount: 1499,
    paymentType: 'COD',
    isPaid: true,
    createdAt: "2025-04-06T07:00:00Z"
  },
  {
    items: [
      { product: { name: DummyProducts[5] }, quantity: 1 },
      { product: { name: DummyProducts[0] }, quantity: 2 },
    ],
    address: {
      firstName: 'Priya',
      lastName: 'Singh',
      street: '89 Central Plaza',
      city: 'Delhi',
      state: 'Delhi',
      zipcode: '110001',
      country: 'India',
      phone: '9871234560',
    },
    amount: 4097,
    paymentType: 'Online',
    isPaid: false,
    createdAt: "2025-04-06T07:00:00Z"
  },
];



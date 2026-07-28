import pipe01 from "../assets/images/products/pro-01.jpg";
import pipe02 from "../assets/images/products/pro-02.jpg";
import pipe03 from "../assets/images/products/pro-03.jpg";
import pipe04 from "../assets/images/products/pro-04.jpg";
import pipe05 from "../assets/images/products/pro-05.jpg";
import pipe06 from "../assets/images/products/pro-06.jpg";
import pipe07 from "../assets/images/products/pro-07.jpg";
import pipe08 from "../assets/images/products/pro-08.jpg";
import pipe09 from "../assets/images/products/pro-09.jpg";
import pipe10 from "../assets/images/products/pro-10.jpg";
import pipe11 from "../assets/images/products/pro-11.jpg";
import pipe12 from "../assets/images/products/pro-12.jpg";
import pipe13 from "../assets/images/products/pro-13.jpg";
import pipe14 from "../assets/images/products/pro-14.jpg";
import pipe15 from "../assets/images/products/pro-15.jpg";
import pipe16 from "../assets/images/products/pro-06.jpg";

const products = [
  {
    id: 1,
    name: "NP2 RCC Pipe",
    category: "RCC Pipes",
    material: "Reinforced Cement Concrete",
    image: pipe01,
    rating: 4,
    description:
      "Durable RCC pipes suitable for drainage, sewerage, and infrastructure projects.",
    sizes: [
      { size: "300mm", price: "₹1,200" },
      { size: "450mm", price: "₹1,800" },
      { size: "600mm", price: "₹2,600" },
    ],
    features: ["High durability", "Weather resistant", "Long service life"],
  },

  {
    id: 2,
    name: "NP3 RCC Pipe",
    category: "Heavy Duty Pipes",
    material: "Heavy Duty RCC",
    image: pipe02,
    rating: 5,
    description:
      "Medium-duty RCC pipes designed for demanding drainage and civil construction applications.",
    sizes: [
      { size: "600mm", price: "₹3,200" },
      { size: "750mm", price: "₹3,800" },
      { size: "900mm", price: "₹4,500" },
    ],
    features: [
      "High load capacity",
      "Strong concrete structure",
      "Reliable performance",
    ],
  },

  {
    id: 3,
    name: "Hume Pipe",
    category: "Concrete Pipes",
    material: "Precast Concrete",
    image: pipe03,
    rating: 4,
    description:
      "Quality precast concrete hume pipes for drainage and water management systems.",
    sizes: [
      { size: "300mm", price: "₹1,000" },
      { size: "450mm", price: "₹1,700" },
      { size: "600mm", price: "₹2,500" },
    ],
    features: [
      "Precast construction",
      "Smooth internal surface",
      "Easy installation",
    ],
  },

  {
    id: 4,
    name: "Concrete Drain Pipe",
    category: "Drainage Pipes",
    material: "High Strength Concrete",
    image: pipe04,
    rating: 4,
    description:
      "High-strength concrete drainage pipes for residential and infrastructure projects.",
    sizes: [
      { size: "450mm", price: "₹1,800" },
      { size: "600mm", price: "₹2,600" },
      { size: "750mm", price: "₹3,400" },
    ],
    features: [
      "High compressive strength",
      "Durable construction",
      "Low maintenance",
    ],
  },

  {
    id: 5,
    name: "Storm Water Pipe",
    category: "Storm Water Management",
    material: "Reinforced Concrete",
    image: pipe05,
    rating: 5,
    description:
      "Reliable reinforced concrete pipes for stormwater drainage and flood management systems.",
    sizes: [
      { size: "600mm", price: "₹2,800" },
      { size: "900mm", price: "₹4,200" },
      { size: "1200mm", price: "₹6,400" },
    ],
    features: [
      "High flow capacity",
      "Heavy-duty structure",
      "Suitable for large projects",
    ],
  },

  {
    id: 6,
    name: "Sewer Line Pipe",
    category: "Sewerage Pipes",
    material: "Precast RCC",
    image: pipe06,
    rating: 4,
    description:
      "Precast RCC sewer pipes designed for reliable underground sewage systems.",
    sizes: [
      { size: "600mm", price: "₹2,800" },
      { size: "750mm", price: "₹3,500" },
      { size: "900mm", price: "₹4,400" },
    ],
    features: [
      "Strong underground performance",
      "Long service life",
      "Low maintenance",
    ],
  },

  {
    id: 7,
    name: "Culvert Pipe",
    category: "Culvert Pipes",
    material: "RCC Concrete",
    image: pipe07,
    rating: 4,
    description:
      "Strong RCC culvert pipes for road crossings, drainage channels, and infrastructure works.",
    sizes: [
      { size: "450mm", price: "₹2,000" },
      { size: "600mm", price: "₹2,600" },
      { size: "900mm", price: "₹4,500" },
    ],
    features: [
      "High load-bearing capacity",
      "Suitable for road projects",
      "Durable RCC construction",
    ],
  },

  {
    id: 8,
    name: "Drainage Pipe",
    category: "Drainage Pipes",
    material: "Reinforced Concrete",
    image: pipe08,
    rating: 4,
    description:
      "Reliable reinforced concrete drainage pipes for efficient water flow management.",
    sizes: [
      { size: "500mm", price: "₹2,100" },
      { size: "750mm", price: "₹3,400" },
      { size: "900mm", price: "₹4,200" },
    ],
    features: ["Strong structure", "Efficient water flow", "Easy maintenance"],
  },

  {
    id: 9,
    name: "Water Supply Pipe",
    category: "Water Management",
    material: "Precast RCC",
    image: pipe09,
    rating: 5,
    description:
      "High-quality precast RCC pipes for water distribution and infrastructure projects.",
    sizes: [
      { size: "600mm", price: "₹2,900" },
      { size: "800mm", price: "₹3,800" },
      { size: "1000mm", price: "₹5,200" },
    ],
    features: [
      "High strength",
      "Reliable performance",
      "Long-lasting construction",
    ],
  },

  {
    id: 10,
    name: "Heavy Load Pipe",
    category: "Heavy Duty Pipes",
    material: "High Density Concrete",
    image: pipe10,
    rating: 5,
    description:
      "Heavy-load concrete pipes designed for demanding infrastructure and construction applications.",
    sizes: [
      { size: "800mm", price: "₹4,000" },
      { size: "1000mm", price: "₹5,200" },
      { size: "1200mm", price: "₹6,500" },
    ],
    features: [
      "High load resistance",
      "Heavy-duty construction",
      "Infrastructure suitable",
    ],
  },

  {
    id: 11,
    name: "NP4 RCC Pipe",
    category: "Heavy Duty Pipes",
    material: "Reinforced Concrete",
    image: pipe11,
    rating: 5,
    description:
      "Heavy-duty NP4 RCC pipes designed for high-load underground infrastructure applications.",
    sizes: [
      { size: "900mm", price: "₹4,800" },
      { size: "1200mm", price: "₹6,400" },
      { size: "1500mm", price: "₹8,500" },
    ],
    features: [
      "Very high load capacity",
      "Heavy structural strength",
      "Long service life",
    ],
  },

  {
    id: 12,
    name: "Industrial Drain Pipe",
    category: "Industrial Pipes",
    material: "Heavy Duty RCC",
    image: pipe12,
    rating: 4,
    description:
      "Heavy-duty RCC drainage pipes designed for industrial and commercial applications.",
    sizes: [
      { size: "600mm", price: "₹2,900" },
      { size: "700mm", price: "₹3,300" },
      { size: "900mm", price: "₹4,600" },
    ],
    features: [
      "Industrial-grade construction",
      "High durability",
      "Low maintenance",
    ],
  },

  {
    id: 13,
    name: "Highway Culvert Pipe",
    category: "Infrastructure Pipes",
    material: "Reinforced Cement Concrete",
    image: pipe13,
    rating: 5,
    description:
      "High-strength RCC culvert pipes for highways, roads, bridges, and infrastructure projects.",
    sizes: [
      { size: "600mm", price: "₹3,000" },
      { size: "900mm", price: "₹4,500" },
      { size: "1200mm", price: "₹6,800" },
    ],
    features: [
      "Highway suitable",
      "Heavy load resistance",
      "Long-lasting performance",
    ],
  },

  {
    id: 14,
    name: "Municipal Sewer Pipe",
    category: "Sewerage Pipes",
    material: "Precast Concrete",
    image: pipe14,
    rating: 4,
    description:
      "Precast concrete sewer pipes suitable for municipal drainage and sewage networks.",
    sizes: [
      { size: "500mm", price: "₹2,400" },
      { size: "650mm", price: "₹3,000" },
      { size: "900mm", price: "₹4,500" },
    ],
    features: [
      "Municipal-grade quality",
      "Durable construction",
      "Reliable underground performance",
    ],
  },

  {
    id: 15,
    name: "Irrigation Pipe",
    category: "Irrigation Pipes",
    material: "RCC Concrete",
    image: pipe15,
    rating: 4,
    description:
      "Durable RCC irrigation pipes designed for agricultural water distribution systems.",
    sizes: [
      { size: "600mm", price: "₹2,800" },
      { size: "850mm", price: "₹3,900" },
      { size: "1000mm", price: "₹5,000" },
    ],
    features: [
      "Efficient water flow",
      "Strong RCC construction",
      "Suitable for agriculture",
    ],
  },
  {
    id: 16,
    name: "Highway Drainage Pipe",
    category: "Drainage Pipes",
    material: "Heavy Duty Reinforced Concrete",
    image: pipe16,
    rating: 5,
    description:
      "Heavy-duty RCC drainage pipes manufactured for efficient stormwater management, roadside drainage, highway projects, and large-scale infrastructure applications.",
    sizes: [
      { size: "600mm", price: "₹2,800" },
      { size: "850mm", price: "₹3,900" },
      { size: "1000mm", price: "₹5,000" },
    ],
    features: [
      "High load-bearing capacity",
      "Excellent resistance to water and weather",
      "Durable reinforced concrete construction",
      "Ideal for highways and infrastructure projects",
      "Efficient stormwater drainage",
      "Long service life with low maintenance",
    ],
  },
];

export default products;

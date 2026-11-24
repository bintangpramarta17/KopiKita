export const CATEGORIES = ['Semua', 'Coffee', 'Non-Coffee', 'Pastry'];

export const MENU_DATA = [
  {
    id: '1',
    name: 'Iced Latte',
    category: 'Coffee',
    price: 28000,
    rating: 4.8,
    description:
      'Perpaduan double shot espresso dengan susu segar dingin dan sirup karamel lembut.',
    ingredients: ['Double Espresso', 'Susu', 'Milk foam', 'Es Batu'],
    variants: ['Ice', 'Hot'],
    image: require('../../assets/IceLatte.jpg'),
  },
  {
    id: '2',
    name: 'Cappuccino',
    category: 'Coffee',
    price: 25000,
    rating: 4.7,
    description:
      'Espresso seimbang dengan steamed milk dan lapisan foam tebal yang creamy.',
    ingredients: ['Espresso', 'Steamed Milk', 'Milk Foam'],
    variants: ['Hot', 'Ice'],
    image: require('../../assets/Capuchino.jpg'),
  },
  {
    id: '3',
    name: 'Matcha Latte',
    category: 'Non-Coffee',
    price: 30000,
    rating: 4.9,
    description:
      'Bubuk matcha Jepang autentik yang dikocok lembut bersama susu segar pilihan.',
    ingredients: ['Matcha', 'Susu', 'Gula Cair'],
    variants: ['Ice', 'Hot'],
    image: require('../../assets/MatchaLatte.jpg'),
  },
  {
    id: '4',
    name: 'Croissant',
    category: 'Pastry',
    price: 24000,
    rating: 4.8,
    description:
      'Pastry berlapis renyah di luar dan lembut di dalam dengan aroma mentega Prancis.',
    ingredients: ['Tepung Terigu', 'Mentega Prancis', 'Ragi Alami'],
    variants: ['Hangat', 'Normal'],
    image: require('../../assets/Croissant.jpg'),
  },
];

export function formatRupiah(amount) {
  return 'Rp ' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
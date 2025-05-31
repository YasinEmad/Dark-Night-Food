import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD6imPQdm1Ur2zR2W9-CfclsTq8uuz8h30",
  authDomain: "batman-7a4fa.firebaseapp.com",
  projectId: "batman-7a4fa",
  storageBucket: "batman-7a4fa.firebasestorage.app",
  messagingSenderId: "182125153191",
  appId: "1:182125153191:web:ab11f82f785dda73244482",
  measurementId: "G-GJV2ENJ37E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const menuData = {
  title: "Batman's Menu",
  subtitle: "Dining in the Shadows of Gotham",  headerImages: {
    left: {
      text: "Experience the legendary taste of Gotham's finest cuisine, where every dish is crafted with the same dedication to excellence that protects our city.",
      style: "text-lg text-gray-300 leading-relaxed mt-4"
    },
    right: {
      src: "/images/batman servise.jpg",
      alt: "Batman Service",
      style: "rounded-xl shadow-2xl shadow-yellow-500/20"
    }
  },
  footer: {
    quote: "In Gotham's finest dining experience, every bite tells a story of justice.",
    iconLetter: "B"
  },
  categories: {
    mains: {
      name: 'Hero Entrees',
      iconName: 'ChefHat',
      items: [
        { name: 'The Dark Knight Steak', description: 'Blackened ribeye with garlic fortress mash', price: 45, image: '/images/steak.png', rating: 4.9, chef: 'Alfred Pennyworth' },
        { name: 'Commissioner Gordon\'s Catch', description: 'Pan-seared salmon with Gotham greens', price: 32, image: '/images/Kitchen Flavors.jfif', rating: 4.6, chef: 'GCPD Grill' },
        { name: 'Batcave Burger', description: 'Wagyu beef with cave-aged cheddar', price: 28, image: '/images/berggger.jfif', rating: 4.8, chef: 'Bat-Culinary Division' },
        { name: 'Alfred\'s Lamb Roast', description: 'Herb-crusted rack with mint vigilante sauce', price: 38, image: '/images/sooos.jfif', rating: 5.0, chef: 'Alfred Pennyworth' }
      ]
    },
    drinks: {
      name: 'Vigilante Drinks',
      iconName: 'Wine',
      items: [
        { name: 'Batmobile Martini', description: 'Black vodka with midnight olives', price: 15, image: '/images/Vodka Black Velvet.jfif', rating: 4.7, chef: 'The Bat-Bar' },
        { name: 'Joker\'s Poison', description: 'Green cocktail with toxic twist', price: 14, image: '/images/Green cocktail with toxic twist.png', rating: 4.1, chef: 'Ace Chemicals Lab' },
        { name: 'Wayne Enterprises Wine', description: 'Exclusive vintage from the manor', price: 22, image: '/images/The Old Fashioned Cocktail.jfif', rating: 4.9, chef: 'Wayne Vineyards' },
        { name: 'Signal Light Whiskey', description: 'Smoky bourbon with amber glow', price: 18, image: '/images/Smoked Old Fashioned.jfif', rating: 4.5, chef: 'GCPD Speakeasy' }
      ]
    },
    desserts: {
      name: 'Sweet Justice',
      iconName: 'IceCream',
      items: [
        { name: 'Batarang Chocolate Tart', description: 'Dark chocolate with gold dust', price: 12, image: '/images/Rich Dark Chocolate Hearts in a Luxurious Still Life.jfif', rating: 4.8, chef: 'Bat-Bakery' },
        { name: 'Robin\'s Nest Cake', description: 'Red velvet with cream cheese cave', price: 10, image: '/images/Red Velvet Cheesecake with Cookie Dough.jfif', rating: 4.6, chef: 'Titans Treat Co.' },
        { name: 'Riddler\'s Mystery Box', description: 'Surprise dessert with question marks', price: 14, image: '/images/Red Velvet Oreo Cheesecake.jfif', rating: 4.3, chef: 'Enigma Confections' },
        { name: 'Catwoman\'s Cream', description: 'Vanilla panna cotta with berry claws', price: 11, image: '/images/Delicious Blueberry Desserts Ideas.jfif', rating: 4.7, chef: 'Selina\'s Sweets' }
      ]
    },
    coffee: {
      name: 'Gotham Brew',
      iconName: 'Coffee',
      items: [
        { name: 'Dragon tea', description: 'Smoky and bold, a true hero\'s brew', price: 6, image: '/images/Lapsang Souchong Tea Recipe.jfif', rating: 4.9, chef: 'Wayne Coffee Corp.' },
        { name: 'Wayne Manor Latte', description: 'Rich espresso with steamed luxury', price: 8, image: '/images/Espresso Mascarpone Recipes.jfif', rating: 4.7, chef: 'Alfred\'s Cafe' },
        { name: 'Commissioner\'s Coffee', description: 'Classic Americana for long nights', price: 5, image: '/images/download (7).jfif', rating: 4.5, chef: 'GCPD Break Room' },
        { name: 'Batcave Cappuccino', description: 'Frothy foam art of the bat signal', price: 7, image: '/images/51 Quick Simple Syrup Cocktails.jfif', rating: 4.8, chef: 'Bat-Barista' }
      ]
    }
  }
};

// Upload menu data to Firestore
export async function uploadMenu() {
  try {
    await setDoc(doc(db, 'menu', 'batmanMenu'), menuData);
    console.log('Menu data uploaded successfully');
    return true;
  } catch (error) {
    console.error('Error uploading menu data:', error);
    return false;
  }
}

export default menuData;




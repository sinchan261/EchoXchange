import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Navbar1 from "./Navbar1";

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Drilling Machine',
      price: 'Rs. 50/kg',
      stock: 'In Stock',
      image: 'image20.png'
    },
    {
      id: 2,
      name: 'Torn Shoes',
      price: 'Rs. 120/pair',
      stock: 'In Stock',
      image: 'image19.png'
    },
    {
      id: 3,
      name: 'Rotten Grains',
      price: 'Rs. 20/kg',
      stock: 'Out of Stock',
      image: 'image18.png'
    }
  ]);

  const handleDelete = (id:number) => {
    const updatedItems = wishlistItems.filter(item => item.id !== id);
    setWishlistItems(updatedItems);
  };

  return (
    <div className="p-5">
      <Navbar1 />
      <img 
        src="https://4waste.com.au/wp-content/uploads/2017/04/wheelbarrow-1.jpg" 
        alt=""  
        className="mx-auto mb-5 h-60 w-full object-cover" 
      />

      <div className="w-[80%] m-auto">
        <p className="text-center text-2xl mb-5">My Wishlist</p>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="p-3 font-normal">Product</th>
              <th className="p-3 font-normal">Price</th>
              <th className="p-3 font-normal">Stock Status</th>
              <th className="p-3 font-normal">Add to Cart</th>
              <th className="p-3 font-normal">Remove</th>
            </tr>
          </thead>
          <tbody>
            {wishlistItems.map(item => (
              <tr key={item.id} className="border-b border-gray-200">
                <td className="flex items-center gap-4 p-3">
                  <img src={item.image} alt={item.name} className="h-10 w-10 object-cover rounded" />
                  <span>{item.name}</span>
                </td>
                <td className="p-3">{item.price}</td>
                <td className={`p-3 ${item.stock === 'Out of Stock' ? 'text-red-500' : 'text-green-600'}`}>{item.stock}</td>
                <td className="p-3">
                  <button
                    className="bg-green-500 text-white px-4 py-1 rounded-2xl disabled:opacity-50"
                    disabled={item.stock === 'Out of Stock'}
                  >
                    Add to Cart
                  </button>
                </td>
                <td className="p-3 text-center">
                  <button onClick={() => handleDelete(item.id)} className="text-red-600 text-xl hover:scale-110">
                    <FaTimes />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {wishlistItems.length > 0 && (
          <div className="flex justify-center mt-10">
            <button className="bg-green-500 text-white px-8 py-3 rounded-full text-lg hover:bg-green-600 cursor-pointer">
              Place Order
            </button>
          </div>
        )}

        {wishlistItems.length === 0 && (
          <p className="text-center text-gray-500 mt-10">Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
}

export default Wishlist;

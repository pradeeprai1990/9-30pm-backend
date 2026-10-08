"use client"
import Link from 'next/link';
import { MdDeleteOutline, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { deleteWishlist } from '@/redux/wishlistSlice';

export default function WishlistPage() {

  let wishlist= useSelector((myStores)=>myStores.wishlistStore.wishlist)

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full mx-auto max-w-[1120px]">
        <div className="grid grid-cols-1 place-items-center border-b-1 border-gray-200 px-4 py-6">
          <h2 className="font-playfair text-4xl font-semibold text-[#1f1f1f] sm:text-5xl">
            Wishlist
          </h2>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 p-3 px-6 text-sm md:space-x-2">
              <li className="font-rubik text-dark-gray">
                <Link href="/">Home</Link>
              </li>
              <li className="font-rubik text-orange-dim">
                <div className="flex items-center">
                  <MdOutlineKeyboardArrowRight className="mr-2" /> Wishlist
                </div>
              </li>
            </ol>
          </nav>
        </div>
        {
          wishlist.length == 0 ?
          (
            <div className="w-full grid justify-center items-center text-center">
              <img src="/wishlist-Empty.jpg" alt="not found" />
              <p>Your wishlist is empty!</p>
            </div>
          )
          :
          (
            <div>
              <table className="w-full border-collapse bg-white shadow rounded">
              <thead className="bg-gray-100 border-b-3 border-orange-dim ">
                <tr>
                  <th className="p-4">Action</th>
                  <th className="p-4">Image</th>
                  <th className="p-4">Product</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Availability</th>
                  
                </tr>
              </thead>

              <tbody>
                {
                  wishlist.map((wishlistObj, index) => (
                    <WishlistCard key={index} item={wishlistObj}/>
                  ))  
                }
              </tbody>
            </table>
            </div>
          )
        }
      </div>
    </div>
  )
}
function WishlistCard({item}){
  let {id, image, name, original_price, stock}= item;
  let dispatch = useDispatch(); 
    let removeWishlist = () =>{
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) 
            dispatch(deleteWishlist({id}))
            Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        });
      }
  return(
    <tr key={id} className="text-center border-gray-100">
      <td className="border border-gray-100 p-2">
        <button
          key={id}
          className="px-4 py-2 rounded"
        >
          <MdDeleteOutline onClick={removeWishlist} />
        </button>
      </td>
      <td className="border border-gray-100 p-2">
        <img
          src={image}
          className="w-24 h-24 mx-auto rounded object-cover"
        />
      </td>

      <td className="border border-gray-100 p-2 font-semibold">{name}</td>

      <td className="border border-gray-100 p-2">Rs. {original_price}</td>

      <td className="border border-gray-100 p-2">
          <div className="flex items-center justify-center gap-2 p-1">
              {stock ? (
                <>
                  <span className="text-green-700 text-sm font-semibold">In Stock</span>
                </>
              ) : (
                <>
                  <span className="text-dark-gray font-semibold">Out of Stock</span>
                </>
              )}
          </div>
      </td>

      <td className="border border-gray-100 p-2 font-bold">
        {stock ? 'In stock' : 'Out of stock'}
      </td>
    </tr>
  )
}
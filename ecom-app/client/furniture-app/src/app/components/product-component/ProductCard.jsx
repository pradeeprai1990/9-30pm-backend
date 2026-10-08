import Link from 'next/link';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { addToWishlist, deleteWishlist } from '@/redux/wishlistSlice';


export default function ProductCard({productData}){
  
  let {name, thumbnail, sale_price, original_price, category_name, stock, slug, id} = productData;
  let dispatch = useDispatch();
  let wishlist = useSelector((myStores)=>myStores.wishlistStore.wishlist)

  let checkItemInWishlist = wishlist.find((obj) => obj.id == id)
  
  let addToWishlistItem =()=>{
    let wishlistObj = {
      name,
      stock,
      original_price,
      image: thumbnail,
      quantity,
      id
    }
    dispatch(addToWishlist({wishlistObj}))
    toast.success("Item Added in Wishlist")
    
  }

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
    <>
      <div className=" w-[100%] inline-flex px-2 pb-4 ">
        <div className="relative bg-white inline-flex items-stretch w-full h-full p-0 box-border">
          <div className="relative shadow-lg rounded-lg min-w-full flex flex-col">
            <div className="relative">
              <div className={"relative rounded-t-lg w-full bg-white text-ellipsis	overflow-hidden"}>
                <Link href={`/product/${slug}`} className="bg-no-repeat bg-cover inline-block my-0 mx-auto text-center ">
                  <img
                    src={thumbnail}
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="relative p-2 box-border overflow-hidden grow text-center">
              <div className="w-full text-center text-xs leading-6 mx-0 my-1 text-gray-600">
                {category_name}
              </div>
              <div className="text-gray-800 max-h-[38px] text-sm font-semibold leading-5 overflow-hidden whitespace-normal break-words line-clamp-1 mb-4">
                <Link href={`/product/${slug}`}>
                  {name}
                </Link>
              </div>
              <div className='h-[1px] bg-linear-65 from-transparent via-zinc-200 via-40% to-transparent to-100% text-center my-2'>
              </div>
              <div>
                <div className="flex justify-center items-center w-full text-sm px-2 py-2 mb-2">
                  <span className='line-through text-gray-500 pr-2'>Rs. {sale_price}</span>
                  <span className='font-semibold text-orange-dim text-base'>Rs. {original_price}</span>
                </div>
              </div>
              
              <div className="min-h-[14px] text-xs flex justify-center gap-2 mb-4">
                <div 
                  className="text-black w-8 h-8 flex items-center justify-center bg-gray-300"
                  
                >
                  {
                    checkItemInWishlist ?
                    <FaHeart 
                    className='text-lg text-red-700'
                    onClick={removeWishlist}
                    />
                    :
                    <FaRegHeart 
                    className='text-lg'
                    onClick={addToWishlistItem}
                    />
                  }
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

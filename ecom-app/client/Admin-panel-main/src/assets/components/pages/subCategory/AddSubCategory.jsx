import axios from "axios";
import iziToast from "izitoast";
import { useEffect, useState } from "react";
import { FaRegImage } from "react-icons/fa6";
import { useNavigate } from "react-router";

export default function AddSubCategory() {
  let apiBaseUrl = import.meta.env.VITE_APIBASEPATH;
  let [parentCategory, setParentCategory] = useState([]);
  let Navigate = useNavigate();
  let getParents = () => {
    axios
      .get(`${apiBaseUrl}subcategory/parent`)
      .then((res) => res.data)
      .then((finalRes) => {
        setParentCategory(finalRes.data);
      });
  };

  useEffect(() => {
    getParents();
  }, []);

  let handlesubCategory = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target); //Form Data
    axios
      .post(`${apiBaseUrl}subcategory/create`, formData)
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          iziToast.show({
            title: "Success",
            message: finalRes.message,
            position: "topRight",
            color: "green",
          });
          Navigate("/sub-category/view");
        } else {
          iziToast.error({
            title: "Error",
            message: finalRes.error.name,
            position: "topRight",
          });
        }
      });
  };

  return (
    <div className="w-full min-h-[680px] px-5 bg-slate-50 py-10">
      <div className="mx-auto">
        <h3 className="text-[24px] font-semibold bg-gradient-to-r from-indigo-600 to-indigo-500 py-3 px-5 rounded-t-lg text-white border border-indigo-500">
          Add New Sub Category
        </h3>
        <form
          onSubmit={handlesubCategory}
          className="border border-slate-200 border-t-0 gap-6 flex bg-white p-6 rounded-b-lg shadow-sm"
        >
          <div className="flex flex-col">
            <label className="block mb-2 text-md font-medium text-gray-700">
              Image
            </label>
            <div className="relative w-60 h-60 border border-slate-200 rounded-lg overflow-hidden shadow bg-slate-100">
              <div className="relative w-full h-full overflow-hidden bg-slate-200 rounded-lg flex flex-col items-center justify-center gap-4">
                <div className="absolute inset-0 bg-slate-300 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.8s_linear_infinite]" />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <FaRegImage className="text-slate-600" size={55} />
                  <div className="w-28 h-3 bg-slate-400 rounded-full" />
                  <div className="w-20 h-3 bg-slate-400 rounded-full" />
                </div>
              </div>
              <input
                accept="image/*"
                name="image"
                className="absolute inset-0 opacity-0 cursor-pointer"
                type="file"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="mb-6">
              <label className="block mb-2 text-md font-medium text-gray-700">
                Select Parent Category
              </label>
              <select
                name="parent"
                defaultValue=""
                className="text-[17px] border cursor-pointer border-slate-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 block w-full py-2.5 px-3"
              >
                <option value="">Select Category</option>
                {parentCategory.map((parent, index) => {
                  return <option value={parent._id}>{parent.name}</option>;
                })}
              </select>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-md font-medium text-gray-700">
                Sub Category Name
              </label>
              <input
                type="text"
                name="name"
                autoComplete="off"
                className="text-[17px] border border-slate-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 block w-full py-2.5 px-3"
                placeholder="Enter sub category name"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-md font-medium text-gray-700">
                Slug
              </label>
              <input
                type="text"
                name="order"
                autoComplete="off"
                className="text-[17px] border border-slate-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 block w-full py-2.5 px-3"
                placeholder="Enter slug"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="mt-3 cursor-pointer text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-md px-6 py-2.5 shadow-sm transition-all"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

import axios from "axios";
import iziToast from "izitoast";
import { useNavigate } from "react-router";

export default function AddSlider() {
  let Navigate = useNavigate();
  let apiBaseUrl = import.meta.env.VITE_APIBASEPATH;

  let handleSlider = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target); //Form Data
    axios
      .post(`${apiBaseUrl}slider/create`, formData)
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          iziToast.show({
            title: "Success",
            message: finalRes.message,
            position: "topRight",
            color: "green",
          });
          Navigate("/sliders/view");
        } else {
          iziToast.error({
            title: "Error",
            message: Object.values(finalRes.error)[0],
            position: "topRight",
          });
        }
      });
  };

  return (
    <div className="w-full min-h-[680px] px-4 bg-slate-50 py-10">
      <div className="mx-auto">
        <h3 className="text-[24px] font-semibold bg-gradient-to-r from-indigo-600 to-indigo-500 py-3 px-5 rounded-t-lg text-white border border-indigo-500">
          Add New Slider
        </h3>
        <form
          onSubmit={handleSlider}
          className="border border-slate-200 border-t-0 gap-6 flex bg-white p-6 rounded-b-lg shadow-sm"
        >
          <div className="flex flex-col">
            <label className="block mb-2 text-md font-medium text-gray-700">
              Image
            </label>
            <div className="relative w-60 h-60 border border-slate-200 rounded-lg overflow-hidden shadow bg-slate-100">
              <input accept="image/*" name="image" type="file" />
            </div>
          </div>
          <div className="basis-full">
            <div className="mb-6">
              <label className="block mb-2 text-md font-medium text-gray-700">
                Slider Title
              </label>
              <input
                type="text"
                name="title"
                autoComplete="off"
                className="text-[17px] border border-slate-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 block w-full py-2.5 px-3"
                placeholder="Enter slider title"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-md font-medium text-gray-700">
                Slider Link
              </label>
              <input
                type="text"
                name="link"
                autoComplete="off"
                className="text-[17px] border border-slate-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 block w-full py-2.5 px-3"
                placeholder="Enter slider link"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-md font-medium text-gray-700">
                Order
              </label>
              <input
                type="number"
                name="order"
                min="1"
                autoComplete="off"
                className="text-[17px] border border-slate-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 block w-full py-2.5 px-3"
                placeholder="Enter order number"
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

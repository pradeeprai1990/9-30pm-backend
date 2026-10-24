import axios from "axios";
import { useEffect, useState } from "react";
import { FaFilter, FaPenToSquare } from "react-icons/fa6";

export default function ViewSliders() {
  let [data, setData] = useState([]);
  let [path, setPath] = useState("");
  let apiBaseUrl = import.meta.env.VITE_APIBASEPATH;

  let getSlider = () => {
    axios
      .get(`${apiBaseUrl}slider/view`)
      .then((res) => res.data)
      .then((finalRes) => {
        setData(finalRes.data);
        setPath(finalRes.path);
      });
  };

  useEffect(() => {
    getSlider();
  }, []);

  return (
    <section className="w-full">
      <nav className="flex border-b bg-white px-6 py-3 shadow-sm">
        <ol className="inline-flex items-center space-x-2 text-gray-600">
          <li>
            <a className="text-md font-medium hover:text-indigo-600">Home</a>
          </li>
          <li>/</li>
          <li>
            <a className="text-md font-medium hover:text-indigo-600">Slider</a>
          </li>
          <li>/</li>
          <li className="text-md font-medium text-gray-900">View Slider</li>
        </ol>
      </nav>

      <div className="p-4">
        <div className="bg-slate-100 flex justify-between items-center py-3 px-4 rounded-t-md border border-slate-300">
          <div className="text-[26px] font-semibold">View Slider</div>
          <div className="flex gap-3 items-center">
            <button
              type="button"
              className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm border border-slate-300 transition-all"
            >
              <FaFilter /> Filter
            </button>
            <button className="text-white disabled:bg-slate-400 bg-indigo-600 hover:bg-indigo-700 text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all">
              Delete All
            </button>
            <button className="text-white disabled:bg-slate-400 bg-indigo-600 hover:bg-indigo-700 text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all">
              Change Status
            </button>
          </div>
        </div>

        <div className="border border-t-0 rounded-b-md border-slate-300 overflow-x-auto">
          <div className="min-w-[900px] text-center">
            <div className="grid grid-cols-[100px_70px_repeat(5,minmax(120px,1fr))_100px] text-sm uppercase bg-gray-50 border-b text-gray-700">
              <div className="px-2 py-3 font-semibold flex items-center justify-center gap-2">
                <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                Select
              </div>
              <div className="px-2 py-3 font-semibold">S. No.</div>
              <div className="px-2 py-3 font-semibold">Title</div>
              <div className="px-2 py-3 font-semibold">Image</div>
              <div className="px-2 py-3 font-semibold">Link</div>
              <div className="px-2 py-3 font-semibold">Order</div>
              <div className="px-2 py-3 font-semibold">Status</div>
              <div className="px-2 py-3 font-semibold">Action</div>
            </div>

            {data.map((obj, index) => {
              return (
                <div
                  key={obj._id}
                  className="grid grid-cols-[100px_70px_repeat(5,minmax(120px,1fr))_100px] bg-white border-b text-gray-700"
                >
                  <div className="px-2 py-4">
                    <input
                      type="checkbox"
                      className="slider-row-check w-4 h-4 cursor-pointer"
                    />
                  </div>
                  <div className="px-2 py-4">{index + 1}</div>
                  <div className="px-2 py-4">{obj.title}</div>
                  <div className="px-2 py-4">
                    <img width={50} className="mx-auto" src={path + obj.image} alt="" />
                  </div>
                  <div className="px-2 py-4 break-all">{obj.link}</div>
                  <div className="px-2 py-4">{obj.order}</div>
                  <div
                    className={`px-2 py-4 font-semibold ${
                      obj.status ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {obj.status ? "Active" : "Inactive"}
                  </div>
                  <div className="px-2 py-4">
                    <FaPenToSquare className="text-[gold] text-xl mx-auto" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import axios from "axios";
import iziToast from "izitoast";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass, FaPenToSquare, FaRotate } from "react-icons/fa6";
import { Link } from "react-router";

export default function ViewColors() {
  let [data, setData] = useState([]);

  let [ids, setIds] = useState([]);

  let apiBaseUrl = import.meta.env.VITE_APIBASEPATH;
  let getColors = () => {
    axios
      .get(`${apiBaseUrl}color/view`)
      .then((res) => res.data)
      .then((finalRes) => {
        setData(finalRes.data);
      });
  };

  useEffect(() => {
    getColors();
  }, []);

  let getCheckValue = (e) => {
    let checkValue = e.target.value;

    if (e.target.checked) {
      setIds([...ids, checkValue]);
    } else {
      setIds(ids.filter((v) => v != checkValue));
      //['6aa0445ac8d0855a5a0dfa1b', '6aa04467c8d0855a5a0dfa1c',  '6aa2e006d84216e18214b8b3']
    }
  };

  let allCheck = (e) => {
    if (e.target.checked) {
      let allDataIds = data.map((obj) => obj._id);
      setIds(allDataIds);
    } else {
      setIds([]);
    }
  };

  let deleteColor = () => {
    if (ids.length > 1) {
      axios
        .post(`${apiBaseUrl}color/delete`, { ids })
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status) {
            iziToast.show({
              title: "Success",
              message: finalRes.message,
              position: "topRight",
              color: "green",
            });
            getColors();
            setIds([]);
          }
        });
    } else {
      iziToast.error({
        title: "Error",
        message: "Please Select one Checkbox For Delete",
        position: "topRight",
      });
    }
  };

  let changeStatus=()=>{
    if (ids.length >= 1) {
      axios
        .post(`${apiBaseUrl}color/change-status`, { ids })
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status) {
            iziToast.show({
              title: "Success",
              message: finalRes.message,
              position: "topRight",
              color: "green",
            });
            getColors();
            setIds([]);
          }
        });
    } else {
      iziToast.error({
        title: "Error",
        message: "Please Select one Checkbox For Status Change",
        position: "topRight",
      });
    }
  }

  //data
  //ids
  return (
    <section className="w-full">
      <div className="border-b bg-white px-6 py-3 shadow-sm">
        <span className="text-gray-600">Home / Color / </span>
        <span className="font-medium">View</span>
      </div>
      <div
        id="color-filter"
        className="mx-auto mt-10 max-w-[1220px] bg-gray-50 px-2 py-5"
      >
        <div className="flex max-w-sm">
          <input
            type="text"
            className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm"
            placeholder="Search name..."
          />
          <button
            type="button"
            className="ms-2 rounded-lg bg-blue-700 p-2.5 text-white"
          >
            <FaMagnifyingGlass />
          </button>
        </div>
      </div>
      <div className="mx-auto min-h-[610px] max-w-[1220px] py-5">
        <div className="flex items-center justify-between rounded-t-md border border-slate-400 bg-slate-100 px-4 py-3">
          <div className="text-[26px] font-semibold">View Color</div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-white"
            >
              <FaMagnifyingGlass />
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-600 text-white"
            >
              <FaRotate />
            </button>
            <button
              type="button"
              onClick={changeStatus}
              className="rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white"
            >
              Change Status
            </button>
            <button
              type="button"
              onClick={deleteColor}
              className="rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="overflow-x-auto rounded-b-md border border-t-0 border-slate-400">
          <table className="min-w-[850px] w-full border-collapse text-left">
            <thead>
              <tr className="bg-gray-50 text-xs font-semibold uppercase">
                <th className="w-[70px] p-4">
                  <input
                    type="checkbox"
                    onChange={allCheck}
                    checked={ids.length == data.length}
                  />
                </th>
                <th className="w-[80px] p-4">S. No.</th>
                <th className="p-4">Color Name</th>
                <th className="w-[180px] p-4">Color</th>
                <th className="w-[100px] p-4">Order</th>
                <th className="w-[120px] p-4">Status</th>
                <th className="w-[100px] p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((color, index) => (
                <tr
                  key={color._id}
                  id={`color-row-${color._id}`}
                  className="border-t bg-white"
                >
                  <td className="p-4">
                    <input
                      onChange={getCheckValue}
                      type="checkbox"
                      value={color._id}
                      checked={ids.includes(color._id)}
                    />
                  </td>
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4">{color.name}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className={`h-7 w-7 rounded `} />
                      {color.code}
                    </div>
                  </td>
                  <td className="p-4">{color.order}</td>
                  <td className={`p-4 font-semibold `}>
                    {color.status ? "Active" : "Deactive"}
                  </td>
                  <td className="p-4">
                    <Link to={`/color/edit/${color._id}`}>
                        <FaPenToSquare className="text-yellow-500" />
                    </Link>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

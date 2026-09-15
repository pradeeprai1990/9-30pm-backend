import axios from "axios";
import iziToast from "izitoast";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
export default function AddColor() {
  let { id } = useParams();

  let [editData,setEditData]=useState(null)

  let Navigate = useNavigate();
  let apiBaseUrl = import.meta.env.VITE_APIBASEPATH;

  let handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      name: e.target.name.value,
      code: e.target.code.value,
      order: e.target.order.value,
    };

    if (id) {
      //Update
      axios
        .put(`${apiBaseUrl}color/update/${id}`, obj)
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status) {
            iziToast.show({
              title: "Success",
              message: finalRes.message,
              position: "topRight",
              color: "green",
            });
            Navigate("/color/view");
          } else {
            iziToast.error({
              title: "Error",
              message: finalRes.error.name,
              position: "topRight",
            });
          }
        });


    } else {
      axios
        .post(`${apiBaseUrl}color/create`, obj)
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status) {
            iziToast.show({
              title: "Success",
              message: finalRes.message,
              position: "topRight",
              color: "green",
            });
            Navigate("/color/view");
          } else {
            iziToast.error({
              title: "Error",
              message: finalRes.error.name,
              position: "topRight",
            });
          }
        });
    }
  };

  useEffect(()=>{
      if(id){
        axios.get(`${apiBaseUrl}color/details/${id}`)
        .then((res)=>res.data)
        .then((finalRes)=>{
         setEditData(finalRes.data);
          //{_id: '6aa584c1d1bd690d8e74e280', name: 'lightgreen', code: '#33ff7a', order: 7, status: false, …}
        })
      }
      else{
        setEditData(null)
      }
  },[id])

  return (
    <div className="w-full px-5 py-10">
      <div className="mx-auto max-w-[1220px]">
        <div className="rounded-t-md border border-slate-400 bg-slate-100 px-3 py-2 text-[20px] font-semibold">
          Add Colors
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-b-md border border-t-0 border-slate-400 p-4"
        >
          <div id="color-name" className="mb-5">
            <label className="block font-medium text-gray-900">
              Color Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={editData?.name}
              className="block w-full rounded-lg border-2 border-gray-300 px-3 py-2.5"
              placeholder="Enter Color Name"
            />
          </div>
          <div id="color-picker" className="mb-5">
            <label className="mb-2 block font-medium text-gray-900">
              Color Picker
            </label>
            <div className="flex items-center gap-4">
              <input
                name="code"
                type="color"
               defaultValue={editData?.code}
                className="h-44 w-56 cursor-pointer rounded-md border border-gray-300 bg-white p-2"
              />
              
            </div>
          </div>
          <div id="color-order" className="mb-5">
            <label className="block font-medium text-gray-900">Order</label>
            <input
              name="order"
              type="number"
               defaultValue={editData?.order}
              className="block w-full rounded-lg border-2 border-gray-300 px-3 py-2.5"
              placeholder="Enter Order"
            />
          </div>
          <button
            type="submit"
            className="my-8 rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-medium text-white"
          >
            {id ? "Update Color" : " Add Color"}
          </button>
        </form>
      </div>
    </div>
  );
}

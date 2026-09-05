import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  let [data, setData] = useState([]);
  let getContactList = () => {
    axios
      .get(`http://localhost:8000/contact/view`)
      .then((res) => res.data)
      .then((finalRes) => {
        setData(finalRes.data);
      });
  };

  let saveEnquiry = (e) => {
    e.preventDefault();
    let obj = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };
    axios
      .post(`http://localhost:8000/contact/save`, obj)
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status == "success") {
          alert(finalRes.message);
          getContactList();
        }
      });
  };

  useEffect(() => {
    getContactList();
  }, []);
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* ---------- Top Bar ---------- */}
      <header className="sticky top-0 z-10 w-full border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="flex items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 font-bold text-white shadow-lg shadow-indigo-500/30">
              CB
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight text-slate-900">
                Contact Book
              </h1>
              <p className="text-xs text-slate-500">
                Manage your contacts in one place
              </p>
            </div>
          </div>

          <span className="hidden items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200 sm:inline-flex">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>3
            Contacts
          </span>
        </div>
      </header>

      {/* ---------- Two Part Section ---------- */}
      <main className="w-full px-6 py-8 lg:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(340px,420px)_1fr] xl:gap-8">
          {/* ---------- Left : Form ---------- */}
          <section className="h-fit rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 lg:sticky lg:top-24 lg:p-7">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900">Add Contact</h2>
              <p className="mt-1 text-sm text-slate-500">
                Fill the details below to save a new entry.
              </p>
            </div>

            <form onSubmit={saveEnquiry} className="space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-1 ring-slate-200 transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-1 ring-slate-200 transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  className="w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-1 ring-slate-200 transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border-0 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-1 ring-slate-200 transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>

              <div className="flex gap-3 pt-1">
                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:opacity-90 active:scale-[0.99]"
                >
                  Save Contact
                </button>
                <button
                  type="reset"
                  className="rounded-xl bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
                >
                  Reset
                </button>
              </div>
            </form>
          </section>

          {/* ---------- Right : Table ---------- */}
          <section className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-6 py-5">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Saved Contacts
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  All submitted form entries.
                </p>
              </div>
              <input
                type="search"
                name="search"
                placeholder="Search contacts..."
                className="w-full rounded-xl bg-slate-50 px-4 py-2.5 text-sm outline-none ring-1 ring-slate-200 transition focus:bg-white focus:ring-2 focus:ring-indigo-500 sm:w-64"
              />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                    <th className="px-6 py-3 font-semibold">Name</th>
                    <th className="px-6 py-3 font-semibold">Email</th>
                    <th className="px-6 py-3 font-semibold">Phone</th>
                    <th className="px-6 py-3 font-semibold">Message</th>
                    <th className="px-6 py-3 text-right font-semibold">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {data.map((obj, index) => {
                    return (
                      <tr className="transition hover:bg-slate-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                              RS
                            </span>
                            <span className="font-medium text-slate-900">
                              {obj.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-slate-600">
                          {" "}
                          {obj.email}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-slate-600">
                          {obj.phone}
                        </td>
                        <td className="max-w-xs truncate px-6 py-4 text-slate-600">
                          {" "}
                          {obj.message}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right">
                          <button className="rounded-lg px-3 py-1.5 text-xs font-semibold text-indigo-600 transition hover:bg-indigo-50">
                            Edit
                          </button>
                          <button className="rounded-lg px-3 py-1.5 text-xs font-semibold text-rose-600 transition hover:bg-rose-50">
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between border-t border-slate-200 px-6 py-4 text-xs text-slate-500">
              <span>Showing 3 of 3 entries</span>
              <div className="flex gap-2">
                <button className="rounded-lg bg-slate-100 px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-200">
                  Prev
                </button>
                <button className="rounded-lg bg-slate-100 px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-200">
                  Next
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;

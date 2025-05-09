import { Pagination } from "@mui/material";
import React from "react";
import { FaPlus } from "react-icons/fa6";

const page = () => {
  return (
    <section className="p-3 sm:p-6 overflow-hidden space-y-4 flex flex-col h-full">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#1565C0]">User List</h2>
        <button
          type="button"
          className="flex items-center justify-center gap-1 cursor-pointer font-medium rounded-lg text-sm px-4 py-2 bg-[#1565C0] text-white"
        >
          <FaPlus />
          Add product
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border border-gray-300">
          <thead className="text-xs uppercase bg-[#F2F2F2]">
            <tr>
              <th className="px-4 py-3">name</th>
              <th className="px-4 py-3">email</th>
              <th className="px-4 py-3">gender</th>
              <th className="px-4 py-3">email</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-b-gray-300">
              <td scope="row" className="px-4 py-3">
                Apple iMac 27"
              </td>
              <td className="px-4 py-3">PC</td>
              <td className="px-4 py-3">Apple</td>
              <td className="px-4 py-3">300</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-4 pb-2 mt-auto">
        <p className="text-sm font-semibold">Page 1 of 10</p>
        <Pagination count={10} color="primary" />
      </div>
    </section>
  );
};

export default page;

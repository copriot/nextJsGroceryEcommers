"use client";

import { CiSearch } from "react-icons/ci";

export default function SearchForm() {
  return (
    <form className="flex items-center gap-2 py-2 px-4 border border-zinc-300 rounded-full md:w-1/2 focus-within:border-green-600 focus-within:[&>button]:text-green-600">
      <button className="text-2xl  text-zinc-400">
        <CiSearch />
      </button>
      <input
        type="text"
        placeholder="Search for products or category"
        className="outline-none max-md:truncate w-full text-zinc-400 focus:text-green-600"
      />
    </form>
  );
}

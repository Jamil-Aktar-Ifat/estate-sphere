const SearchBar = () => {
  return (
    <div className="my-4 flex items-center gap-5">
      <div>
        <input
          type="text"
          placeholder="Enter Keyword....."
          className="p-3 border md:pr-40"
        />
      </div>
      <button className="border px-5 py-3  custom-hover">Status</button>
      <button className="border px-5 py-3  custom-hover">Beds</button>
      <button className="border px-5 py-3  custom-hover">Baths</button>
      <button className="border px-5 py-3  custom-hover">Price</button>
      <button className="border px-5 py-3  custom-hover">Advanced</button>
      <button className="border px-5 py-3  bg-[#fd7e14] text-white hover:bg-slate-300">
        Search
      </button>
    </div>
  );
};

export default SearchBar;

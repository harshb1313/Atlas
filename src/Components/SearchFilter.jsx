export const SearchFilter = ({search, filter, setSearch, setFilter}) => {
    const  handleSearch=(event)=> {
        // event.preventDefault()
        setSearch(event.target.value)
    }
    const handleSelectChange=(event)=>{
        // event.preventDefault()
        setFilter(event.target.value)
    }
     return (
    <section className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mb-8 px-4 sm:px-0">
      {/* Search Input */}
      <input
        value={search}
        onChange={handleSearch}
        type="text"
        placeholder="Search by country name"
        className="w-full sm:w-[50%] px-4 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      {/* Region Filter */}
      <select
        className="w-full sm:w-[30%]  px-4 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        value={filter}
        onChange={handleSelectChange}
      >
        <option value="all">All Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  );
};
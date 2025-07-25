export const SearchFilter = ({search, filter, setSearch, setFilter}) => {
    const  handleSearch=(event)=> {
        event.preventDefault()
        setSearch(event.target.value)
    }
    const handleSelectChange=(event)=>{
        event.preventDefault()
        setFilter(event.target.value)
    }
    return (<section>
        <input value={search} onChange={handleSearch} type="text" placeholder="search" />
        <div>
        <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>)
}
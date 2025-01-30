function Search({updateSearchText}){
    return (
        <div className="searchbar">
                <label htmlFor="s
                earch">Search Pets:</label>
                <input
                    type="text"
                    id="search"
                    placeholder="Type a name to search..."
                    onChange={updateSearchText}
                />
            </div>
    )
}


export default Search
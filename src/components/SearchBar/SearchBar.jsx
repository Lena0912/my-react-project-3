import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({onSubmit}) => {
    const [query, setQuery] = useState("");
    

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() === "") {
            toast.error("Please, type a search term!");
            return;
        }
        onSubmit(query);
        setQuery("");
    }
    return (
       <header>
  <form onSubmit={handleSubmit}>
    <input
        type="text"
        value={query}
        onChange={handleInputChange}
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
    />
                <button type="submit">Search</button>
                <Toaster/>
  </form>
</header>
    )
}

export default SearchBar;
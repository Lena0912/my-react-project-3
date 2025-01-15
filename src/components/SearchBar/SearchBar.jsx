
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { SearchBarContainer, SearchBarInput, SearchButton, SearchInput } from "./SearchBar.styled";
import { TbZoomScan } from "react-icons/tb";

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
      <SearchBarContainer>
        <SearchBarInput onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            value={query}
            onChange={handleInputChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <SearchButton type="submit">
            <TbZoomScan size={24}/>
          </SearchButton>
          <Toaster />
        </SearchBarInput>
      </SearchBarContainer>
    );
}

export default SearchBar;
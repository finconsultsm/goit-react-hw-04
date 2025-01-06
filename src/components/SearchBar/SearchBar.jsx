import { useState } from "react";
import sc from "./SearchBar.module.css";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit, query, setQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Please enter a search query!");
      return;
    }
    onSubmit(query);
  };

  return (
    <header className={sc.header}>
      <form onSubmit={handleSubmit} className={sc.form}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus
          className={sc.input}
        />
        <button type="submit" className={sc.button}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;

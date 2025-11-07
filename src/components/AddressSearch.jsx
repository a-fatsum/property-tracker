import { useState, useEffect } from "react";
import { fetchAddressSuggestions } from "../api/domainApi";

export default function AddressSearch({ onSelectAddress }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Watch for changes in 'query'
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (query.length > 2) {
        const results = await fetchAddressSuggestions(query);
        setSuggestions(results);
      } else {
        setSuggestions([]);
      }
    }, 400); // debounce: wait 400ms after typing stops

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div className="address-search">
      <input
        type="text"
        placeholder="Enter property address..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((item, index) => (
            <li key={index} onClick={() => onSelectAddress(item)}>
              {item.address}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

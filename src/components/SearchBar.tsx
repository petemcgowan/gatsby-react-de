import React from "react"

interface SearchBarProps {
  filterText: string;
  onFilterTextInput (filterText: string) :any;
}
const SearchBar =  (props: SearchBarProps) => {
  //Pete delete below eventually, I'm waffling
  /* props here is filterText and
   onFilterTextInput function which is actually handleFilterTextInput
   */

  //Pete delete below eventually, I made this inline
  // handleFilterTextInputChange(e) {
  //   props.onFilterTextInput(e.target.value);
  // };

  return (
    <form>
      <input
        className="form-control"
        type="text"
        placeholder="Search..."
        value={props.filterText}
        // onChange={handleFilterTextInputChange}
        onChange={e => props.onFilterTextInput(e.target.value)}
      />
    </form>
  )
}

export default SearchBar

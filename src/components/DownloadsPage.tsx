import React, { useState } from "react"
import MixTable from "./MixTable"
import { Mixes } from "../data/Mixes"
import { djMixes } from "../data/djMixes"
import SearchBar from "./SearchBar"
import "./Downloads.css"

const DownloadsPage = () => {
  const [filterText, setFilterText] = useState("")
  const [filterDjMixText, setFilterDjMixText] = useState("")

  function handleFilterTextInput(filterText: string) {
    setFilterText(filterText)
  }

  function handleDJFilterTextInput(filterText: string) {
    setFilterDjMixText(filterText)
  }

  return (
    <div className="Download-card">
      <h4 className="Download-card">Remixes / Edits</h4>
      <SearchBar
        filterText={filterText}
        onFilterTextInput={handleFilterTextInput}
      />
      <MixTable mixes={Mixes} filterText={filterText} />

      <h4>DJ Mixes</h4>
      <SearchBar
        filterText={filterDjMixText}
        onFilterTextInput={handleDJFilterTextInput}
      />
      <MixTable mixes={djMixes} filterText={filterDjMixText} />
    </div>
  )
}

export default DownloadsPage

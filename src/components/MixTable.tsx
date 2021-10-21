import React from "react"
import "./MixTable.css";

interface MixesType {
  artist: string,
  song: string,
  link: string
}

interface MixTableProps {
  mixes: MixesType[],
  filterText: string
}

interface MixRowProps {
  mix: MixesType,
  key: string
}


const MixRow = (props: MixRowProps) => {
  return (
    <div >
      <div >{props.mix.artist}</div>
      <div >{props.mix.song}</div>
      <div>
        <a href={props.mix.link}>Download</a>
      </div>
    </div>
  )
}

const MixTable = (props: MixTableProps) => {
  var rows: JSX.Element[] = [];
  props.mixes.forEach(mix => {
    if (
      mix.artist.toLowerCase().indexOf(props.filterText.toLowerCase()) === -1 &&
      mix.song.toLowerCase().indexOf(props.filterText.toLowerCase()) === -1
    ) {
      return
    }
    rows.push(<MixRow mix={mix} key={mix.artist + mix.song} />)
  })

  return (
    <div>
    <div className="mixTableContainer">
      <div className="mixRows">
        {rows}
      </div>
    </div>
    </div>
  )
}

export default MixTable

import React from "react"

// Note that MixRow props isn't MixTable props
const MixRow = props => {
  return (
    <tr>
      <td key={props.mix.artist + props.mix.song}>{props.mix.artist}</td>
      <td key={props.mix.song}>
        <a href={props.mix.link}>{props.mix.song}</a>
      </td>
    </tr>
  )
}

const MixTable = props => {
  var rows = []
  props.mixes.forEach(mix => {
    if (
      mix.artist.toLowerCase().indexOf(props.filterText.toLowerCase()) === -1 &&
      mix.song.toLowerCase().indexOf(props.filterText.toLowerCase()) === -1
    ) {
      return
    }
    rows.push(<MixRow mix={mix} />)
  })

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Artist</th>
          <th>
            Play <br /> <i>(or download)</i>
          </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

export default MixTable

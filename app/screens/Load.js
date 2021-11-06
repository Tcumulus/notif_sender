import React from "react"
import writeFirestore from "../firebase/writeFirestore"

const Load = ({ title, time, color, toHome }) => {
  writeFirestore({title, time, color})
  toHome()
  return null
}

export default Load
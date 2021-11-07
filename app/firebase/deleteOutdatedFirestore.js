import { useEffect } from "react"
import { projectFirestore } from "./config"
import readFirestore from "./readFirestore"

const deleteOutdatedFirestore = () => {
  const blocks = readFirestore("blocks")

  useEffect(() => {
    blocks.forEach(block => {
      if (new Date(block.time) < new Date() - 60000*30) {
        const docRef = projectFirestore.collection("blocks").doc(block.id)
        docRef.delete()
      }
    })
  }, [blocks])
}

export default deleteOutdatedFirestore
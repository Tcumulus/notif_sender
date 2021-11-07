import { useEffect } from "react"
import { projectFirestore } from "./config"

const deleteFirestore = (collection, id) => {
  useEffect(() => {
    const docRef = projectFirestore.collection(collection).doc(id)
    docRef.delete()
  }, [collection, id])
}

export default deleteFirestore
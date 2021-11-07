import { useEffect } from "react";
import { projectFirestore } from "./config";

const writeFirestore = (title, time, color) => {
  useEffect(() => {
    const collectionRef = projectFirestore.collection("blocks")
    collectionRef.add({title, time, color})
  }, [title, time, color])
}

export default writeFirestore
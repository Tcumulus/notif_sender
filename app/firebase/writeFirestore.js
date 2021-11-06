import { useEffect } from "react";
import { projectFirestore } from "./config";

const writeFirestore = (block) => {
  useEffect(() => {
    const collectionRef = projectFirestore.collection("blocks")
    collectionRef.add({block})
  }, [block])
}

export default writeFirestore
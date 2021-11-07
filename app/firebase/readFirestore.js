import { useState, useEffect } from "react";
import { projectFirestore } from "./config";

const readFirestore = (collection) => {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    const unsub = projectFirestore.collection(collection)
      .orderBy("time")
      .onSnapshot((snap) => {
        let documents = []
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id})
        })
        setDocs(documents)
      })
    return () => unsub()
  }, [collection])
  return docs
}

export default readFirestore
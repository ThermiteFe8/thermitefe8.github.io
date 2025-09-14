import { doc, setDoc } from "firebase/firestore"; 

await setDoc(doc(db, "cities", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA"
});
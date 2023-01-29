import { fb } from "../firebase";
import { collection, deleteDoc, getDocs, getFirestore, doc } from 'firebase/firestore'
import { useDispatch } from "react-redux";

export default async function deleteDb(id){
    const fireDb = getFirestore(fb)
    await deleteDoc(doc(fireDb, "encuestados", id));

    console.log('Borrado con exito: ')
}
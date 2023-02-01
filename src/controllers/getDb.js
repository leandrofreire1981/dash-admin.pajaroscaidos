import { fb } from "../firebase";
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { GET_ADMIN } from "../redux/actions";

export default async function getDb(){
    const fireDb = getFirestore(fb)
    let data = []
    let dataAdmin = []
    const admin = await getDocs(collection(fireDb, "administrador"))
    admin.forEach(r => {
        dataAdmin.push(r.data().email)
    })
    const querySnapshot = await getDocs(collection(fireDb, "encuestados"))
    querySnapshot.forEach(doc => { 
        let aux = {
            full_name: doc.data().full_name,
            atencion: doc.data().atencion,
            auxilios: doc.data().auxilios,
            celular: doc.data().celular,
            email: doc.data().email,
            exp: doc.data().exp,
            info: doc.data().info,
            orientacion: doc.data().orientacion,
            rescate: doc.data().rescate,
            user: doc.data().user,
            volunt: doc.data().volunt,
            sugerencias: doc.data().sugerencias,
            sobrevivio: doc.data().sobrevivio,
            id: doc.id
        }
        data.push(aux)        
     })    
    return { data, dataAdmin }
}
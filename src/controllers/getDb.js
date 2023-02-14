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
            auxilios: doc.data().auxilios,
            ciudad: doc.data().ciudad,
            edad: doc.data().edad,
            email: doc.data().email,
            exp: doc.data().exp,
            infoClara: doc.data().infoClara,
            infoClaraRes: doc.data().infoClaraRes,
            infoPrecisa: doc.data().infoPrecisa,
            infoPrecisaRes: doc.data().infoPrecisaRes,
            name: doc.data().name,
            rescate: doc.data().rescate,
            sugerencias: doc.data().sugerencias,
            user: doc.data().user,
            volunt: doc.data().volunt,
            id: doc.id
        }
        data.push(aux)        
     })    
    return { data, dataAdmin }
}
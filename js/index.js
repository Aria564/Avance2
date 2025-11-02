  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
  import { getFirestore, collection, addDoc,setDoc,doc} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
  
import {datos} from "./elementos.js"

  const firebaseConfig = {
    apiKey: "AIzaSyDh-kSlQ8P1yQR6ivC-FmQh1TMGf85IEmo",
    authDomain: "test-1d90b.firebaseapp.com",
    projectId: "test-1d90b",
    storageBucket: "test-1d90b.firebasestorage.app",
    messagingSenderId: "667369487759",
    appId: "1:667369487759:web:5d0c91a39ecca384dc1ffa",
    measurementId: "G-NRKE8YGCDW"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);


document.addEventListener('DOMContentLoaded', () => {
  if (datos.botonIS) {
    datos.botonIS.addEventListener('click', async () => { 
        datos.botonIS.addEventListener("click", async function(){
    try {
    const docRef = await addDoc(collection(db, "Cuenta"), {
        email: datos.email.value,
        password: datos.password.value
    });
    console.log("Document written with ID: ", docRef.id);
    } catch (e) {
    console.error("Error adding document: ", e);
    }
})

    });
  } else {
    console.warn('botonIS no está presente en esta página.');
  }

  if (datos.botonReg) {
    datos.botonReg.addEventListener('click', async () => { 
         datos.botonReg.addEventListener("click", async function() {
    try {
     await setDoc(doc(db, "Registro", datos.email.value), {
        month: datos.mes.value,
        day: Number(datos.dia.value),
        year: Number(datos.año.value),
        name: datos.nombre.value,
        password: datos.password.value
   });
    console.log("Document written with ID: ", datos.email.value);
    } catch (e) {
    console.error("Error adding document: ", e);
    }
  })

    });
  } else {
    console.warn('botonReg no está presente en esta página.');
  }
});

import Contact from './Contact'
import { initializeApp } from "firebase/app";
const firebase = () => {

    const firebaseConfig = {
apiKey: "AIzaSyDs3SGBrJeqbs9Bq5IJytE2yCQ2e7ukw1E",
authDomain: "miakf-ed52b.firebaseapp.com",
databaseURL: "https://miakf-ed52b-default-rtdb.firebaseio.com",
projectId: "miakf-ed52b",
storageBucket: "miakf-ed52b.appspot.com",
messagingSenderId: "652143223927",
appId: "1:652143223927:web:a67e31676c04c8369a1272"
};

const app = initializeApp(firebaseConfig);

  return (
    <div classname='app'>
        <Contact/>

    </div>
  )
}

export default firebase
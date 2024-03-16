import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_DATABASE_URL,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKER,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};
// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// }
getApps().length === 0 ? initializeApp(config) : getApp();

// export default firebase;
// const analytics = getAnalytics(app);

// const firebaseConfig = {
//   apiKey: "AIzaSyA1VkDKUc2i3R964ZCvq__dJcKSpTBDge8",
//   authDomain: "fir-recipes-e8ffb.firebaseapp.com",
//   projectId: "fir-recipes-e8ffb",
//   storageBucket: "fir-recipes-e8ffb.appspot.com",
//   messagingSenderId: "787915397519",
//   appId: "1:787915397519:web:9d8c3e6f2f5883fa3893fa",
//   measurementId: "G-8RHPG4PHJH",
// };
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

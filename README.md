1/ Firebase Project বানিয়েছেন কিনা? (ধাপ ১) — এটা ছাড়া কোড লিখলেও টেস্ট করা যাবে না।

2/ImgBB API key হাতে আছে কিনা? (ছবি আপলোড automate করতে লাগবে)

*Firebase project this email---> averydavis0171@gmail.com


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQBelfGnLnNSaCuBTdp8JC_Y8jsyQehE8",

  authDomain: "teach-hud-gadgets.firebaseapp.com",

  projectId: "teach-hud-gadgets",

  storageBucket: "teach-hud-gadgets.firebasestorage.app",
  
  messagingSenderId: "1081323460340",
  appId: "1:1081323460340:web:05e077438b7a0f7e9e70a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
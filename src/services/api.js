// পরে Vercel-এ deploy করার সময়, Vercel Dashboard-এ গিয়ে এই 
// একই variable (VITE_API_URL) বসাবেন, কিন্তু value হবে আসল backend URL 
// (যেমন https://backend-techhub-gadgets.vercel.app/api), 
// কোনো কোড বদলাতে হবে না।
import axios from "axios";
import { auth } from "./firebase";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Admin-protected route কল করার জন্য — Firebase token স্বয়ংক্রিয়ভাবে header-এ বসাবে
export const authedApi = async () => {
  const token = await auth.currentUser.getIdToken();
  return axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: { Authorization: `Bearer ${token}` },
  });
};



export default api;

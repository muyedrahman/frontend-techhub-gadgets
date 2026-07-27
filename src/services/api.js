// পরে Vercel-এ deploy করার সময়, Vercel Dashboard-এ গিয়ে এই 
// একই variable (VITE_API_URL) বসাবেন, কিন্তু value হবে আসল backend URL 
// (যেমন https://backend-techhub-gadgets.vercel.app/api), 
// কোনো কোড বদলাতে হবে না।
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default api;

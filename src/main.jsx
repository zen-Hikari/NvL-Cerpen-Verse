import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppFarel from './Pages/Sosok-Mistererius-Di-Malam-Minggu-Yang-Sunyi/AppFarel.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import AppJuna from './Pages/NovelDigital/Arjuna/AppJuna.jsx'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />,
  },
  {
    path: "/Horor/Sosok-Mistererius-Di-Malam-Minggu-Yang-Sunyi",
    element: <AppFarel />,
  },
  {
    path:"/Novel-Digital-Terbaik/Jodoh-Untuk-Arjuna",
    element:<AppJuna />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

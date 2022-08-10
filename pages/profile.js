import Header from "../components/Header";
import { userService } from '../services/userService';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Profile() {

  const router = useRouter();
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    const token = userService.checkLogin()
    if (token) {
      setUserLogged(true);
    }
    else {
      router.push('/singin');
    }
  })
   
  return (
    <div>
      <Header />
      <h1>Pagina principal del usuario</h1>
    </div>
  )
}
import Cookies from "universal-cookie";

export const userService = {
    checkLogin,
}

function checkLogin() {
    const cookies = new Cookies()
    const token = cookies.get("TOKEN");
    return token;
}

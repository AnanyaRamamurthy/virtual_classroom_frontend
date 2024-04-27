import secureLocalStorage from "react-secure-storage";

export function logout(router) {
    secureLocalStorage.clear();
    window.location.href = "/auth/login";
}
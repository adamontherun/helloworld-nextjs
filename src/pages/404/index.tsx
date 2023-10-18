import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        if (window.location.pathname !== "/") {
            console.log("Redirecting... to" + window.location.pathname + window.location.search);
            router.push(window.location.pathname + window.location.search);
        }
    }, [router]);
}
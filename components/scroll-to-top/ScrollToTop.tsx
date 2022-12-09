import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop(): null {
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => window.scrollTo(0, 0), 50);
    }, [location]);

    return null;
}

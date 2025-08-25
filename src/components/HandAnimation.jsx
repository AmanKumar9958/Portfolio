import { useEffect, useState } from "react";
import "./hand.css";

const HandAnimation = ({ delay = 2000 }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    if (!loading) return null;

    return (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center z-[999999] bg-[#DCE7FA]">
            <div className="hand relative w-20 h-16 ml-20">
                <div className="finger"></div>
                <div className="finger"></div>
                <div className="finger"></div>
                <div className="finger"></div>
                <div className="palm"></div>
                <div className="thumb"></div>
            </div>
        </div>
    );
};

export default HandAnimation;

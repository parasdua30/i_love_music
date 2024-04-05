import { useState, useRef, useEffect } from "react";
import ProgressBar from "./ProgressBar";

function MusicPlayer({ url }) {
    const [progress, setProgress] = useState(0);

    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current.src = url;
        audioRef.current.play();

        const interval = setInterval(() => {
            setProgress(
                (audioRef.current.currentTime / audioRef.current.duration) * 100
            );
        }, 1000);

        return () => clearInterval(interval);
    }, [url]);

    return (
        <div>
            <audio ref={audioRef} controls />

            <ProgressBar progress={progress} />
        </div>
    );
}

export default MusicPlayer;

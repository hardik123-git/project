import { useEffect, useMemo, useState } from "react";
import backgroundImage from "./assets/ImgVid/back.jpg";
import huggingVideo from "./assets/ImgVid/hugging.mp4";
import leavingVideo from "./assets/ImgVid/leaving.mp4";

const messageText = `From the moment I met you, my heart knew,
Life feels brighter in everything we do.
On this Valentine’s, I confess it’s true—
I dream of forever, just me and you.
Will you be mine, today and always?
`;

function Background() {
  const [showPopup, setShowPopup] = useState(false);
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [choice, setChoice] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const selectedVideo = useMemo(() => {
    if (choice === "yes") return huggingVideo;
    if (choice === "no") return leavingVideo;
    return null;
  }, [choice]);

  return (
    <main
      className="app"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      aria-live="polite"
    >
      {!choice && <div className="overlay" />}

      {!choice && showPopup && (
        <section className="popup" role="dialog" aria-modal="true">
          <div className={`envelope ${envelopeOpen ? "open" : ""}`}>
            <div className="envelope-flap" />
            <div className="envelope-body">
              {!envelopeOpen ? (
                <button
                  type="button"
                  className="flower-btn"
                  onClick={() => setEnvelopeOpen(true)}
                >
                  🌸
                </button>
              ) : (
                <div className="letter">
                  <p>{messageText}</p>
                  <div className="actions">
                    <button type="button" onClick={() => setChoice("yes")}>
                      Yes
                    </button>
                    <button type="button" onClick={() => setChoice("no")}>
                      No
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {choice && selectedVideo && (
        <section className="video-wrap">
          <video
            key={choice}
            className="video-player"
            src={selectedVideo}
            autoPlay
            controls
            playsInline
          />
        </section>
      )}
    </main>
  );
}

export default Background;

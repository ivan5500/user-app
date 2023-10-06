import Webcam from "react-webcam";
import { useCallback, useRef } from "react";

export function Photo({ savePhoto }) {
  const webcamRef = useRef(null);
  const constraints = {
    width: 300,
    height: 300,
    facingMode: "user",
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    savePhoto(imageSrc);
  }, [webcamRef, savePhoto]);

  return (
    <>
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/png"
            width={300}
            height={300}
            videoConstraints={constraints}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 offset-md-4 text-center">
          <button className="btn btn-primary" onClick={capture}>
            Tomar foto
          </button>
        </div>
      </div>
    </>
  );
}

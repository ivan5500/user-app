import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";

export function Photo() {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

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
      {imgSrc && <img src={imgSrc} />}
    </>
  );
}

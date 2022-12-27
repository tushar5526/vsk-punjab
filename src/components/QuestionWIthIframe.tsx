import { useContext, useEffect, useState } from "react";
import { IframeContextContext } from "../App";
import jwt from "jsonwebtoken";


const QuestionWithIframeProtected = ({
  questionId,
  height,
  width,
  nonDownloadable,
  params,
  loadCallback,
  type
}: {
  questionId: any;
  height?: string;
  width?: string;
  nonDownloadable?: boolean;
  params?: any;
  loadCallback?: any;
  type: number
}) => {
  var SK: any = process.env.REACT_APP_VSKP_METABASE_SECRET_KEY
  var SU: any = process.env.REACT_APP_VSKP_METABASE_SITE_URL


  console.log(SK, SU, "SK SU")
  const { hasFirstIframeLoaded, updateHasFirstIframeLoaded } =
    useContext(IframeContextContext);
  const [load, setLoad] = useState(false);
  const [url, setUrl] = useState("");
  const generateUrl = () => {
    if (type === 0) {
      const payload = {
        resource: { question: questionId },
        params: params || {},
        exp: Math.round(Date.now() / 1000) + 60 * 60 * 24, // 10 minute expiration
      };
      const token = jwt.sign(payload, SK as string);
      setUrl(
        SU as string +
        "/embed/question/" +
        token +
        "#bordered=false&titled=false&downloadable=" +
        !!!nonDownloadable
      );
    } else {
      var payload = {
        resource: { dashboard: questionId },
        params: params || {},
        exp: Math.round(Date.now() / 1000) + (10 * 60) // 10 minute expiration
      };

      const token = jwt.sign(payload, SK as string);
      setUrl(
        SU as string +
        "/embed/dashboard/" +
        token +
        "#bordered=false&titled=false&downloadable=" +
        !!!nonDownloadable
      );
    }
  };

  useEffect(() => {
    console.log(params, "parms filters")
    if (questionId) {
      generateUrl();
    }
  }, [questionId, params]);

  useEffect(() => {
    if (
      !hasFirstIframeLoaded &&
      !localStorage.getItem("hasFirstIframeLoaded")
    ) {
      setLoad(true);
    } else if (hasFirstIframeLoaded) {
      setLoad(true);
    }
  }, [hasFirstIframeLoaded]);
  if (!url) {
    return (
      <div>
        Not Authenticated, Please check if embed is enabled for this Object
      </div>
    );
  }

  if (!load) {
    return (
      <div
        style={{
          width: width || "100%",
          height: height || "300px",
        }}
      >
        Not Loading
      </div>
    );
  }
  return (
    <iframe
      src={url}
      title={url[0]}
      onLoad={(e) => {
        setTimeout(() => {
          updateHasFirstIframeLoaded(true);
          loadCallback();
        }, 300);
      }}
      style={{ margin: "1px" }}
      frameBorder="0"
      width={width || "100%"}
      height={height || "300px"}
      allowTransparency
    />
  );
};
const QuestionWithIframe = ({
  questionId,
  height,
  width,
  nonDownloadable,
  params,
  handleLoadCounter = () => console.log("no call back"),
  type = 0
}: {
  questionId: any;
  height?: string;
  width?: string;
  nonDownloadable?: boolean;
  params?: any;
  handleLoadCounter?: any;
  type?: number
}) => {
  return (
    <QuestionWithIframeProtected
      questionId={questionId}
      height={height}
      width={width}
      nonDownloadable={nonDownloadable}
      params={params}
      loadCallback={handleLoadCounter}
      type={type}
    />
  );
};
export default QuestionWithIframe;

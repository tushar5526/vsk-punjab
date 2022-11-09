import React, { useContext, useEffect, useState } from "react";
import { IframeContextContext } from "../App";

const jwt = require("jsonwebtoken");

const METABASE_SITE_URL = "https://vskhp.in/metabase";
const METABASE_SECRET_KEY =
  "68a529116afd75d19c1d625133ea50207a6571d5e786a25a24c14f61555886b5";
const QuestionWithIframeProtected = ({
  questionId,
  height,
  width,
  nonDownloadable,
  params,
  loadCallback,
}: {
  questionId: any;
  height?: string;
  width?: string;
  nonDownloadable?: boolean;
  params?: any;
  loadCallback?: any;
}) => {
  const { hasFirstIframeLoaded, updateHasFirstIframeLoaded } =
    useContext(IframeContextContext);
  const [load, setLoad] = useState(false);
  const [random, setRandom] = useState(0);
  const [url, setUrl] = useState("");
  const generateUrl = () => {
    const payload = {
      resource: { question: questionId },
      params: params || {},
      exp: Math.round(Date.now() / 1000) + 60 * 60 * 24, // 10 minute expiration
    };
    const token = jwt.sign(payload, METABASE_SECRET_KEY);
    setUrl(
      METABASE_SITE_URL +
        "/embed/question/" +
        token +
        "#bordered=false&titled=false&downloadable=" +
        !!!nonDownloadable
    );
  };

  useEffect(() => {
    if (questionId) {
      generateUrl();
    }
  }, [questionId, params?.month, params?.Quarter]);

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
}: {
  questionId: any;
  height?: string;
  width?: string;
  nonDownloadable?: boolean;
  params?: any;
  handleLoadCounter?: any;
}) => {
  useEffect(() => {
    console.log(params);
  }, []);
  return (
    <QuestionWithIframeProtected
      questionId={questionId}
      height={height}
      width={width}
      nonDownloadable={nonDownloadable}
      params={params}
      loadCallback={handleLoadCounter}
    />
  );
};
export default QuestionWithIframe;

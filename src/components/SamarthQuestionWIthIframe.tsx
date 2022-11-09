import React, { useContext, useEffect, useState } from "react";
import { IframeContextContext } from "../App";

import jwt from "jsonwebtoken";

const METABASE_SITE_URL = "https://samarthhp-metabase.in";
const METABASE_SECRET_KEY =
  "9f9b235cc2efc4af8cbaf8a1b727c3104ff2d87663f8682e5e07be78cd00573a";
const SamarthQuestionWithIframeProtected = ({
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
      resource: { dashboard: questionId },
      params: params || {},
      exp: Math.round(Date.now() / 1000) + 60 * 60 * 24, // 10 minute expiration
    };
    const token = jwt.sign(payload, METABASE_SECRET_KEY);
    setUrl(
      METABASE_SITE_URL +
      "/embed/dashboard/" +
      token +
      "#bordered=true&titled=true" +
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
const SamarthQuestionWithIframe = ({
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
    console.log(params, "filterdist");
  }, []);
  return (
    <SamarthQuestionWithIframeProtected
      questionId={questionId}
      height={height}
      width={width}
      nonDownloadable={nonDownloadable}
      params={params}
      loadCallback={handleLoadCounter}
    />
  );
};
export default SamarthQuestionWithIframe;

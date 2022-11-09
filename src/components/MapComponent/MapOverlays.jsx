// import { Map } from "leaflet";
import { useMap, Rectangle, Polygon, SVGOverlay } from "react-leaflet";
import { useEffect, useMemo, useState } from "react";
// import { overlays } from "./config.json";

// const allOverlays = overlays.map((overlay) => {
//   overlay.byGeoJson.forEach((item) => {
//     return [item[1], item[0]];
//   });
//   return overlay;
//   overlay.geoJson.array.forEach((element) => {});
// });

const MapOverlays = ({ overlays }) => {
  return (
    <>
      {overlays.map((item) => {
        if(!item.geoJson){
          return <></>
        }
        return (
          //   <SVGOverlay
          //     bounds={item.geoJson.map((item) => {
          //       return [item[1], item[0]];
          //     })}
          //   >
          <Polygon
            fillOpacity={item.opacity}
            pathOptions={{ color: item.color, stroke: false }}
            positions={item.geoJson.map((item) => {
              return [item[1], item[0]];
            })}
          />
          //   </SVGOverlay>
        );
      })}
    </>
  );
};

export default MapOverlays;

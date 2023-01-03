// import { Map } from "leaflet";
import { useMap, Rectangle, Polygon } from "react-leaflet";
import { useEffect, useMemo, useState } from "react";

let innerBounds = [
  [50.505, -29.09],
  [52.505, 29.09],
];

const MapBound = ({ bounds }) => {
  let byGeoJson = !!bounds.byGeoJson.length;
  if (byGeoJson) {
    innerBounds = bounds.byGeoJson.map((item) => {
      return [item[1], item[0]];
    });
  } else {
    innerBounds = bounds.byBbox.map((item) => {
      return [item[1], item[0]];
    });
  }

  const map = useMap();

  useEffect(() => {
    let byGeoJson = !!bounds.byGeoJson.length;
    if (byGeoJson) {
      innerBounds = bounds.byGeoJson.map((item) => {
        return [item[1], item[0]];
      });
    } else {
      innerBounds = bounds.byBbox.map((item) => {
        return [item[1], item[0]];
      });
    }
  }, [bounds]);

  useEffect(() => {
    innerBounds.length && map.fitBounds(innerBounds);
  });

  const innerHandlers = useMemo(
    () => ({
      click() {
        map.fitBounds(innerBounds);
      },
    }),
    [map]
  );

  return (
    <>
      {byGeoJson ? (
        <Polygon
          positions={innerBounds}
          bounds={innerBounds.length ? innerBounds : [[]]}
          eventHandlers={innerHandlers}
          pathOptions={{ color: "blue", stroke: false }}
        />
      ) : (
        <Rectangle
          positions={innerBounds}
          bounds={innerBounds}
          eventHandlers={innerHandlers}
          pathOptions={{ fill: false, stroke: false }}
        ></Rectangle>
      )}
    </>
  );
};

export default MapBound;

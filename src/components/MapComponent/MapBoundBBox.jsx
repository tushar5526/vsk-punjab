// import { Map } from "leaflet";
import { useMap, Rectangle, Polygon } from "react-leaflet";
import { useEffect, useMemo, useState } from "react";
import { bounds } from "./config.json";
import parameters from "../../services/parameters";

// const innerBounds = bounds.byGeoJson.map((item) => {
//   return [item[1], item[0]];
// });

const outerBounds = [
  [50.505, -29.09],
  [52.505, 29.09],
];

const redColor = { color: "red" };
const whiteColor = { color: "white" };

const MapBound = () => {
  const [bounds, setBounds] = useState(innerBounds);
    const [config, setConfig] = useState([]);
    const getConfig = () => {
        if (config.length) {
            return
        }

        fetch( '/educationDashboardConfig.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {

                return response.json();
            })
            .then(function (configJson) {

                setBounds(configJson.byGeoJson.map((item) => {
                    return [item[1], item[0]];
                }))
            });

    }

    const map = useMap();

  useEffect(() => {
    bounds.length && map.fitBounds(bounds);
  });

  const innerHandlers = useMemo(
    () => ({
      click() {
        setBounds(bounds);
        map.fitBounds(bounds);
      },
    }),
    [map]
  );
  const outerHandlers = useMemo(
    () => ({
      click() {
        setBounds(outerBounds);
        map.fitBounds(outerBounds);
      },
    }),
    [map]
  );

  return (
    <>
      <Polygon
        positions={bounds}
        bounds={outerBounds}
        eventHandlers={outerHandlers}
        pathOptions={bounds === outerBounds ? redColor : whiteColor}
      />
      <Polygon
        positions={bounds}
        bounds={bounds}
        eventHandlers={innerHandlers}
        pathOptions={bounds === bounds ? redColor : whiteColor}
      />
    </>
  );
};

export default MapBound;

import React, { FC } from "react";
import ReactDOM from "react-dom";

import { YMapLocationRequest } from "ymaps3";

const [ymaps3React] = await Promise.all([
  ymaps3.import("@yandex/ymaps3-reactify"),
  ymaps3.ready,
]);

const reactify = ymaps3React.reactify.bindTo(React, ReactDOM);
const { YMap, YMapDefaultSchemeLayer, YMapControls, YMapDefaultFeaturesLayer } =
  reactify.module(ymaps3);
const { YMapZoomControl } = reactify.module(
  await ymaps3.import("@yandex/ymaps3-controls@0.0.1")
);
const { YMapDefaultMarker } = reactify.module(
  await ymaps3.import("@yandex/ymaps3-markers@0.0.1")
);

const LOCATION: YMapLocationRequest = {
  center: [27.508175, 53.925269],
  zoom: 18,
};

export const ContactsMapBlock: FC = () => {
  return (
    <div className="h-[500px] relative z-20">
      <YMap location={LOCATION} mode="vector">
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />

        <YMapDefaultMarker coordinates={[27.508175, 53.925269]} />
        <YMapControls position="right">
          <YMapZoomControl />
        </YMapControls>
      </YMap>
    </div>
  );
};

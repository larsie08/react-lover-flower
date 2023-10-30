import React, { FC } from "react";
import ReactDOM from "react-dom";

import {
  ContactsCardBlocks,
  ContactsFormBlock,
  ContactsTitleBlock,
} from "../../components";

import { ContactsBgColor } from "../../assets";

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

const LOCATION = { center: [27.508175, 53.925269], zoom: 18 };

const ContactsPage: FC = () => {
  return (
    <div className="contacts pt-[120px] relative bg-[#040A0A] h-[2300px]">
      <div className="absolute right-0 top-0 w-[342px] h-[274px] rounded-[342px] bg-[#922D2D] blur-[125px]" />
      <img
        className="absolute right-0 top-0"
        src="./img/bgElements/ContactsBg/ContactsFlowerTop.png"
        alt="flower"
      />
      <div className="absolute -left-36 top-0 w-[465px] h-[220px] -rotate-[71.859deg] rounded-[466px] bg-[#922D2D] blur-[125px]" />
      <img
        className="absolute left-0"
        src="./img/bgElements/ContactsBg/ContactsFlowerMiddle.png"
        alt="flower"
      />
      <div className="contacts__wrapper container mx-auto">
        <ContactsTitleBlock />
        <ContactsCardBlocks />
        <ContactsFormBlock />
        <div className="contacts__yandex_map flex flex-col mt-24 gap-5">
          <h1 className="text-[20px] text-light-turquoise font-bold tracking-[0.8px] uppercase">
            Мы на карте
          </h1>
          <div className="h-[500px]">
            <YMap location={LOCATION} mode="vector">
              <YMapDefaultSchemeLayer />
              <YMapDefaultFeaturesLayer />

              <YMapDefaultMarker coordinates={[27.508175, 53.925269]} />
              <YMapControls position="right">
                <YMapZoomControl />
              </YMapControls>
            </YMap>
          </div>
        </div>
      </div>
      <div className="absolute left-0 -bottom-48 w-[205px] h-[437px] rounded-[437px] bg-[#922D2D] blur-[125px]" />
      <ContactsBgColor />
    </div>
  );
};

export default ContactsPage;

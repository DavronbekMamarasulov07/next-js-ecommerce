"use client";

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function YandexMap() {
  return (
      <YMaps>
        <Map
          defaultState={{
            center: [55.76, 37.64], // Moskva
            zoom: 10,
          }}
          width="100%"
          height="500px"
        >
          <Placemark geometry={[55.76, 37.64]} />
        </Map>
      </YMaps>
  );
}

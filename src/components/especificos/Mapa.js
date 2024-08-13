"use client";

import estilo from "./styles/Mapa.module.css";

import React, { useEffect } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import { Zoom } from "ol/control";
import { MouseWheelZoom, PinchZoom } from "ol/interaction";

function Mapa({ latitud, longitud }) {
  useEffect(() => {
    // Crear la característica del marcador en la ubicación deseada
    const marker = new Feature({
      geometry: new Point(fromLonLat([longitud, latitud])), // Longitud y latitud de Lima, Perú
    });

    // Estilo del marcador
    marker.setStyle(
      new Style({
        image: new Icon({
          src: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // URL de un icono de marcador
          anchor: [0.5, 1],
          scale: 0.05, // Ajusta la escala para que el marcador sea visible
        }),
      })
    );

    // Crear la fuente vectorial y agregar la característica del marcador
    const vectorSource = new VectorSource({
      features: [marker],
    });

    // Crear la capa vectorial para el marcador
    const markerLayer = new VectorLayer({
      source: vectorSource,
    });

    // Crear el mapa con la capa de marcador
    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        // Agregar la capa de marcador al mapa
        markerLayer,
      ],
      // Longitud y latitud de Lima, Perú
      view: new View({
        center: fromLonLat([longitud, latitud]),
        zoom: 16,
      }),
      // Solo agrega el control de zoom al mapa
      controls: [new Zoom()],
    });

    // Desactivar el zoom por scroll y gestos de pinza
    const interactions = map.getInteractions();
    interactions.forEach((interaction) => {
      if (
        interaction instanceof MouseWheelZoom ||
        interaction instanceof PinchZoom
      ) {
        interaction.setActive(false);
      }
    });

    // Limpia el mapa al desmontar el componente
    return () => map.setTarget(null);
  }, [latitud, longitud]);

  return <div className={estilo.mapa} id="map" />;
}

export default Mapa;

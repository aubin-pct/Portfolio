import React, { useEffect, useState } from "react";
import SiteGestionNote from "./descriptions/SiteGestionNote";
import AppTrain from "./descriptions/AppTrain";
import VeryBadSplit from "./descriptions/VeryBadSplit";
import WavyMeteo from "./descriptions/WavyMeteo";
import OcrCnnProject from "./descriptions/OcrCnnProject";
import FirstRagProject from "./descriptions/FirstRagProject";

const components = {
  SiteGestionNote,
  AppTrain,
  VeryBadSplit,
  WavyMeteo,
  OcrCnnProject,
  FirstRagProject,
};

export default function ClientProjectLoader() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get("page");
    setPage(pageParam);
  }, []);

  if (!page) return <p>Chargement du projet...</p>;

  const SelectedComponent = components[page];
  if (!SelectedComponent) return <p>Composant introuvable pour : {page}</p>;

  return <SelectedComponent />;
}

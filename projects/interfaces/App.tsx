import React, { useState } from "react";
import Gallery from "./components/Gallery";
import InterfaceEditor from "./components/InterfaceEditor";
import { InterfaceConfig } from "./data/interfaces";

export default function App() {
  const [selectedInterface, setSelectedInterface] =
    useState<InterfaceConfig | null>(null);

  const handleSelectInterface = (config: InterfaceConfig) => {
    setSelectedInterface(config);
  };

  const handleBackToLibrary = () => {
    setSelectedInterface(null);
  };

  if (selectedInterface) {
    return (
      <InterfaceEditor
        interfaceConfig={selectedInterface}
        onBack={handleBackToLibrary}
      />
    );
  }

  return <Gallery onSelectInterface={handleSelectInterface} />;
}
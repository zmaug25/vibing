import React, { useState } from "react";
import Gallery from "./components/Gallery";
import InterfaceEditor from "./components/InterfaceEditor";
import { InterfaceConfig } from "./data/interfaces";

export default function App() {
  const [selectedInterface, setSelectedInterface] =
    useState<InterfaceConfig | null>(null);
  const [globalTexts, setGlobalTexts] = useState<Record<string, string>>({});

  const handleSelectInterface = (config: InterfaceConfig) => {
    setSelectedInterface(config);
  };

  const handleBackToLibrary = () => {
    setSelectedInterface(null);
  };

  const handleAICustomization = (context: string, generatedTexts: Record<string, string>) => {
    setGlobalTexts(generatedTexts);
    console.log('Stored global AI-generated texts:', generatedTexts);
  };

  if (selectedInterface) {
    return (
      <InterfaceEditor
        interfaceConfig={selectedInterface}
        onBack={handleBackToLibrary}
        globalTexts={globalTexts}
      />
    );
  }

  return (
    <Gallery 
      onSelectInterface={handleSelectInterface} 
      onAICustomization={handleAICustomization}
    />
  );
}
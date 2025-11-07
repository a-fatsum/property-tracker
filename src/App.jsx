import { useState } from "react";
import AddressSearch from "./components/AddressSearch";
import PropertyDetails from "./components/PropertyDetails";
import SuburbTrends from "./components/SuburbTrends";

function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleAddressSelect = (address) => {
    setSelectedProperty(address);
  };

  return (
    <div className="app">
      <h1>🏡 Property Tracker</h1>

      <AddressSearch onSelectAddress={handleAddressSelect} />

      {selectedProperty && (
        <>
          <PropertyDetails selectedProperty={selectedProperty} />
          <SuburbTrends suburb="Epping" postcode="3076" />
        </>
      )}
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { fetchPropertyEstimate } from "../api/domainApi";

export default function PropertyDetails({ selectedProperty }) {
  const [estimate, setEstimate] = useState(null);

  useEffect(() => {
    if (!selectedProperty) return;

    const loadEstimate = async () => {
      const data = await fetchPropertyEstimate(selectedProperty.propertyId);
      setEstimate(data);
    };

    loadEstimate();
  }, [selectedProperty]);

  if (!selectedProperty) return null;

  return (
    <div className="property-details">
      <h2>Property Details</h2>
      {estimate ? (
        <div>
          <h3>{estimate.address}</h3>
          <p>Estimated Value: ${estimate.estimate.toLocaleString()}</p>
          <p>
            Range: ${estimate.range[0].toLocaleString()} - $
            {estimate.range[1].toLocaleString()}
          </p>
          <p>Confidence: {estimate.confidence}</p>
          <p>Last Updated: {estimate.lastUpdated}</p>
        </div>
      ) : (
        <p>Loading estimate...</p>
      )}
    </div>
  );
}

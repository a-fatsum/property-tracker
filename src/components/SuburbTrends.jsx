import { useEffect, useState } from "react";
import { fetchSuburbTrends } from "../api/domainApi";

export default function SuburbTrends({ suburb, postcode }) {
  const [trend, setTrend] = useState(null);

  useEffect(() => {
    if (!suburb) return;

    const loadTrends = async () => {
      const data = await fetchSuburbTrends(suburb, postcode);
      setTrend(data);
    };

    loadTrends();
  }, [suburb, postcode]);

  if (!trend) return null;

  return (
    <div className="suburb-trends">
      <h2>Suburb Market Trends</h2>
      <p>
        Suburb: {trend.suburb} ({trend.postcode})
      </p>
      <p>Median Price: ${trend.medianPrice.toLocaleString()}</p>
      <p>Quarterly Growth: {trend.quarterlyGrowth}%</p>
      <p>Yearly Growth: {trend.yearlyGrowth}%</p>
      <p>Sales Count: {trend.salesCount}</p>
    </div>
  );
}

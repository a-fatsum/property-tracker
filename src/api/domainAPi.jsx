// Mock mode active until API approval
const MOCK_MODE = true;

const BASE_URL = "https://api.domain.com.au/v1";
const API_KEY = import.meta.env.VITE_DOMAIN_API_KEY;

export async function fetchAddressSuggestions(query) {
  if (MOCK_MODE) {
    // Simulate search results
    return [
      { propertyId: 101, address: "10 Example Street, Epping VIC 3076" },
      { propertyId: 102, address: "12 Example Street, Epping VIC 3076" },
    ];
  }
  // (keep your real fetch logic here for later)
}

export async function fetchPropertyEstimate(propertyId) {
  if (MOCK_MODE) {
    // Simulated property estimate
    return {
      propertyId,
      address: "10 Example Street, Epping VIC 3076",
      estimate: 880000,
      range: [850000, 900000],
      confidence: "High",
      lastUpdated: "2025-10-01",
    };
  }
}

export async function fetchSuburbTrends(suburb, postcode) {
  if (MOCK_MODE) {
    return {
      suburb,
      postcode,
      medianPrice: 870000,
      quarterlyGrowth: 2.3,
      yearlyGrowth: 6.1,
      salesCount: 45,
    };
  }
}

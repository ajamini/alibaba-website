import React, { useState } from 'react';

interface TowingRate {
  state: string;
  city: string;
  price: number;
}

const towingRates: TowingRate[] = [
  { state: 'CA', city: 'Anaheim', price: 180 },
  { state: 'CA', city: 'Antelope', price: 400 },
  { state: 'CA', city: 'Bakersfield', price: 220 },
  { state: 'CA', city: 'Burbank', price: 185 },
  { state: 'CA', city: 'Carson', price: 155 },
  { state: 'CA', city: 'Pittsburg', price: 410 },
  { state: 'CA', city: 'Fontana', price: 200 },
  { state: 'CA', city: 'Manheim', price: 210 },
  { state: 'CA', city: 'Fremont', price: 410 },
  { state: 'CA', city: 'Fresno', price: 300 },
  { state: 'CA', city: 'Gardena', price: 150 },
  { state: 'CA', city: 'Hayward', price: 410 },
  { state: 'CA', city: 'Hesperia', price: 220 },
  { state: 'CA', city: 'Lancaster', price: 230 },
  { state: 'CA', city: 'Wilmington', price: 150 },
  { state: 'CA', city: 'Los Angeles', price: 180 },
  { state: 'CA', city: 'Martinez', price: 410 },
  { state: 'CA', city: 'Mentone', price: 210 },
  { state: 'CA', city: 'Mira Loma', price: 200 },
  { state: 'CA', city: 'Hollywood', price: 200 },
  { state: 'CA', city: 'Rancho Cocamonga', price: 200 },
  { state: 'CA', city: 'Perris Sublot', price: 250 },
  { state: 'CA', city: 'Redding', price: 600 },
  { state: 'CA', city: 'Riverside Manheim', price: 200 },
  { state: 'CA', city: 'Riverside', price: 200 },
  { state: 'CA', city: 'Sacramento', price: 410 },
  { state: 'CA', city: 'Calton', price: 250 },
  { state: 'CA', city: 'San Deigo', price: 220 },
  { state: 'CA', city: 'San Martin', price: 410 },
  { state: 'CA', city: 'Santa Paula', price: 300 },
  { state: 'CA', city: 'Sun Valley', price: 200 },
  { state: 'CA', city: 'Tracy', price: 410 },
  { state: 'CA', city: 'Vallejo', price: 410 },
  { state: 'CA', city: 'Vallejo Sublot', price: 450 },
  { state: 'CA', city: 'Van Nuys', price: 200 },
  { state: 'CA', city: 'Adelanto', price: 350 },
  { state: 'CA', city: 'Downy', price: 150 },
  { state: 'CA', city: 'Perris', price: 250 },
  { state: 'CA', city: 'Bay point', price: 410 },
  { state: 'CA', city: 'Rancho Cordova', price: 410 },
  { state: 'CA', city: 'Modesto', price: 500 },
  { state: 'CA', city: 'Collton', price: 200 },
  { state: 'CA', city: 'Jurupa', price: 200 },
  { state: 'CA', city: 'Stockton', price: 420 },
  { state: 'CA', city: 'Santa Clarita, CA', price: 275 },
  { state: 'CA', city: 'Anderson', price: 600 },
  // Arizona
  { state: 'AZ', city: 'PHOENIX', price: 275 },
  { state: 'AZ', city: 'CHANDLER', price: 280 },
  { state: 'AZ', city: 'TOLLESON', price: 270 },
  { state: 'AZ', city: 'TUCSON', price: 350 },
  // Idaho
  { state: 'ID', city: 'Nampa', price: 800 },
  { state: 'ID', city: 'Nunn', price: 800 },
  { state: 'ID', city: 'Wilmington', price: 750 },
  // Montana
  { state: 'MT', city: 'HELENA (Difficult Area)', price: 1350 },
  { state: 'MT', city: 'MISSOULA (Difficult Area)', price: 1350 },
  { state: 'MT', city: 'BILLINGS (Difficult Area)', price: 1350 },
  // Nevada
  { state: 'NV', city: 'LAS VEGAS', price: 325 },
  { state: 'NV', city: 'RENO', price: 600 },
  { state: 'NV', city: 'HENDERSON', price: 300 },
  // Oregon
  { state: 'OR', city: 'EUGENE', price: 650 },
];

const groupByState = (rates: TowingRate[]): Record<string, TowingRate[]> => {
  return rates.reduce<Record<string, TowingRate[]>>((acc, rate) => {
    if (!acc[rate.state]) acc[rate.state] = [];
    acc[rate.state].push(rate);
    return acc;
  }, {});
};

const TowingRatesPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const filteredRates = towingRates.filter(rate =>
    rate.city.toLowerCase().includes(search.toLowerCase())
  );
  const grouped = groupByState(filteredRates);

  return (
    <>
      <section className="bg-primary-600 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Towing Rates</h1>
            <p className="text-xl text-primary-100">
              Find towing rates for different areas. Use the search box to quickly find your city.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8 max-w-md">
            <input
              type="text"
              placeholder="Search by city..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          {Object.keys(grouped).length === 0 ? (
            <div className="text-center text-gray-500">No results found.</div>
          ) : (
            Object.entries(grouped).map(([state, rates]) => (
              <div key={state} className="mb-12">
                <h2 className="text-2xl font-bold text-primary-500 mb-4">{state}</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">City</th>
                        <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rates.map((rate: TowingRate, idx: number) => (
                        <tr key={rate.city} className={idx % 2 === 0 ? 'bg-gray-50' : ''}>
                          <td className="px-6 py-4 border-b text-gray-800">{rate.city}</td>
                          <td className="px-6 py-4 border-b text-gray-800">${rate.price.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default TowingRatesPage;
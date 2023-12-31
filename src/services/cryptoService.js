const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const BASE_URL='https://api.coinmarketcap.com/data-api/v3/'
const base_url='https://rest.coinapi.io/v1/exchangerate';
const apiKey = 'F18C0EEF-68D7-47E3-9AAE-454AE2D2260B'; 

exports.getTop100Cryptos = async () => {
    try {
        const response = await axios.get(`${BASE_URL}cryptocurrency/listing?start=1&limit=100`);
    
        const cryptos = response.data.data.cryptoCurrencyList.map((crypto) => ({
          id: crypto.id,
          name: crypto.name,
          symbol: crypto.symbol,
          rank: crypto.cmcRank,
          marketPairs: crypto.marketPairCount,
          circulatingSupply: crypto.circulatingSupply,
          totalSupply: crypto.totalSupply,
          maxSupply: crypto.maxSupply,
          priceUSD: crypto.quotes[0].price,
          volume24hUSD: crypto.quotes[0].volume24h,
          percentChange24h: crypto.quotes[0].percentChange24h,
          marketCapUSD: crypto.quotes[0].marketCap,
          lastUpdated: crypto.lastUpdated,
        }));
    
        return cryptos;
      } catch (error) {
        console.error('Error fetching top cryptos:', error.message);
        throw error;
      }
}

exports.convertCurrency = async ({ amount, convert_id, id }) => {
  try {
    const apiUrl = `${base_url}/${convert_id}/${id}`;
    const response = await axios.get(apiUrl, {
      headers: {
        'X-CoinAPI-Key': apiKey
      }
    })
    return amount * Number(response.data.rate).toFixed(2);
  } catch (error) {
    console.error('Error converting currency:', error.message);
    throw error;
  }
};

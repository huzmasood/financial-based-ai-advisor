//@ts-nocheck
import { useQuery, QueryClient } from 'react-query';
import axios from 'axios';

const queryClient = new QueryClient();

const fetchData = async () => {
    const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://dps.psx.com.pk/timeseries/int/SHEL';
  
    try {
      const response = await axios.get(corsProxyUrl + apiUrl);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching data');
    }
  };

const useStockData = () => {
  return useQuery('stockData', fetchData, {
    queryClient,
  });
};

export default useStockData;

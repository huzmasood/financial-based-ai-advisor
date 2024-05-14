//@ts-nocheck
import { useQuery, QueryClient } from 'react-query';
import axios from 'axios';

const queryClient = new QueryClient();

const fetchData = async (searchValue) => {
    const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = `https://dps.psx.com.pk/timeseries/int/${searchValue}`;
  
    try {
      const response = await axios.get(corsProxyUrl + apiUrl);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
};

const useStockData = (searchValue) => {
    return useQuery(['stockData', searchValue], () => fetchData(searchValue), {
        queryClient,
        staleTime: 30000, // Cache data for 30 seconds
        cacheTime: 600000, // Keep data in cache for 10 minutes
        refetchOnWindowFocus: false, // Disable automatic refetching on window focus
        retry: 1, // Retry once in case of network failure
        onError: (error) => {
            console.error('Error fetching data:', error);
        }
    });
};

export default useStockData;

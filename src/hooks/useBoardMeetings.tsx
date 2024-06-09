import { useQuery } from 'react-query';
import axios from 'axios';

const fetchBoardMeetings = async () => {
  const response = await axios.get('/api/board-meetings');
  return response.data;
};

const useBoardMeetings = () => {
  return useQuery('boardMeetings', fetchBoardMeetings);
};

export default useBoardMeetings;

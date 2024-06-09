import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiUrl = 'https://analytics.munirkhanani.com/announcements/KEL?rangeFrom=2023-06-09&rangeTo=2024-06-09&type=BRM';
  const cookieValue = '_fbp=fb.1.1716914248545.120158778; _gid=GA1.2.1803461004.1717949775; _ga=GA1.1.922598222.1716914167; currency=PKR; _ga_C7ZYXWSFWT=GS1.1.1717952319.4.1.1717952514.0.0.0; XSRF-TOKEN=eyJpdiI6IkpaaXBBZ1VVaGN2WUJWRG1wUVZraFE9PSIsInZhbHVlIjoiUktCVlJTRi9uQ1RMbUZLdGZ6VXJtM2UxZEMvMFZHS1VuTTdhaGZsMzVPMXhxSlVkNS8xSEx4NGJOM0RqQ2g1YzFHY21FdlA4Qk5GcGNtdUEyYjJaTGtpQi9zWERNb01XU0NoSUlzNDVRTDdBUW4waGpFK0JJcFM4MW9udHV1VmciLCJtYWMiOiI5ZTdjOGE4ZTk4MDEzMzRmMDE2YjU5MTllNjRiOWFkNTRlYTA2MGNiYzEzNGM3NzI4MTJjYjY4MjFmODA1YjUzIiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6ImtOeUxuRFErMEU4aDB0ck96bEpUUXc9PSIsInZhbHVlIjoiTG0vSmdsZFMyY2Zjdkt6VjR2NElYSkRjeGp6Q2RucHM3TkVXc1R2VHBOSXVpNWVKNlB2ZE5ZL05tMzRmVFcrckliakFNUkhCLy94Qm5tZkptWlRMc21TZFl0YlZ4dXBFT0h0UjZScnF3SVFYdS9tQTdKUDNKNGFkVjd0VlZKTy8iLCJtYWMiOiJiODEwNzdjMjZlYmU0NTJjYTUyMzIzNmYyN2M1YzY4MDg3ODg4MDRkNzQ4YWI1NDc4YmU0MzU3ZjRlNjA4NTQyIiwidGFnIjoiIn0%3D';

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'Cookie': cookieValue
      }
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching board meetings data' });
  }
}

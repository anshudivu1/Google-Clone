import { useState, useEffect } from 'react';
import API_KEY from './key';

const CONTEXT_KEY = "65de2648b7bec4f8b";


// Also created my own react hooks to put in my code
const useGoogle = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (term) {
        const response = await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        );
        const result = await response.json();
        setData(result);
      }
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogle;

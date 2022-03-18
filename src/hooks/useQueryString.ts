import { useEffect, useState } from 'react';

const useQueryString = () => {
  const [queryString, setQueryString] = useState<Object>({});

  useEffect(() => {
    const {
      location: { search },
    } = window;
    const params = search.replace('?', '').split('&');
    const obj: any = {};
    params.forEach((param: string) => {
      const [key, value] = param.split('=');
      obj[key] = value;
    });
    setQueryString(obj);
  }, []);

  return queryString;
};

export default useQueryString;

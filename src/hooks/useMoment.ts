import { useEffect, useState } from 'react';
import moment, { Moment } from 'moment';

export const useSecond = (): Moment => {
  const [date, setDate] = useState<Moment>(moment());

  useEffect(() => {
    const interval = setInterval(() => setDate(moment()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return date;
};

export const useMinute = (): Moment => {
  const [date, setDate] = useState<Moment>(moment());

  useEffect(() => {
    let timeout: number;
    const diff = (60 - date.seconds()) * 1000;
    timeout = window.setTimeout(() => {
      setDate(moment());
      timeout = window.setInterval(() => setDate(moment()), 60 * 1000);
    }, diff);

    return () => {
      clearTimeout(timeout);
      clearInterval(timeout);
    };
  });

  return date;
};

export const useHour = (): Moment => {
  const [date, setDate] = useState<Moment>(moment());

  useEffect(() => {
    let timeout: number;
    const seconds = (60 - date.seconds()) * 1000;
    const minutes = (60 - date.minutes()) * 1000 * 60;
    const diff = seconds + minutes;
    timeout = window.setTimeout(() => {
      setDate(moment());
      timeout = window.setInterval(() => setDate(moment()), 60 * 60 * 1000);
    }, diff);

    return () => {
      clearTimeout(timeout);
      clearInterval(timeout);
    };
  });

  return date;
};

export const useDay = (): Moment => {
  const [date, setDate] = useState<Moment>(moment());

  useEffect(() => {
    let timeout: number;
    const seconds = (60 - date.seconds()) * 1000;
    const minutes = (60 - date.minutes()) * 1000 * 60;
    const hours = (24 - date.hours()) * 60 * 60 * 1000;
    const diff = seconds + minutes + hours;
    timeout = window.setTimeout(() => {
      setDate(moment());
      timeout = window.setInterval(() => setDate(moment()), 60 * 60 * 1000);
    }, diff);

    return () => {
      clearTimeout(timeout);
      clearInterval(timeout);
    };
  });

  return date;
};

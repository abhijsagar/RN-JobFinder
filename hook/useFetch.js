import { useState, useEffect } from 'react';
import { jobData } from '../constants/jobData';

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = () => {
        setIsLoading(true);
        try {
            if (endpoint === 'search') {
                setData(jobData);
            } else if (endpoint === 'job-details') {
                setData(jobData.filter((item) => item.job_id === query.job_id));
            }
            setIsLoading(false);
        } catch (error) {
            setError(error);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        fetchData();
    };

    return { data, isLoading, error, refetch };
};

export default useFetch;

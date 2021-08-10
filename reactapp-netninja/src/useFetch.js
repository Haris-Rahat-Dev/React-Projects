import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data , setData] = useState(null);
    const [isPending , setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abort = new AbortController();
        setTimeout(() => {
                fetch(url, {signal: abort.signal})
                    .then(res => {
                        if(!res.ok)
                        {
                            throw Error('Could not Fetch The Data! Try again Later');
                        }
                        return res.json();
                    })
                    .then(data => {
                        setData(data);
                        setIsPending(false);
                        setError(null);
                    })
                    .catch(err => {
                        if(err.name === 'AbortError')
                        {
                            console.log('Fetch Aborted');
                        }
                        else
                        {
                            setIsPending(false);
                            setError(err.message);
                        }
                    })
            }, 2000);
        return () => abort.abort();
        }, [url]);
    return {
        data,
        isPending,
        error
    }
}
export default useFetch;
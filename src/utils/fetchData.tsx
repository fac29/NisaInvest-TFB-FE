import { useState, useEffect } from 'react';
import { User, Quote, Goal } from './dataTypes';

//defines the state types for the custom useFetch hook.
interface FetchDataState<T> {
	isLoading: boolean;
	error: Error | null;
	data: T | T[] | null;
}

function useFetch<T>(url: string): FetchDataState<T> {
	const [data, setData] = useState<T[] | null>(null);
	const [error, setError] = useState<Error | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const res = await fetch(url);
				if (!res.ok) throw new Error(res.statusText);

				const jsonData = await res.json();
				console.log(jsonData);
				//    setData(jsonData?.data ? jsonData : [])
				setData(jsonData ?? []);
			} catch (error: any) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, [url]);

	return { isLoading, error, data };
}
export default useFetch;

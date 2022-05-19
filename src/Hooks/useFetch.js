import { useEffect, useState, useCallback } from "react";
const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const fetchData = useCallback(async () => {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error("Error");
			}
			const responseData = await response.json();
			const loadedData = [];
			for (const key in responseData) {
				loadedData.push({
					id: responseData[key].id,
					name: responseData[key].name,
					description: responseData[key].description,
					price: responseData[key].price,
				});
			}
			setData(loadedData);
			setIsLoading((prevState) => !prevState);
		} catch (e) {
			setIsLoading((prevState) => !prevState);
			setError(e.message);
		}
	}, [url]);
	useEffect(() => {
		fetchData();
	}, [fetchData]);
	return [data, isLoading, error];
};
export default useFetch;

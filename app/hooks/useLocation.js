import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
	const [location, setLocation] = useState();

	const getLocation = async () => {
		try {
			const { granted } = await Location.requestForegroundPermissionsAsync();
			if (!granted) return;

			const last = await Location.getLastKnownPositionAsync();
			if (last)
				setLocation({
					latitude: last.coords.latitude,
					longitude: last.coords.longitude,
				});
			else {
				const current = await Location.getCurrentPositionAsync();
				setLocation({
					latitude: current.coords.latitude,
					longitude: current.coords.longitude,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getLocation();
	}, []);

	return location;
};

const googleMapsPlacesAutocompleteService = new window.google.maps.places.AutocompleteService();
const googleMapsPlacesService = new window.google.maps.places.PlacesService(window.document.createElement('div'));

class googleService {
  static searchStreet = searchValue => {
    let request = {
      types: ['address'],
      input: searchValue,
    };

    return new Promise((resolve, reject) => {
      googleMapsPlacesAutocompleteService.getQueryPredictions(request, (response, statusCode) => {
        if (statusCode === 'OK') {
          const serializedResults = response.map(result => {
            return {
              id: result.id,
              description: result.description,
              placeId: result.place_id,
            };
          });

          resolve(serializedResults);
        } else {
          resolve([]);
        }
      });
    });
  };

  static fetchPlaceDetails = placeId => {
    let request = {
      placeId: placeId,
      fields: ['formatted_address', 'geometry.location'], // reques only name and location in geometry
    };

    return new Promise((resolve, reject) => {
      googleMapsPlacesService.getDetails(request, (place, statusCode) => {
        console.log(place, statusCode);
        if (statusCode === 'OK') {
          // get location
          const location = place.geometry.location;

          console.log('location', location);

          // get lat lng from location
          const serializedLocation = {
            latitude: location.lat(),
            longitude: location.lng(),
            address: place.formatted_address,
          };

          resolve(serializedLocation);
        } else {
          reject();
        }
      });
    });
  };
}

export default googleService;

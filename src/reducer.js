export function reducer(state, action) {
  switch (action.type) {
    case "OPEN_LOCATION":
      return {
        ...state,
        isModalShowing: true,
        isLocationOpen: true,
        isGuestsOpen: false,
      };

    case "OPEN_GUESTS":
      return {
        ...state,
        isModalShowing: true,
        isLocationOpen: false,
        isGuestsOpen: true,
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        isModalShowing: false,
        isLocationOpen: false,
        isGuestsOpen: false,
      };

    case "SET_LOCATION":
      return {
        ...state,
        location: action.payload,
      };

    case "SET_GUESTS":
      return {
        ...state,
        guestsAmount: action.payload,
      };

    case "SEARCH":
      if (state.location === "Finland") {
        return state;
      }

      const staysInCurrentLocation = state.stays.filter(
        (stay) => stay.city === state.location
      );

      if (state.guestsAmount > 0) {
        const staysInCurrentLocation_MaxGuests = staysInCurrentLocation.filter(
          (stay) => stay.maxGuests >= state.guestsAmount
        );

        return {
          ...state,
          filteredStays: [...staysInCurrentLocation_MaxGuests],
        };
      }

      return {
        ...state,
        filteredStays: [...staysInCurrentLocation],
      };

    default:
      return {
        ...state,
      };
  }
}

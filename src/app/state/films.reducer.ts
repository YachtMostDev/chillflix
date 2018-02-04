import {
	LOAD_FILMS, SELECT_FILM, DESELECT_FILM, RATING_PLUS, RATING_MINUS, SET_VIEW,
	RATING_RESET, ADD_TO_QUEUE, REMOVE_FROM_QUEUE, SET_SEARCH_VALUE
} from './films.actions';

const initialState = {
	films: [],
	queue: [],
	selectedFilm: null,
	searchValue: ''
};

export const filmsReducer = (state = initialState,
							 action) => {
	switch (action.type) {
		case LOAD_FILMS:
			return {...state, films: action.payload};
		case SELECT_FILM:
			return {...state, selectedFilm: action.payload.id};
		case DESELECT_FILM:
			return {...state, selectedFilm: null};
		case RATING_PLUS:
			return {...state, films: state.films.map(film => (film.id === action.payload.id) ? {...film, rating: 1} : film)};
		case RATING_MINUS:
			return {...state, films: state.films.map(film => (film.id === action.payload.id) ? {...film, rating: -1} : film)};
		case RATING_RESET:
			return {...state, films: state.films.map(film => (film.id === action.payload.id) ? {...film, rating: 0} : film)};
		case SET_VIEW:
			return {...state, films: state.films.map(film => (film.id === action.payload.id) ? {...film, view: action.payload.viewCount} : film)};
		case ADD_TO_QUEUE:
			return {
				...state,
				queue: [...state.queue, action.payload.id],
				films: state.films.map(film => (film.id === action.payload.id) ? {...film, inQueue: true} : film)
			};
		case REMOVE_FROM_QUEUE:
			return {
				...state,
				queue: state.queue.filter(id => id !== action.payload.id),
				films: state.films.map(film => (film.id === action.payload.id) ? {...film, inQueue: false} : film)
		};
		case SET_SEARCH_VALUE:
			return { ...state, searchValue: action.payload.searchValue };
		default:
			return state;
	}
};

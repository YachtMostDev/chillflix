import { Component } from '@angular/core';
import { SET_SEARCH_VALUE, SELECT_FILM, LOAD_FILMS } from "../../state/films.actions";
import { Store } from '@ngrx/store';
import { SelectControlValueAccessor } from '@angular/forms/src/directives/select_control_value_accessor';

@Component({
	selector: 'app-search-menu',
	templateUrl: './search-menu.component.html',
	styleUrls: ['./search-menu.component.css']
})
export class SearchMenuComponent {

	constructor(private store: Store<any>) { }

	search(searchValue) {
		this.store.dispatch({
			type: SET_SEARCH_VALUE,
			payload: { searchValue: searchValue }
		});
	}
}

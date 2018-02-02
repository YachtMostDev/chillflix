import { Component } from '@angular/core';
import { SET_SEARCH_VALUE } from "../../state/films.actions";
import { Store } from '@ngrx/store';

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

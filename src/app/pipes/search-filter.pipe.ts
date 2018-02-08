import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SET_SEARCH_VALUE } from '../state/films.actions';
import { Store } from '@ngrx/store';
import { YoutubeService} from '../services/youtube.service'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Pipe({
	name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
	constructor(private store: Store<any>, private youtubeService: YoutubeService) { }

	transform(array: Array<any> ) {
		// console.log(array);
		// console.log(array instanceof Array);

		return this.store.select('films').pluck('searchValue').map((searchValue: String) => {
			let data =  array.filter(film => film.title.toUpperCase().indexOf(searchValue.toUpperCase()) !== -1);
			if (data.length === 0)
				data = this.youtubeService.getYoutubeResults(searchValue);
			return data;
		});
	}
}

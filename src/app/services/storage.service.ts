import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  setValue(key, value){
  	localStorage.setItem(key, value);
  }
  getValue(key){
  	return localStorage.getItem(key);
  }
}

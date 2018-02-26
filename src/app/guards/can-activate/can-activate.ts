import {Component, Injectable, OnInit} from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";

@Injectable()
export class CanActivateGuard implements CanActivate {

	constructor(private storageService: StorageService, private router: Router) {
	}

	canActivate() {
		if (this.storageService.getValue("username") && this.storageService.getValue("birthday")) {
			return true;
		} else {
			this.router.navigate(['/login']);
			return false;
		}
	}
}

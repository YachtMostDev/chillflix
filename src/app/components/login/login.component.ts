import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {StorageService} from "../../services/storage.service";
import { Router} from "@angular/router";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public myForm: FormGroup;
	public submitted: boolean;

	constructor(private storageService: StorageService, private router: Router) {
	}

	ngOnInit() {
		this.myForm = new FormGroup({
			username: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
			birthday: new FormControl('', [<any>Validators.required])
		});
	}

	save(value, valid) {
		if (valid) {
			this.storageService.setValue("username", value.username);
			this.storageService.setValue("birthday", value.birthday.toISOString());
			this.router.navigate(['/home']);
		}
	}
}

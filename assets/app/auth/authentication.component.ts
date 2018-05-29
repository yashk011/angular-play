import { Component } from "@angular/core";

@Component({
	
	selector : 'app-authentication',
	template :  `
		<header class= "row spacing">
			<nav class="col-md-8 col-md-offset-2">

				<ul class="nav nav-tabs">

					<li routerLinkactive="active"><a [routerLink] ="['signup']"> Sign up </a></li>

					<li routerLinkActive ="active"><a [routerLink] = "['signin']"> Sign in</a></li>

					<li routerLinkActive="active"><a [routerLink] ="['logout']"> Log out</a></li>

				</ul>

			</nav>

		</header>

		<div class="row spacing">

			<router-outlet></router-outlet>

		</div>

	`
})


export class AuthenticationComponent {
	

}
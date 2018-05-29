import {Routes} from "@angular/core";

import { SignupComponent} from "./signup.component";

import { SigninComponent} from "./signin.component";

import { LogoutComponent} from "./logout.component";


export const AUTH_ROUTES : Routes = [

{
	path: 'signup' ,
	component : SignupComponent

},

{
	path: 'signin' ,
	component : SigninComponent

},

{
	path: 'logout' ,
	component : LogoutComponent

},
{
	path:'' ,
	redirectTo : 'signup' ,
	pathMatch : 'full'

}




];
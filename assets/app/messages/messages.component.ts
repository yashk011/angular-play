import {Component} from "@angular/core"

@Component({
	
		selector: 'app-messages',
		template: `

		<div class="row">
			

		<app-message-list> </app-message-list>


		</div>	


		<div class="row">
		

		<app-message-input> </app-message-input>


		</div>
	`
})


export class MessagesComponent {
	


}
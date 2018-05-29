import {Component} from "@angular/core"; 

import {NgForm} from "@angular/forms";

import {MessageService} from "./message.service.ts";

import {Message} from "./message.model.ts";

@Component({
		
	selector : 'app-message-input',
	templateUrl : './message-input.component.html'
})


export class MessageInputComponent {
	
	constructor(private messageService : MessageService)
	{

	}

	onSubmit(form : Ngform)
	{
		const message = new Message(form.value.content ,'Yash');
		
		this.messageService.addMessage(message)
		.subscribe(
		data => console.log(data),
		error => console.log(error)
		);

		form.resetForm();

	}

}
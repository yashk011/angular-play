import { Component , Input ,Output , EventEmitter } from "@angular/core";

import { Message } from "./message.model";

import {MessageService} from "./message.service";

@Component({
	selector :'app-message',
	templateUrl:'./message.component.html',
    styles:[`

    	.author{
    		display:inline-block;
    		font-style: italic;
    		font-size:12px;
    		width:80%;
    	}

    	.config{
    		display :inline-block;
    		font-size: 12px;
    		text-align: right;
    		width:19%;
    	}

    `]

})

export class MessageComponent {

	@Input() message: Message;
	@Output() editClicked = new EventEmitter<string> ();

    constructor(private messageService : MessageService){

    }

	color = "blue";
	onEdit() {

		this.editClicked.emit("It Works");

	}

    onDelete() {

        this.messageService.deleteMessage(this.message);

    }

}
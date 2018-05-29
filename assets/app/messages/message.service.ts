import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

import {Message} from "./message.model";
import "rxjs/Rx";

import {Observable} from "rxjs";

@Injectable()

export class MessageService{
	
	private messages: Message[] =[];

	constructor(private http: Http){

	}

	addMessage(message : Message){
		this.messages.push(message);
		const body = JSON.stringify(message);
		
		return this.http.post('http://localhost:3000/message' , body).map((response: Response) => response.json()).catch((error : Response) => Observable.throw(error.json()));
		
	}

	getMessage(){
	return this.messages;
	}

	deleteMessage(message: Message) {

	this.messages.splice(this.messages.indexOf(message),1);

	}

}
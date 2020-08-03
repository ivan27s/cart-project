import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string): void {
    this.messages.push(message);
    setTimeout(() => this.clear(), 1000);
  }

  clear(): void{
    this.messages = [];
  }
}

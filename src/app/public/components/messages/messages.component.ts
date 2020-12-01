import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetCountriesService } from '../../services/get-countries.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private getCountry: GetCountriesService) { }
  messages: any;
  parsedMessage: any;
  loaded = false;

  ngOnInit(): void {
    this.messages = this.route.snapshot.data.messages.feed.entry;
    this.parsedMessage = this.validateMessages(this.messages);
    this.loaded = this.parsedMessage.length > 1;
  }

  validateMessages(data) {
    let messages: Array<any> = [];
    data.map((m) => {
      const content = m.content.$t.split(',');
      messages = messages.concat({
        messageid: content[0].split(': ')[1],
        message: this.getMessage(m.content.$t),
        sentiment: this.getSentimant(m.content.$t),
        location:  this.getCountry.getContries(this.getMessage(m.content.$t))
      });
    });
    return messages;
  }

  getSentimant(message) {
    return message ? message.split("sentiment: ")[1] ?? 'other' : 'other';
  }

  getMessage(message) {
   return  message.substring(
      message.lastIndexOf("message:"), 
      message.lastIndexOf(", sentiment:")
  ).split(': ')[1];
  }
}

import { Component } from '@angular/core';
import {SearchResult} from "../searchResult";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
search: SearchResult;
}

import { Component } from '@angular/core';
import {SearchResult} from '../../searchResult';
import {SearchService} from "../../search.service";

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent {
  search?: SearchResult;
  constructor(private service : SearchService) {}
  testSearch? : string;
  onSubmitSearch():void{
    this.service.getSearchResponce("").subscribe(data=>this.testSearch=JSON.stringify(data));
  }
}

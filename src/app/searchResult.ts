import {Video} from './video';
import {PageInfo} from './pageInfo';

export interface SearchResult {
  searchList: Video[];
  pageInfo: PageInfo;

}

import {Video} from "./video";
import {PageInfo} from "./pageInfo.ts";

export interface SearchResult {
  searchList: Video[];
  pageInfo: PageInfo;

}

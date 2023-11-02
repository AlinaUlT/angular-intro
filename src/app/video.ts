import { VideoStats } from './videoStats';

export interface Video{
  imgURL: string;
  stats: VideoStats;
  name: string;
  videoURL: string;
  description: string;
  tags: string[];
  publishDate: string;
}

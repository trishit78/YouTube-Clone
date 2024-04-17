export const KEY = "AIzaSyAk0GGAEbyf3T_u3fQB0KDDx6vLejNwM1Y";
//export const YOUTUBE_VIDEO_API ="https://www.googleapis.com/youtube/v3/videos";
export const BASE_URL = 'https://www.googleapis.com/youtube/v3'


export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${KEY}`;


export const SEARCH_SUGGESTIONS_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export default KEY; // default export
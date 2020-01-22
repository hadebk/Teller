export const URL_DETAIL = 'https://api.themoviedb.org/3/movie/';
export const URL_SEARCH = 'https://api.themoviedb.org/3/search/movie?query=';
export const URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';
export const URL_BACKGROUND = 'https://image.tmdb.org/t/p/original';
export const API_KEY = '?api_key=a1060f88470af5b4424c86e56e474303';
export const API_KEY_ALT = '&api_key=a1060f88470af5b4424c86e56e474303';
export const IMG_SIZE_XSMALL = 'https://image.tmdb.org/t/p/w45/';
export const VIDEO_LINK = 'https://api.themoviedb.org/3/movie/';
 
/* get movies by gernes =>

Action movies=
(https://api.themoviedb.org/3/discover/movie?api_key=a1060f88470af5b4424c86e56e474303&language=en-US&sort_by=popularity.desc&page=1&with_genres=28)

*/


/*
   example of results =>
   https://api.themoviedb.org/3/movie/550?api_key=a1060f88470af5b4424c86e56e474303

{
    "adult": false,
    "backdrop_path": "/mMZRKb3NVo5ZeSPEIaNW9buLWQ0.jpg",
    "belongs_to_collection": null,
    "budget": 63000000,
    "genres": [{
        "id": 18,
        "name": "Drama"
    }],
    "homepage": "http://www.foxmovies.com/movies/fight-club",
    "id": 550,
    "imdb_id": "tt0137523",
    "original_language": "en",
    "original_title": "Fight Club",
    "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
    "popularity": 35.468,
    "poster_path": "/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg",
    "production_companies": [{
        "id": 508,
        "logo_path": "/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png",
        "name": "Regency Enterprises",
        "origin_country": "US"
    }, {
        "id": 711,
        "logo_path": "/tEiIH5QesdheJmDAqQwvtN60727.png",
        "name": "Fox 2000 Pictures",
        "origin_country": "US"
    }, {
        "id": 20555,
        "logo_path": "/hD8yEGUBlHOcfHYbujp71vD8gZp.png",
        "name": "Taurus Film",
        "origin_country": "DE"
    }, {
        "id": 54051,
        "logo_path": null,
        "name": "Atman Entertainment",
        "origin_country": ""
    }, {
        "id": 54052,
        "logo_path": null,
        "name": "Knickerbocker Films",
        "origin_country": "US"
    }, {
        "id": 25,
        "logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
        "name": "20th Century Fox",
        "origin_country": "US"
    }, {
        "id": 4700,
        "logo_path": "/A32wmjrs9Psf4zw0uaixF0GXfxq.png",
        "name": "The Linson Company",
        "origin_country": ""
    }],
    "production_countries": [{
        "iso_3166_1": "DE",
        "name": "Germany"
    }, {
        "iso_3166_1": "US",
        "name": "United States of America"
    }],
    "release_date": "1999-10-15",
    "revenue": 100853753,
    "runtime": 139,
    "spoken_languages": [{
        "iso_639_1": "en",
        "name": "English"
    }],
    "status": "Released",
    "tagline": "Mischief. Mayhem. Soap.",
    "title": "Fight Club",
    "video": false,
    "vote_average": 8.4,
    "vote_count": 17481
}
*/
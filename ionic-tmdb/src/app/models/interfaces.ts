export interface MovieDBResult {
  results: Movie[];
  page: number;
  total_results: number;
  dates: any;
  total_pages: number;
}

export interface Movie {
  popularity: number;
  id: number;
  video: boolean;
  vote_count: number;
  vote_average: number;
  title: string;
  release_date: string;
  original_language: any;
  original_title: string;
  genre_ids: number[];
  backdrop_path: string;
  adult: boolean;
  overview: string;
  poster_path: string;
}

export interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: any[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: any[];
  production_countries: any[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: any[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface CreditsResult {
  id: number;
  cast: Cast[];
  crew: Crew[];
}

export interface Cast {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  order: number;
  profile_path: null | string;
}

export interface Crew {
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  name: string;
  profile_path: null | string;
}

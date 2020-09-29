export interface Cast {
    id:   number;
    cast: CastElement[];
    crew: Crew[];
}

export interface CastElement {
    cast_id:      number;
    character:    string;
    credit_id:    string;
    gender:       number;
    id:           number;
    name:         string;
    order:        number;
    profile_path: null | string;
}

export interface Crew {
    credit_id:    string;
    department:   string;
    gender:       number;
    id:           number;
    job:          string;
    name:         string;
    profile_path: null | string;
}

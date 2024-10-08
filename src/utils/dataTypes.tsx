export const BE_BASE_URL: string = 'https://nisa-invest-tfb-be.vercel.app/';

export interface User {
	id: number | string;
	created_at: Date;
	email: string;
	name: string;
	password: string;
}

export interface Goal {
	id: number;
	title: string;
	description: string;
	is_recurrent: boolean;
	//should we make this an enum?
	recurrence_type: string;
	recurrence_value: number;
	//should we make this an enum?
	category: string;
}

export interface Quote {
	id: number;
	text: string;
	author: string;
	valid_from: Date;
	valid_to: Date;
}

export interface Advisor {
	value: string;
	name: string;
	image: string;
	title: string;
	location: string;
	linkedInURL: string;
	duration: string;
	education: string[];
	experience: string;
	languages: string[];
	focus: string[];
}

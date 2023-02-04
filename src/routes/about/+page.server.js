import { redirect } from '@sveltejs/kit';
// @ts-ignore
export function load({ cookies }) {
	if (!cookies.get('lang')) {
		cookies.set('lang', 'en');
	}
	throw redirect(302, `${cookies.get('lang')}/about`);
}

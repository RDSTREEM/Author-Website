import { redirect } from '@sveltejs/kit';
/** @type {import('./$types').Actions} */
export const actions = {
	setLang: async ({ cookies, request }) => {
		const formData = await request.formData();
		const lang = formData.get('lang');
		// @ts-ignore
		cookies.set('lang', lang);
		return {
			success: true
		};
	}
};
// @ts-ignore
export function load({ cookies }) {
	if (!['am', 'en'].includes(cookies.get('lang'))) {
		cookies.set('lang', 'am');
	}
	throw redirect(302, `${cookies.get('lang')}`);
}

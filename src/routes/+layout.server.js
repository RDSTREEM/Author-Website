// @ts-ignore
export function load({ cookies }) {
	return { lang: cookies.get('lang') };
}

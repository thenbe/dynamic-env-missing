import { env } from '$env/dynamic/public';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	console.log({ env }, 'hooks.ts ~ 6');
	const response = await resolve(event);
	return response;
};

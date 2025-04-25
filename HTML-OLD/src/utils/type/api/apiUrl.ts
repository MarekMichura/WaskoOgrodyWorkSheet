import {URL_MAP as url_client} from './apiUrl.client'
import {URL_MAP as url_server} from './apiUrl.server'

// export let URL_MAP: typeof import('./apiUrl.server').URL_MAP

// if (typeof window === 'undefined') {
//   URL_MAP = url_server
// } else {
//   URL_MAP = url_client
// }

export const URL_MAP = typeof window === 'undefined' ? url_server : url_client

import {PersistedClient, Persister} from '@tanstack/react-query-persist-client'
import {get, set, del} from 'idb-keyval'

export function storageIDB(key = 'Wasko'): Persister {
  return {
    persistClient: async function (client: PersistedClient) {
      await set(key, client)
    },
    restoreClient: async function () {
      return await get<PersistedClient>(key)
    },
    removeClient: async function () {
      await del(key)
    },
  }
}

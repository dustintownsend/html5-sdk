import KinveyStorage from 'kinvey-node-sdk/dist/request/src/middleware/src/storage';
import IndexedDB from './src/indexeddb';
import WebSQL from './src/websql';
import { LocalStorage } from './src/webstorage';

export default class Storage extends KinveyStorage {
  getAdapter() {
    return WebSQL.isSupported()
      .then((isWebSQLSupported) => {
        if (isWebSQLSupported) {
          return new WebSQL(this.name);
        }

        return IndexedDB.isSupported()
          .then((isIndexedDBSupported) => {
            if (isIndexedDBSupported) {
              return new IndexedDB(this.name);
            }

            return LocalStorage.isSupported()
              .then((isLocalStorageSupported) => {
                if (isLocalStorageSupported) {
                  return new LocalStorage(this.name);
                }

                return super.getAdapter();
              });
          });
      });
  }
}

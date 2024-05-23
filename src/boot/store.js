// src/boot/store.js
import { store } from 'src/store';

export default ({ app }) => {
  app.use(store);
};

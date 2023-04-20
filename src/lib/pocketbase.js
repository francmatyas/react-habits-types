import Pocketbase from 'pocketbase';

const pb = new Pocketbase(process.env.REACT_APP_POCKETBASE_URL);

export default pb;
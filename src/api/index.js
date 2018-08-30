import axios from 'axios';
import * as c from 'config/constants';

const IMAGE_PER_PAGE = 100;

export const getImages = (query, callBack) => {
    axios({
        url: c.BASE_URL,
        params: { 
            key: c.API_KEY,
            q: query,
            per_page: IMAGE_PER_PAGE
        }
    }).then((result) => callBack(true, result, null))
    .catch((err) => callBack(false, null, err));
}


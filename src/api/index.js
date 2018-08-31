import axios from 'axios';
import * as c from 'config/constants';
import { rejects } from 'assert';

const IMAGE_PER_PAGE = 100;

export const getImages = (query) => {
    return new Promise((resolve, reject) => {
        axios({
            url: c.BASE_URL,
            params: { 
                key: c.API_KEY,
                q: query,
                per_page: IMAGE_PER_PAGE
            }
        }).then((result) => resolve(result.data))
        .catch((err) => reject(err));
    });
}


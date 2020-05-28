import Axios from 'axios';

const BASE_URL = 'http://91.121.220.123:3001/';

export default {
    get: () =>
        new Promise((resolve, reject) => {
            Axios.get(`${BASE_URL}?$limit=5`)
                .then(res => {
                    if (
                        res?.status === 200 &&
                        res?.data?.data?.Stream?.Properties
                    )
                        resolve(res?.data?.data?.Stream?.Properties);
                    else reject();
                })
                .catch(reject);
        }),
};

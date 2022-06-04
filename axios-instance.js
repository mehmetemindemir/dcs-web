import axios from 'axios';
import cookies from "nookies";
import Router from "next/router";

const instance = axios.create({
    baseURL: 'https://newdcs.nwsesys.com/dcs-service/'
});

instance.interceptors.request.use(
    async config => {
        const  {token}  = cookies.get();

        console.log("token: "+token.toString())

        config.headers = {
            'Accept': 'application/json',
        }
        try {
            if (token) {
                config.headers = {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
                console.log("Token added request")
            } else {
                config.headers = {
                    'Accept': 'application/json',
                }
            }
        } catch (error) {
            console.log('error Token', error);
        }
        return config;
    },
    error => {
        console.log(error);
    });


export default instance;
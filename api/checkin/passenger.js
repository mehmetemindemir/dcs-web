import axios from '../../axios-instance'

export const getPassengerList = async (data) => await axios.post('passengers/list-for-checkin', data)
    .then(res => ({
        error: false,
        passData: res.data,
    }))
    .catch((error) => ({
            error: true,
            passData: null,
            errorMsg: error
        }),
    );
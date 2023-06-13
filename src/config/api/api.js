import ky from 'ky'

const api = ky.create(
    {prefixUrl: 'https://mebeldb-4isd.onrender.com/'}
)


export default api
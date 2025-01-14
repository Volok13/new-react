

const basUrl = 'https://reqres.in/api'

const pgUrl = {
    pgAll: async () => {
        return await fetch(basUrl + '/users?page=')
            .then(value => value.json())
    }
}

export {
    pgUrl
}
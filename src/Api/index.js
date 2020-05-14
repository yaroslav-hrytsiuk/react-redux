class Api {
    getAllUsers () {
        return fetch('https://api.github.com/users').then(response => response.json())
    }
    getUserInfo (login) {
        return fetch(`https://api.github.com/users/${login}`).then(response => response.json())
    }
    getUserRepo (login) {
        return fetch(`https://api.github.com/users/${login}/repos`).then(response => response.json()) 
    }
}

export default new Api()
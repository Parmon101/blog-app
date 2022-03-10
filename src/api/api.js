class Api {
    url = 'https://jsonplaceholder.typicode.com'

    performRequest(url, method = 'GET', body) {
        return fetch(url, {
            method,
            body: JSON.stringify(body),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        }).then(response => response.json())
    }

    getPost() {
        return this.performRequest(`${this.url}/posts`)
    }

    getPosts() {
        return this.performRequest(`${this.url}/posts`)
    }

}

export default new Api( )

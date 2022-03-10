import { flow, makeAutoObservable, makeObservable, observable, onBecomeObserved } from "mobx";
import api from "../api/api";

export class PostStore {
    id;
    title = '';

    constructor({title, id}) {
        makeAutoObservable(this, {}, {
            autoBind: true
        })

        this.id = id;
        this.title = title;
    }
}
export class PostsStore {
    list = []

    constructor() {
        makeAutoObservable(this, {}, {
            autoBind: true
        })
    
        onBecomeObserved(this, 'list', this.fetch)
    
    }

    *fetch() {
        const response = yield api.getPosts()

        this.list = response.map(post => new PostStore(post));
    }
}

export class OnePost {
    title = '';
    body = '';
    id = null;
    
    constructor() {
        makeObservable(this, {
            title: observable,
            body: observable,
            fetch: flow.bound
        })

        onBecomeObserved(this, 'title', this.fetch)
    }

    *fetch() {
        const  response = yield api.getPost()

        this.title = response.title;
        this.body = response.body;
        this.id = response.id;
    }
}

import AbstractView from "./AbstractView.js";

export default class Dashboard extends AbstractView {
    constructor() {
        super();
        this.setTitle('Posts');
    }

    async getHtml() {
        return `
        <h1>Post</h1>
            <p>You are viewing post #${this.postId}.</p>
        `
    }
    
}
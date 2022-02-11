/* src/page/view.js */

import React, { Component } from 'react';
import axios from 'axios';

class view extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this._getData()
    }

    _getData = async function () {
        const board_id = this.props.match.params.data;

        const getData = await axios('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: new Headers(),
            data: { id: board_id }
        });

        console.log(getData)
    }

    render() {

        return (
            <div>
                This is View Page
            </div>
        );
    }
}

export default view;

// [출처] React로 블로그 만들기 22. 게시글 보기 (+ 조회수 구현)|작성자 SeJun3278
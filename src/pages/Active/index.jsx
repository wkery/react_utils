import React, { Component } from 'react';
import { queryVersionReq } from 'api/test';
import ImgsUploader from 'components/ImgsUploader';

import './index.less';

export default class Active extends Component {

    componentDidMount() {
        queryVersionReq().then(res => {
            console.log(res.data)
        })
    }

    render() {
        return (
            <div className="main">
                <h3 className="title">活动页标题</h3>
                <div className="content">
                    <h4>活动页内容体</h4>
                    <h4>活动页内容体</h4>
                </div>
                <hr />
                <ImgsUploader/>
            </div>
        )
    }
}

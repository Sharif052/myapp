/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import { Table, Button, Modal, Input } from 'antd';

const { confirm } = Modal;

export default class PersonList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: [
                {
                    userId: '1',
                    id: 'Mike',
                    title: 32,
                },
            ],

            columns: [
                {
                    title: 'userID',
                    dataIndex: 'userId',
                    key: 'userId',
                },
                {
                    title: 'ID',
                    dataIndex: 'id',
                    key: 'id',
                },
                {
                    title: 'Title',
                    dataIndex: 'title',
                    key: 'title',
                    render: (text, record) => (
                        <div>
                            <Input type="text" value={text} placeholder="Name" onChange={(e) => this.handleChange(e.target.value, 'title', record)} />
                        </div>)
                },
                {
                    title: 'Action',
                    // dataIndex: 'id', 
                    key: 'x',
                    render: (record) => {
                        return <Button onClick={() => this.showConfirm(record)} >show more</Button>
                    }
                },
            ]
        }
    }



    handleChange = (what, where, details) => {
        console.log(details)
        let dataSource = this.state.dataSource;

        dataSource.map(item => {
            if (item.id === details.id) {
                item[where] = what
                console.log({ item, changeTo: what })
            }
        })

        this.setState({
            dataSource: dataSource
        })
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => {
                const persons = res.data;
                //console.log(res);
                this.setState({ dataSource: persons });
            }).catch(err => {
                
            })
    }
    showConfirm(e) {
        console.log("Clicked", e)
        confirm({
            //console.log(data),
            title: 'Do you Want to delete these items?',
            //content:data,
            content: `addasd ${e.userId} asdsadsas`,

            onOk: () => {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        },
        );
    }



    render() {
        console.log("This State", this.state)
        return (<div>
            <Table bordered dataSource={this.state.dataSource} columns={this.state.columns} />
        </div>
        )
    }


}

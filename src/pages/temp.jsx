import { Table, Select, Icon, Divider, Row, Col, Switch, DatePicker, Input, Card } from 'antd';
import React from 'react';
import _ from 'lodash';

const { Option } = Select;
var value = [150, 250];

let index = 0;
function onChange(checked) {
    console.log(`switch to ${checked}`);
}

class App extends React.Component {
    state = {
        classes: [
            { class_id: 'Class 9' },
            { class_id: 'Class 10' }
        ],
        section: ['Science', 'Arts'],
        year: ['2019', '2020'],
        bill: ["1000", "2000"],
        cats: ["A", "B"],
        bill_details: [{
            billing_name: "Tuition Fee",
            billing_price: 200
        },
        {
            billing_name: "Laboratory Fee",
            billing_price: 300
        }],

        columns: [
            {
                title: 'Name',
                dataIndex: 'name',
                render: text => <a>{text}</a>,
            },
            {
                title: 'ID',
                dataIndex: 'ID',
            },
            {
                title: 'Mobile',
                dataIndex: 'Mobile',
            },
        ],
        data: [
            {
                key: '1',
                name: 'John Brown',
                ID: 32,
                Mobile: "01676766670",
            },
            {
                key: '2',
                name: 'Jim Green',
                ID: 42,
                Mobile: "01676766670",
            },
            {
                key: '3',
                name: 'Joe Black',
                ID: 32,
                Mobile: "01676766670",
            },
            {
                key: '4',
                name: 'Disabled User',
                ID: 99,
                Mobile: "01676766670",
            },
        ],
    };

    // let dataSource = this.state.dataSource;

    //     dataSource.map(item => {
    //         if (item.id === details.id) {
    //             item[where] = what
    //             console.log({ item, changeTo: what })
    //         }
    //     })

    //     this.setState({
    //         dataSource: dataSource
    //     })

    handleChange= (event) => { 
        let data = this.state.bill_details;
        //console.log(data);
        data.map(item=>{
            if(item.billing_name===event.target.billing_name){
                item[event.target.billing_name]=event.target.billing_price;
            }
        })
        this.setState({
            bill_details : data,
          })
        console.log(event.target.bill_details.billing_name);
    }

    render() {
        const { classes, section, year, bill, cats } = this.state;
        return (
            <Card>
                <Row gutter={16}>
                    <Col span={5}>
                    <Divider>Class</Divider>
                        <Select
                            style={{ width: "100%" }}
                            placeholder="Class"

                        >
                            {classes.map(item => (
                                <Option key={item.class_id}>{item.class_id}</Option>
                            ))}
                        </Select>
                    </Col>
                    <Col span={5}>
                    <Divider>Section</Divider>
                        <Select
                            style={{ width: "100%" }}
                            placeholder="Section"
                        >
                            {section.map(item => (
                                <Option key={item}>{item}</Option>
                            ))}
                        </Select>
                    </Col>

                    <Col span={5}>
                    <Divider>Year</Divider>
                        <Select
                            style={{ width: "100%" }}
                            placeholder="Year"
                        >
                            {year.map(item => (
                                <Option key={item}>{item}</Option>
                            ))}
                        </Select>
                    </Col>
                    <Col span={5}>
                    <Divider>Bill</Divider>
                        <Select
                            style={{ width: "100%" }}
                            placeholder="Bill"
                        >
                            {bill.map(item => (
                                <Option key={item}>{item}</Option>
                            ))}
                        </Select>
                    </Col>
                    <Col span={4}>
                    <Divider>Category</Divider>
                        <Select
                            style={{ width: "100%" }}
                            placeholder="Category"
                        >
                            {cats.map(item => (
                                <Option key={item}>{item}</Option>
                            ))}
                        </Select>
                    </Col>
                </Row>

                <Row gutter={20} style={{ marginTop: 50 }}>
                
                    <Col span={12}>
                        <Divider>STUDENT FOUND</Divider>
                        <Table columns={this.state.columns} dataSource={this.state.data} />,
                    </Col>
                    <Col span={12}>

                        <Row gutter={16} style={{ marginTop: 20 }}>
                            <Col span={12}>
                                Save The Billing Heap :
                            </Col>
                            <Col span={12}>
                                <Switch defaultChecked onChange={onChange} />
                            </Col>
                        </Row>

                        <Row gutter={16} style={{ marginTop: 10 }}>
                            <Col span={12}>
                                Date :
                            </Col>
                            <Col span={12}>
                                <DatePicker style={{ width: '100%' }} onChange={onChange} />
                            </Col>
                        </Row>

                        <Row gutter={16} style={{ marginTop: 10 }}>
                            <Col span={12}>
                            <Divider>Billing Title</Divider>
                            </Col>
                            <Col span={12}>
                            <Divider>Billing Amount</Divider>
                            </Col>
                        </Row>
                       
                        {
                            this.state.bill_details.map(item => (
                                <Row gutter={5} style={{ marginTop: 10 }}>
                                    
                                    <Col span={12}>{item.billing_name}</Col>
                                    
                                    <Col span={12}> <Input placeholder={item.billing_price} style={{ width: 120 }} onChange={this.handleChange.bind(this)} /> </Col>
                                </Row>
                            ))
                            
                        }
                         <Row gutter={5} style={{ marginTop: 20 }}>
                        <Col span={12} >Total </Col>
                        <Col span={12}><Input value={ _.sumBy(this.state.bill_details, 'billing_price')} style={{ width: 120 }} /></Col>
                        </Row>

                    </Col>
                </Row>
            </Card>

        );
    }
}
export default App;
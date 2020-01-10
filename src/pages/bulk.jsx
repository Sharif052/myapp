import { Table, Select, Icon, Divider, Row, Col, Switch } from 'antd';
import React from 'react';

const { Option } = Select;

let index = 0;
function onChange(checked) {
    console.log(`switch to ${checked}`);
}


class App extends React.Component {
    state = {
        classes: ['Class 9', 'Class 10'],
        section: ['Science', 'Arts'],
        year: ['2019', '2020'],
        bill: ["1000", "1000"],
        cats: ["A", "B"],
    };

    render() {
        const { classes, section, year, bill, cats } = this.state;
        return (
            <div>
                <Row gutter={16}>
                    <Col span={8}>
                        <Select
                            style={{ width: 240 }}
                            placeholder="Class"

                        >
                            {classes.map(item => (
                                <Option key={item}>{item}</Option>
                            ))}
                        </Select>
                    </Col>

                    <Col span={8}>
                        <Select
                            style={{ width: 240 }}
                            placeholder="Section"
                            span={12}
                        >
                            {section.map(item => (
                                <Option key={item}>{item}</Option>
                            ))}
                        </Select>
                    </Col>
                </Row>

               Save The Billing Heap : <Switch defaultChecked onChange={onChange} />
            </div>

        );
    }
}
export default App;
import React from "react";
import {Form} from 'antd';

export default class MyForm extends React.Component {
    constructor() {
        super();

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange = (event) => {
        console.log(event); // here I'm receiving only the value selected (1 or 2)
    }

    render() {
        render(
           <Form>
              <Select onChange={this.handleOnChange}>

                      <Option value="1">text 1</Option>
                      <Option value="2">text 2</Option>
              </Select>
           </Form>
        )
    }
}
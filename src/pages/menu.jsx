import React from "react";
import {Form, Input} from 'antd';

export default class MyForm extends React.Component {
    constructor() {
        super();
        this.state={
          result: 0,
          num1:0,
          num2:0,
        };
    }

    handleOnChange = (event) => {
      this.setState({
        [event.target.name] : Number(event.target.value),
      })
      console.log(event.target.value)

    }

    render() {
        return(
           <Form>
              
              <Input type="number" name="num1" onChange={ this.handleOnChange.bind(this)}/>
              <Input type="number" name="num2" onChange={ this.handleOnChange.bind(this)}/>
              <Input value={Number(this.state.num1) + Number(this.state.num2)}/>
           </Form> 
        )
    }
}
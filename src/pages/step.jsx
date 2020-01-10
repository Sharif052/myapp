import React from 'react';
//mport { Steps, Button, message } from 'antd';

import { Steps } from 'antd';

const { Step } = Steps;
class Grid extends React.Component {
  render() {
    return (
      <div>
        <Steps current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
      </div>
    )
  }
}
export default Grid;

// const { Step } = Steps;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       current: 0,
//       steps : [
//         {
//           title: 'First',
//           content: 'First-content',
//         },
//         {
//           title: 'Second',
//           content: 'Second-content',
//         },
//         {
//           title: 'Last',
//           content: 'Last-content',
//         },
//       ],
//     }
//   }

//   next() {
//     const current = this.state.current + 1;
//     this.setState({ current });
//   }

//   prev() {
//     const current = this.state.current - 1;
//     this.setState({ current });
//   }

//   render() {
//     const { current } = this.state;
//     const { Step } = Steps;
//     return (
//       <div>
//         <Steps current={current}>
//           {steps.map(item => (
//             <Step key={item.title} title={item.title} />
//           ))}
//         </Steps>
//         <div className="steps-content">{steps[current].content}</div>
//         <div className="steps-action">
//           {current < steps.length - 1 && (
//             <Button type="primary" onClick={() => this.next()}>
//               Next
//             </Button>
//           )}
//           {current === steps.length - 1 && (
//             <Button type="primary" onClick={() => message.success('Processing complete!')}>
//               Done
//             </Button>
//           )}
//           {current > 0 && (
//             <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
//               Previous
//             </Button>
//           )}
//         </div>
//       </div>
//     )
//   }
// }
// export default App;

//ReactDOM.render(<App />, mountNode);
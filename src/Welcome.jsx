import React from 'react';

// export class Welcome extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Olá, {this.props.user.name} {this.props.user.surname}</h1>
//         <img src={this.props.user.image} height={200} />
//       </div>
//     );
//   }
// }

export function Welcome(props) {
  return (
    <div>
      <h1>Olá, {props.user.name} {props.user.surname}</h1>
      <img src={props.user.image} height={200} />
    </div>
  );
}
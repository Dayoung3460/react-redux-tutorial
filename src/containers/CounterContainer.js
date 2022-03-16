import React from 'react';
import Counter from "../components/Counter";
import {connect} from 'react-redux'
import {decrease, increase} from "../modules/counter";
import {bindActionCreators} from 'redux'

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <div>
      <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    </div>
  );
};

// const mapStateToProps = state => ({
//   number: state.counter.number
// })
//
// const mapDispatchToProps = dispatch => ({
//   increase: () => {
//     dispatch(increase())
//   },
//   decrease: () => {
//     dispatch(decrease())
//   }
// })

export default connect(
  state => ({
    number: state.counter.number
  }),
  {
    increase,
    decrease,
  },
)(CounterContainer)

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(CounterContainer)

import React from 'react';
import Counter from "../components/Counter";
import {connect} from 'react-redux'

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <div>
      <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    </div>
  );
};

const mapStateToProps = state => ({
  number: state.counter.number
})

const mapDispatchToProps = dispatch => ({
  increase: () => {
    console.log('increase')
  },
  decrease: () => {
    console.log('decrease')
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterContainer)

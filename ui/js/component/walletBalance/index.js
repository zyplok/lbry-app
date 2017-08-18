import React from "react";
import { connect } from "react-redux";
import { doNavigate } from "actions/app";
import { selectBalance } from "selectors/wallet";
import WalletBalance from "./view";

const select = state => ({
  balance: selectBalance(state),
});

const perform = dispatch => ({
  navigate: path => dispatch(doNavigate(path)),
});

export default connect(select, perform)(WalletBalance);
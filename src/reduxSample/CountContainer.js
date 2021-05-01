import { connect } from "react-redux"
import store from "../store"
import { 
  handleIncrement,
  handleDecrement 
} from "./actions"
import reducer from "./reducer";
import { nameSpace } from "./actionTypes";
import { getCount } from "./selector"
import CountComponent from "./CountComponent"

const mapStateToProps = state => ({
  count:getCount(state)
})

const mapDispatchToProps = {
  handleIncrement,
  handleDecrement 
}

store.injectReducer(nameSpace,reducer)

export default connect(mapStateToProps, mapDispatchToProps)(CountComponent)
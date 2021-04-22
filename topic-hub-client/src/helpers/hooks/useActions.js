import * as UserActions from '../../redux/actions/userAction';
import * as SocketActions from '../../redux/actions/socketAction';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
const actions = {
    ...UserActions,
    ...SocketActions
}
const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
}
export default useActions;

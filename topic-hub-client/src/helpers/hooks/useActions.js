import * as UserActions from '../../redux/actions/userAction';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
const actions = {
    ...UserActions
}
const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
}
export default useActions;

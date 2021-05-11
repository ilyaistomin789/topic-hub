import * as UserActions from '../../redux/actions/userAction';
import * as SocketActions from '../../redux/actions/socketAction';
import * as MessageActions from '../../redux/actions/messageAction';
import * as ChatDataActions from '../../redux/actions/chatDataAction';
import * as TopicActions from '../../redux/actions/topicAction';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
const actions = {
    ...UserActions,
    ...SocketActions,
    ...MessageActions,
    ...ChatDataActions,
    ...TopicActions
}
const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
}
export default useActions;

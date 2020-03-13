import ListUser from '../components/ListUser';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/user/userAction';



const mapStateToProps = state => {
    return {
         users : state.user.users
    }

}
const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListUser)

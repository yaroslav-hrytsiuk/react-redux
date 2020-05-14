import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUsers } from '../../../actions'
import { Loader } from '../../components/Loader'

const mapStateToProps = (state) => {
    return {
        users: state.users,
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsers())
    }
}

class UsersList extends Component {
    componentDidMount() {
        this.props.getUsers()
    }

    renderUserList = () => {
        const { users } = this.props

        return (
            users.map(el =>
                <li key={el.id}>
                    <Link to={'/userinfo/' + el.login}>
                        <img src={el.avatar_url} alt='User avatar' />
                        {el.login}
                    </Link>
                </li>
            )
        )
    }

    render() {
        const { users, isLoading } = this.props

        if (isLoading || !users) {
            return <Loader />
        }

        return (
            <div className='all-users'>
                <h3>List of all users from GitHub Api</h3>
                <ul className='all-users-list'>
                    {this.renderUserList()}
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUserInfo } from '../../../actions'
import { Loader } from '../../components/Loader'

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserInfo: (userLogin) => dispatch(getUserInfo(userLogin))
    }
}
class UsersInfo extends Component {
    componentDidMount() {
        const userLogin = this.props.match.params.login
        this.props.getUserInfo(userLogin)
    }

    renderUserInfo = () => {
        const { userInfo } = this.props

        return (
            <>
                {userInfo.name && <p>User name: <b>{userInfo.name}</b></p>}
                <p>User login: <b>{userInfo.login}</b></p>
                {userInfo.location && <p>User location: <b>{userInfo.location}</b></p>}
                <p>Company: <b>{userInfo.company ? userInfo.company : 'Freelancer'}</b></p>
                {userInfo.blog && <p>User blog: <b><a href={userInfo.blog} target="_blank" rel="noopener noreferrer">{userInfo.blog}</a></b></p>}
                <p>Followers: <b>{userInfo.followers}</b></p>
                <p>Repositories: <Link to={'/userinfo/' + userInfo.login + '/repolist'}><b>Click here</b></Link></p>
            </>
        )
    }

    render() {
        const { userInfo, isLoading } = this.props

        if (isLoading || !userInfo) {
            return <Loader />
        }

        return (
            <div className='user-info'>
                <div className='user-logo'>
                    <img src={userInfo.avatar_url} alt="User logo" />
                </div>
                <div className='user-info-block'>
                    {this.renderUserInfo()}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersInfo)
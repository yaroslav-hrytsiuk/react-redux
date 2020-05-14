import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserRepo } from '../../../actions'
import { Loader } from '../../components/Loader'

const mapStateToProps = (state) => {
    return {
        userRepo: state.userRepo,
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserRepo: (userLogin) => dispatch(getUserRepo(userLogin))
    }
}
class RepoListView extends Component {
    componentDidMount() {
        const userLogin = this.props.match.params.login
        this.props.getUserRepo(userLogin)
    }

    renderUserRepos = () => {
        const { userRepo } = this.props

        return (
            userRepo.map(el =>
                <li key={el.id}>
                    <a href={el.html_url} rel="noopener noreferrer" target="_blank">
                        {el.name}
                    </a>
                </li>
            )
        )
    }

    render() {
        const { userRepo, isLoading } = this.props
        const userLogin = this.props.match.params.login

        if (isLoading || !userRepo) {
            return <Loader />
        }

        return (
            <div className='repo-list'>
                <h3>List of repositories for user {userLogin}</h3>
                <ul className='repo-list-view'>
                    {this.renderUserRepos()}
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoListView)
import React from 'react';
import './styles/Badges.css'
import BadgesList from '../components/BadgesList'
import { Link } from 'react-router-dom';
import api from '../api';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

class Badges extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined,
    }


    // componentDidUpdate(prevProps, prevState) {
    //     console.log("5. componentDidUpdate");
    //     console.log({
    //         prevProps: prevProps, prevState: prevState,
    //     });

    //     console.log({
    //         props: this.props, state: this.state
    //     });
    // }

    // componentWillMount() {
    //     console.log("6. componentWillMount");
    //     clearTimeout(this.timeoutId)
    // }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.badges.list();
            this.setState({ loading: false, data: data })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render(){

        if(this.state.loading) {
            return <PageLoading />
        }

        if(this.state.error) {
            return <PageError error={this.state.error}/>
        }

        return(
            <React.Fragment>
                <Navbar/>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo"></img>
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__list-container">
                            <BadgesList badges={this.state.data}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };
}
export default Badges;
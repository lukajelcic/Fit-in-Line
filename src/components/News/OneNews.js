import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getOnePost } from '../../redux/actions/dataActions';
import { withStyles } from '@material-ui/core';

const styles = {}

class OneNews extends Component {
    state = {
        blog: {}
    }
    componentDidMount() {
        let id = this.props.match.params.newsId;
        this.props.getOnePost(id)
    }
    render() {
        const { data: { blog: { title, body, imageUrl } } } = this.props

        const blog = this.state.blog ? (
            <div className="blog">
                <h4>{title}</h4>
                <h4>{body}</h4>
                <img src={imageUrl} />
            </div>
        ) : (
                <div className="center">Loading ...</div>
            )

        return (
            <main className="page-head" style={{ width: '100%', margin: '0', position: 'static' }}>
                <div className="container-fluid background"></div>
                <div className="page-content">
                    <div className="ntr-text">
                        <h1 className="ntr-title">{title}</h1>
                        <p style={{ position: 'relative' }}>{body}</p>
                    </div>
                </div>

            </main>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.data,
    UI: state.UI
})
export default connect(mapStateToProps, { getOnePost })(withStyles(styles)(OneNews));


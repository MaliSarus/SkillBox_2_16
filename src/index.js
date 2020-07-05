import React from 'react';
import ReactDOM from 'react-dom';
import Comments from './components/Comments';
import TextField from './components/TextField';
import {createStore} from 'redux';
import {connect} from 'react-redux';
import {addComm, delComm} from './actions/index';
import comments from './reducers'
import style from './style.css';
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";



const container = document.querySelector('.comments');

const initialState =  localStorage.getItem('commentList')!==null ? JSON.parse(localStorage.getItem("commentList")) : [];
    // newComment: {
    //     text: '',
    //     date: '',
    //     user: ''
    // },



const store = createStore(comments, initialState);

let App = class CommentApp extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <TextField onCommentChange={this.props.addComm}/>
                <Comments
                    comments={this.props.comments}
                    onDeleteComment={this.props.delComm}
                />
            </div>
        )
    }
}

let mapStateProps = (state) =>{
    return { comments:state }
};

let mapDispatchProps = (dispatch) => {
    return {
        addComm: (text,date,user) => dispatch(addComm(text,date,user)),
        delComm: (index) => dispatch(delComm(index))
    }
};

App = connect(
    mapStateProps,
    mapDispatchProps
)(App);

ReactDOM.render(
    <App store={store}/>,
    container
)
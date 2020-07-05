import React from 'react';

export default class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.deleteButtonHandler = this.deleteButtonHandler.bind(this);
    }

    deleteButtonHandler(index){
        this.props.onDeleteComment(index)
    }

    render() {
        return (
            <ul>
                {
                    this.props.comments.map((comment,i) => {
                        return(
                            <li key={i}>
                                <div className="info">
                                    <p>{comment.user}</p>
                                    <time>{comment.date}</time>
                                </div>
                                <div className="text">
                                    {comment.text}
                                </div>
                                <button
                                    className="btn btn-danger"
                                    onClick={event => {this.deleteButtonHandler(i)}}
                                >Удалить</button>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}


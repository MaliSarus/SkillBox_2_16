import React from 'react';

export default class TextField extends React.Component {
    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            user: '',
            commentText: '',
        }
    }

    submitHandler(event) {
        event.preventDefault();
        const text = this.state.commentText,
            date = new Date();
        const user = this.state.user;
        this.props.onCommentChange(text, date, user);
        this.setState({commentText: '', user: ''});

    }


    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Введите ваше имя"
                    value={this.state.user}
                    onChange={event => {
                        this.setState({user: event.target.value})
                    }}
                />
                <textarea
                    placeholder="Напишите свой комментарий"
                    className="form-control"
                    onChange={event => {
                        this.setState({commentText: event.target.value})
                    }}
                    value={this.state.commentText}
                ></textarea>
                <button
                    className="btn btn-primary"
                    type="submit"
                >Отправить
                </button>
            </form>
        )
    }
}
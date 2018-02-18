import React, {Component} from 'react'

class Post extends Component {

    state = {
        isOpenEditPost: true
    }

    toggleEditForm = () => {
        const isOpenEditPost = this.state.isOpenEditPost
        this.setState({isOpenEditPost: !isOpenEditPost})
    }
    deletePost = () => {
        this.props.deletePost(this.props.id)
    }
    render() {
    return (
        <div>
            {this.state.isOpenEditPost ? 
            <div>
                <div><h2>{this.props.title}</h2></div>
                <div>{this.props.content}</div>
                <div>
                    <button onClick={this.toggleEditForm}>Edit</button>
                </div> 
                <div>
                    <button onClick={this.deletePost}>Delete</button>
                </div> 
            </div>:

            <div>
                <form action="">
                    <div><input type="text" value={this.props.title}/></div>
                    <div><input type="text" value={this.props.content} /></div>
                    <div><input type="submit" value="Submit" /></div>
                </form>
                <div>
                    <button onClick={this.toggleEditForm}>Cancel</button>
                </div>
            </div>}
        </div>
    )
}
}

export default Post
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMeme } from '../actions';

class MemeItem extends Component { 

    constructor() {
        super();

        this.state = {
            hovered: false
        }
    }

    postMeme() {
        const { text0, text1, meme, createMeme } = this.props;
        const newMemeObj = {
            template_id: meme.id,
            text0,
            text1
        }
        this.props.createMeme(newMemeObj);

    }

    render(){
        return(
            <div className="meme-Item" onMouseEnter={ () =>  this.setState({hovered: true})} onMouseLeave={ () =>  this.setState({hovered: false})} onClick= { () => this.postMeme()}>
                <img className= {this.state.hovered ? "meme-img darken-img" : "meme-img" } 
                    src={this.props.meme.url}
                    alt={this.props.meme.name}
                />
                <p className= {this.state.hovered ? "meme-text": "no-text"}>
                    {this.props.meme.name}

                </p>
            </div>
        );
    }
}

export default connect(null, { createMeme })(MemeItem);
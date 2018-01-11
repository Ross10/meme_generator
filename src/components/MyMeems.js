import React, { Component } from 'react';
import { connect } from 'react-redux';

var fileDownload = require('react-file-download');


class MyMeems extends Component {

    
    // downloadFunc(someMeme) {
    //     console.log(someMeme);
    //     fileDownload(someMeme.data.url, 'filename.jpg');
    // }
    render() {
        return (
            <div>
               {
                   this.props.myMemes.map((meme, index) => {
                    var res = meme.data.url.slice(7);
                    console.log(meme.data.url);
           
                       return (
                            <div>
                                <img  key={index} src={meme.data.url} alt= "my-meme" className="my-meme-img" />
                                <a href={meme.data.url} download> Download </a>      
                            </div>
                        )
                   })
               } 

               
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        myMemes: state.myMemes
    }
}
export default connect(mapStateToProps)(MyMeems);
import React, { Component } from 'react';
// import ReactDOMClient from 'react-dom/client';
// import mainImage from '../../../images/blog-content/blog-sub-main.png';
import contentImage from '../../../images/blog-content/sub-content.png';
import Comments from '../CommentSection';
import { Person } from 'react-bootstrap-icons';
import './style.css';

export class SubBlog extends Component {

    // const {mainImage, contentImages, title} = props;
    // console.log(mainImage, contentImages, title);

    // Create comment function - postponed.
    // createComment = (name, message) => {
    //     const h4 = React.createElement('h4', { className: 'name fw-bold' }, name);
    //     const p = React.createElement('p', { className: 'comment mb-0' }, message);
    //     // const avaterDiv = React.createElement('div', { className: 'comment-avatar flex-fluid' }, Person);
    //     const divCont = React.createElement('div', null, h4, p);
    //     const MessageDiv = React.createElement('div', { className: 'made-comment container' },  divCont);

    //     let MainDiv = document.querySelector('#Blog .comment-section');
        
    //     // MainDiv.append(MessageDiv)
    //     const root = ReactDOMClient.createRoot(MainDiv);
    //     // root.render(MessageDiv)
                
    //     if(name && message) {
    //         this.makeComment(name, message)
    //     }
    // }

    // makeComment = (name, message) => {
    //     const blogPage = document.querySelector('#Blog');

    //     if (blogPage){
    //         let Name = blogPage.querySelector('.comment-section .name'),
    //             Message = blogPage.querySelector('.comment-section .comment');
            
    //         // Post Comment
    //         // if(Name && Message)
    //         // Name.innerHTML = name;
    //         // Message.innerHTML = message;
    //         console.log(document.querySelector('#Blog .comment-section'));
    //     }
    // }

    // componentDidMount() {
    //     this.createComment();
    // }

    render() {

        return (
            <div id="Blog">
                <div className="blog-hero hero-main-bg">
                    <div className="container">
                        <div className="blog-cover"></div>
                    </div>
                </div>
                <div className="blog-content container d-flex justify-content-between">
                    <div className="main-content col-md-8">
                        <h1>Professional Development</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati tenetur nesciunt qui at autem eius inventore illo excepturi, reiciendis nisi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati tenetur nesciunt qui at autem eius inventore illo excepturi, reiciendis nisi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati tenetur nesciunt qui at autem eius inventore illo excepturi, reiciendis nisi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati tenetur nesciunt qui at autem eius inventore illo excepturi, reiciendis nisi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati tenetur nesciunt qui at autem eius inventore illo excepturi, reiciendis nisi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati tenetur nesciunt qui at autem eius inventore illo excepturi, reiciendis nisi.
                        </p>
                        <img src={contentImage} className="img-fluid" alt="" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati tenetur nesciunt qui at autem eius inventore illo excepturi, reiciendis nisi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati tenetur nesciunt qui at autem eius inventore illo excepturi, reiciendis nisi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati tenetur nesciunt qui at autem eius inventore illo excepturi, reiciendis nisi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati tenetur nesciunt qui at autem eius inventore illo excepturi, reiciendis nisi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati tenetur nesciunt qui at autem eius inventore illo excepturi, reiciendis nisi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati tenetur nesciunt qui at autem eius inventore illo excepturi, reiciendis nisi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati tenetur nesciunt qui at autem eius inventore illo excepturi, reiciendis nisi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati tenetur nesciunt qui at autem eius inventore illo excepturi, reiciendis nisi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati tenetur nesciunt qui at autem eius inventore illo excepturi, reiciendis nisi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati tenetur nesciunt qui at autem eius inventore illo excepturi, reiciendis nisi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati tenetur nesciunt qui at autem eius inventore illo excepturi, reiciendis nisi.
                        </p>
                    </div>
                    <div className="rel-content row g-0 col-md-3">
                        <h4>Related Content</h4>
                        <div className="blog-card">
                            <div className="cover"></div>
                            <div className="text-content">
    
                                <h6>DIGITAL LITERACY CAMPAIGN</h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Magnam aliquid atque optio neque nostrum fugit modi minima doloremque!
                                </p>
                            </div>
                        </div>
    
                        <div className="blog-card">
                            <div className="cover"></div>
                            <div className="text-content">
                                <h6>DIGITAL LITERACY CAMPAIGN</h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Magnam aliquid atque optio neque nostrum fugit modi minima doloremque!
                                </p>
                            </div>
                        </div>
    
                        <div className="blog-card">
                            <div className="cover"></div>
                            <div className="text-content">
                                <h6>DIGITAL LITERACY CAMPAIGN</h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Magnam aliquid atque optio neque nostrum fugit modi minima doloremque!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="comment-section">
                    <div className="made-comment container">
                        <div className="comment-avatar flex-fluid">
                            <Person />
                        </div>
                        <div>
                            <h4 className="name fw-bold">Obechina Justice</h4>
                            <p className="comment mb-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, laudantium.
                            </p>
                        </div>
                    </div>

                    <div className="made-comment container">
                        <div className="comment-avatar flex-fluid">
                            <Person />
                        </div>
                        <div>
                            <h4 className="name fw-bold">Obechina Justice</h4>
                            <p className="comment mb-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, laudantium.
                            </p>
                        </div>
                    </div>

                    <Comments createComment={this.createComment} />
                </div>
            </div>
        )
    }
}

export default SubBlog;
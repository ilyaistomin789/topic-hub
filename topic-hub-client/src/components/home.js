import React from 'react'

class Main extends React.Component {
    render() {
        return (
            <div className="main_content">
                <div className="info">
                    <section className="py-5">
                        <div className="container px-4 px-lg-5 my-5">
                            <div className="row gx-4 gx-lg-5 align-items-center">
                                <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0"
                                                               src="https://www.outlookindia.com/outlooktraveller/resizer.php?src=https://www.outlookindia.com/outlooktraveller/public/uploads/articles/explore/hyd_main.jpg&w=600&h=700"
                                                               alt="..."/></div>
                                <div className="col-md-6">
                                    <div className="small mb-1">Home page</div>
                                    <h1 className="display-5 fw-bolder">Welcome to our forum Topic Hub!</h1>
                                    <p className="lead">Topic Hub it's a forum, where you can communicate with forum
                                        participants on various topics. Topic Hub is implemented using React.js and
                                        Node.js. Also the following concepts are used:
                                        <ul className="list-group">
                                            <li className="list-group-item">JSON Web Token</li>

                                            <li className="list-group-item list-group-item-primary">Local Strategy
                                            </li>
                                            <li className="list-group-item list-group-item-secondary">Express.JS
                                            </li>
                                            <li className="list-group-item list-group-item-success">Mongo DB
                                            </li>
                                            <li className="list-group-item list-group-item-danger">Passport
                                            </li>
                                            <li className="list-group-item list-group-item-warning">HTTPS
                                            </li>
                                            <li className="list-group-item list-group-item-info">Socket-IO</li>
                                        </ul></p>
                                    <div className="d-flex">
                                        <a className="btn btn-outline-dark flex-shrink-0" type="button" href="https://github.com/ilyaistomin789/topic-hub" target='_blank'>
                                            <i className="bi-cart-fill me-1"/>
                                            Check source code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Main

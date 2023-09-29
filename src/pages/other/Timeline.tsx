import { Link } from 'react-router-dom';

// hooks
import { usePageTitle } from '../../hooks';

// images
import img1 from '../../assets/images/small/img-1.jpg';
import img2 from '../../assets/images/small/img-2.jpg';
import img3 from '../../assets/images/small/img-3.jpg';

const Timeline = () => {
    // set pagetitle
    usePageTitle({
        title: 'Timeline',
        breadCrumbItems: [
            {
                path: '/pages/timeline',
                label: 'Extra Pages',
            },
            {
                path: '/pages/timeline',
                label: 'Timeline',
                active: true,
            },
        ],
    });

    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="timeline">
                    <article className="timeline-item alt">
                        <div className="time-show first">
                            <Link to="#" className="btn btn-primary width-lg">
                                Today
                            </Link>
                        </div>
                    </article>
                    <article className="timeline-item alt">
                        <div className="timeline-desk">
                            <div className="panel">
                                <div className="panel-body">
                                    <span className="arrow-alt"></span>
                                    <span className="timeline-icon bg-danger">
                                        <i className="mdi mdi-circle"></i>
                                    </span>
                                    <h4 className="text-danger mt-0">1 hour ago</h4>
                                    <p className="timeline-date text-muted">
                                        <small>08:25 am</small>
                                    </p>
                                    <p>
                                        Dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad
                                        debitis unde?{' '}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="timeline-item ">
                        <div className="timeline-desk">
                            <div className="panel">
                                <div className="panel-body">
                                    <span className="arrow"></span>
                                    <span className="timeline-icon bg-success">
                                        <i className="mdi mdi-circle"></i>
                                    </span>
                                    <h4 className="text-success mt-0">2 hours ago</h4>
                                    <p className="timeline-date text-muted">
                                        <small>08:25 am</small>
                                    </p>
                                    <p>
                                        consectetur adipisicing elit. Iusto, optio, dolorum{' '}
                                        <Link to="#">John deon</Link> provident rerum aut hic quasi placeat iure tempora
                                        laudantium{' '}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="timeline-item alt">
                        <div className="timeline-desk">
                            <div className="panel">
                                <div className="panel-body">
                                    <span className="arrow-alt"></span>
                                    <span className="timeline-icon bg-primary">
                                        <i className="mdi mdi-circle"></i>
                                    </span>
                                    <h4 className="text-primary mt-0">10 hours ago</h4>
                                    <p className="timeline-date text-muted">
                                        <small>08:25 am</small>
                                    </p>
                                    <p>3 new photo Uploaded on facebook fan page</p>
                                    <div className="album">
                                        <Link to="#">
                                            <img alt="" src={img1} className="img-fluid" />
                                        </Link>
                                        <Link to="#">
                                            <img alt="" src={img2} />
                                        </Link>
                                        <Link to="#">
                                            <img alt="" src={img3} />
                                        </Link>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="timeline-item">
                        <div className="timeline-desk">
                            <div className="panel">
                                <div className="panel-body">
                                    <span className="arrow"></span>
                                    <span className="timeline-icon bg-purple">
                                        <i className="mdi mdi-circle"></i>
                                    </span>
                                    <h4 className="text-purple mt-0">14 hours ago</h4>
                                    <p className="timeline-date text-muted">
                                        <small>08:25 am</small>
                                    </p>
                                    <p>
                                        Outdoor visit at California State Route 85 with John Boltana & Harry Piterson
                                        regarding to setup a new show room.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="timeline-item alt">
                        <div className="timeline-desk">
                            <div className="panel">
                                <div className="panel-body">
                                    <span className="arrow-alt"></span>
                                    <span className="timeline-icon">
                                        <i className="mdi mdi-circle"></i>
                                    </span>
                                    <h4 className="text-muted mt-0">19 hours ago</h4>
                                    <p className="timeline-date text-muted">
                                        <small>08:25 am</small>
                                    </p>
                                    <p>
                                        Jonatha Smith added new milestone{' '}
                                        <span>
                                            <Link to="#">Pathek</Link>
                                        </span>{' '}
                                        Lorem ipsum dolor sit amet consiquest dio
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="timeline-item alt">
                        <div className="time-show">
                            <Link to="#" className="btn btn-primary width-lg">
                                Yesterday
                            </Link>
                        </div>
                    </article>
                    <article className="timeline-item">
                        <div className="timeline-desk">
                            <div className="panel">
                                <div className="panel-body">
                                    <span className="arrow"></span>
                                    <span className="timeline-icon bg-warning">
                                        <i className="mdi mdi-circle"></i>
                                    </span>
                                    <h4 className="text-warning mt-0">07 January 2016</h4>
                                    <p className="timeline-date text-muted">
                                        <small>08:25 am</small>
                                    </p>
                                    <p>
                                        Montly Regular Medical check up at Greenland Hospital by the doctor{' '}
                                        <span>
                                            <Link to="#"> Johm meon </Link>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="timeline-item alt">
                        <div className="timeline-desk">
                            <div className="panel">
                                <div className="panel-body">
                                    <span className="arrow-alt"></span>
                                    <span className="timeline-icon bg-primary">
                                        <i className="mdi mdi-circle"></i>
                                    </span>
                                    <h4 className="text-primary mt-0">07 January 2016</h4>
                                    <p className="timeline-date text-muted">
                                        <small>08:25 am</small>
                                    </p>
                                    <p>Download the new updates of Adminto admin dashboard</p>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="timeline-item">
                        <div className="timeline-desk">
                            <div className="panel">
                                <div className="panel-body">
                                    <span className="arrow"></span>
                                    <span className="timeline-icon bg-success">
                                        <i className="mdi mdi-circle"></i>
                                    </span>
                                    <h4 className="text-success mt-0">07 January 2016</h4>
                                    <p className="timeline-date text-muted">
                                        <small>08:25 am</small>
                                    </p>
                                    <p>
                                        Jonatha Smith added new milestone{' '}
                                        <span>
                                            <Link className="blue" to="#">
                                                crishtian
                                            </Link>
                                        </span>{' '}
                                        Lorem ipsum dolor sit amet consiquest dio
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="timeline-item alt">
                        <div className="time-show">
                            <Link to="#" className="btn btn-primary width-lg">
                                Last Month
                            </Link>
                        </div>
                    </article>

                    <article className="timeline-item alt">
                        <div className="timeline-desk">
                            <div className="panel">
                                <div className="panel-body">
                                    <span className="arrow-alt"></span>
                                    <span className="timeline-icon">
                                        <i className="mdi mdi-circle"></i>
                                    </span>
                                    <h4 className="text-muted mt-0">31 December 2015</h4>
                                    <p className="timeline-date text-muted">
                                        <small>08:25 am</small>
                                    </p>
                                    <p>Download the new updates of Adminto admin dashboard</p>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="timeline-item">
                        <div className="timeline-desk">
                            <div className="panel">
                                <div className="panel-body">
                                    <span className="arrow"></span>
                                    <span className="timeline-icon bg-danger">
                                        <i className="mdi mdi-circle"> </i>
                                    </span>
                                    <h4 className="text-danger mt-0">16 Decembar 2015</h4>
                                    <p className="timeline-date text-muted">
                                        <small>08:25 am</small>
                                    </p>
                                    <p>
                                        Jonatha Smith added new milestone{' '}
                                        <span>
                                            <Link to="#">prank</Link>
                                        </span>{' '}
                                        Lorem ipsum dolor sit amet consiquest dio
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Timeline;

import { Link } from 'react-router-dom';

type LeftBarProps = {
    totalUnreadEmails?: number;
};

const LeftBar = ({ totalUnreadEmails }: LeftBarProps) => {
    return (
        <>
            <menu className="menu-segment">
                <ul className="list-unstyled">
                    <li className="active">
                        <Link to="#">
                            Inbox (<span>{totalUnreadEmails}</span>)
                        </Link>
                    </li>
                    <li>
                        <Link to="#">Important</Link>
                    </li>
                    <li>
                        <Link to="#">Sent</Link>
                    </li>
                    <li>
                        <Link to="#">Drafts</Link>
                    </li>
                    <li>
                        <Link to="#">Trash</Link>
                    </li>
                </ul>
            </menu>

            <div className="separator"></div>

            <div className="menu-segment">
                <ul className="labels list-unstyled">
                    <li className="title">
                        Labels <span className="icon">+</span>
                    </li>
                    <li>
                        <Link to="#">
                            Dribbble <span className="ball pink"></span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            Roommates <span className="ball green"></span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            Bills <span className="ball blue"></span>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="separator"></div>

            <div className="menu-segment">
                <ul className="chat list-unstyled">
                    <li className="title">
                        Chat <span className="icon">+</span>
                    </li>
                    <li>
                        <Link to="#">
                            <span className="ball green"></span> Laura Turner
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <span className="ball green"></span> Kevin Jones
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <span className="ball blue"></span> John King
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <span className="ball blue"></span> Jenny Parker
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <span className="ball blue"></span> Paul Green
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="italic-link">
                            {' '}
                            See offline list
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="bottom-padding"></div>
        </>
    );
};

export default LeftBar;

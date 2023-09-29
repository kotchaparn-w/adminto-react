import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import classNames from 'classnames';

// hooks
import { usePageTitle } from '../../../hooks';

// component
import { FormInput } from '../../../components/form';

import LeftBar from './LeftBar';
import Message from './Message';
import Compose from './Compose';

// types
import { Email } from './types';

// dummy data
import { emails as mails } from './data';

type EmailListProps = {
    emails: Email[];
    handleMessageClick: (i: number) => void;
    activeIndex: number | null;
};

const EmailList = ({ emails, handleMessageClick, activeIndex }: EmailListProps) => {
    return (
        <ul className="message-list">
            {(emails || []).map((email, index) => {
                return (
                    <li
                        className={classNames({
                            unread: !email.is_read,
                            active: activeIndex === index,
                            'blue-dot': email.label === 'bills',
                            'orange-dot': email.label === 'recharge',
                            'green-dot': email.label === 'roommates',
                        })}
                        key={index.toString()}
                        onClick={() => handleMessageClick(index)}
                    >
                        <div className="mail-col mail-col-1">
                            <span className="dot"></span>
                            <div className="checkbox-wrapper-mail">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id={'mail' + email.id} />
                                    <label className="toggle" htmlFor={'mail' + email.id}></label>
                                </div>
                            </div>
                            <span className={classNames('star-toggle', 'far', 'fa-star')}></span>
                            <p className="title">{email.from_name}</p>
                        </div>
                        <div className="mail-col mail-col-2">
                            <div className="subject">
                                {email.subject} &nbsp;&ndash;&nbsp;
                                <span className="teaser">{email.teaser}</span>
                            </div>
                            <div className="date">{email.time}</div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

const Inbox = () => {
    // set pagetitle
    usePageTitle({
        title: 'Inbox',
        breadCrumbItems: [
            {
                path: '/apps/email/inbox',
                label: 'Contacts',
            },
            {
                path: '/apps/email/inbox',
                label: 'Inbox',
                active: true,
            },
        ],
    });

    const [emails, setEmails] = useState<Array<Email>>(mails.slice(0, 20));
    const [totalEmails] = useState<number>(mails.length);
    const [pageSize] = useState<number>(20);
    const [page, setPage] = useState<number>(1);
    const [, setEndIndex] = useState<number>(20);
    const [totalUnreadEmails] = useState<number>(mails.filter((e: any) => e.is_read === false).length);
    const [messageIsOpen, setMessageIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        let footer = document.querySelector('footer.footer');
        footer?.classList.add('d-none');

        return () => {
            footer?.classList.remove('d-none');
        };
    }, []);

    // Toggles the compose modal
    const toggleComposeModal = () => {
        setIsOpen(!isOpen);
    };

    // show mode messages
    const showMoreMessages = () => {
        var nextPage = page + 1;
        if (nextPage > totalEmails / pageSize) {
            nextPage = totalEmails / pageSize;
        }
        var endIdx = nextPage * pageSize;
        setPage(nextPage);
        setEndIndex(endIdx);
        setEmails(mails.slice(0, endIdx));
    };

    // handle overlay
    const showOverlay = () => {
        document.body.classList.add('show-main-overlay');
    };
    const hideOverlay = () => {
        document.body.classList.remove('show-main-overlay');
    };

    // handle message
    const showMessage = () => {
        document.body.classList.add('show-message');
        setMessageIsOpen(true);
    };
    const hideMessage = () => {
        document.body.classList.remove('show-message');
        setMessageIsOpen(false);
        setActiveIndex(null);
    };

    // hanlde sidebar
    const showSidebar = () => {
        document.body.classList.add('show-sidebar');
    };
    const hideSidebar = () => {
        document.body.classList.remove('show-sidebar');
    };

    const toggleSidebar = () => {
        showSidebar();
        showOverlay();
    };

    const handleMessageClose = () => {
        hideMessage();
        hideOverlay();
    };

    const handleMessageClick = (index: number) => {
        if (messageIsOpen && activeIndex === index) {
            hideMessage();
            hideOverlay();
        } else {
            if (messageIsOpen) {
                hideMessage();
                setActiveIndex(index);
                setTimeout(function () {
                    showMessage();
                }, 300);
            } else {
                setActiveIndex(index);
                showMessage();
            }
            showOverlay();
        }
    };

    const handleOverlayClick = () => {
        hideOverlay();
        hideMessage();
        hideSidebar();
    };

    return (
        <>
            <Row>
                <Col sm={12}>
                    <div className="inbox-app-main">
                        <Row>
                            <Col md={3}>
                                <aside id="sidebar">
                                    <SimpleBar className="h-100">
                                        <div className="text-center">
                                            <Link
                                                to="#"
                                                className="btn btn-danger rounded-pill width-lg waves-effect waves-light mb-2 mt-3"
                                                onClick={toggleComposeModal}
                                            >
                                                Compose
                                            </Link>
                                        </div>

                                        <LeftBar totalUnreadEmails={totalUnreadEmails} />
                                    </SimpleBar>
                                </aside>
                            </Col>
                            <Col md={9}>
                                <main id="main">
                                    <div className="overlay" onClick={handleOverlayClick}></div>
                                    <header className="header">
                                        <h1 className="page-title">
                                            <Link
                                                to="#"
                                                className="sidebar-toggle-btn trigger-toggle-sidebar"
                                                onClick={toggleSidebar}
                                            >
                                                <span className="line"></span>
                                                <span className="line"></span>
                                                <span className="line"></span>
                                                <span className="line line-angle1"></span>
                                                <span className="line line-angle2"></span>
                                            </Link>
                                        </h1>
                                        <div className="action-bar float-start">
                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item">
                                                    <Link to="#" className="icon circle-icon">
                                                        <i className="mdi mdi-refresh text-muted"></i>
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to="#" className="icon circle-icon">
                                                        <i className="mdi mdi-share text-muted"></i>
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to="#" className="icon circle-icon red">
                                                        <i className="mdi mdi-close text-danger"></i>
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to="#" className="icon circle-icon red">
                                                        <i className="mdi mdi-flag text-danger"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="search-box float-end">
                                            <FormInput type="text" name="searchMail" placeholder="Search..." />
                                            <span className="icon fa fa-search"></span>
                                        </div>
                                    </header>

                                    <div id="main-nano-wrapper" className="nano">
                                        <SimpleBar className="nano-content h-100">
                                            <EmailList
                                                emails={emails}
                                                handleMessageClick={handleMessageClick}
                                                activeIndex={activeIndex}
                                            />
                                            {emails.length !== totalEmails && (
                                                <Link to="#" className="load-more-link" onClick={showMoreMessages}>
                                                    Show more messages
                                                </Link>
                                            )}
                                        </SimpleBar>
                                    </div>
                                </main>

                                <Message handleMessageClose={handleMessageClose} />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            {isOpen && <Compose isOpen={isOpen} toggleComposeModal={toggleComposeModal} />}
        </>
    );
};

export default Inbox;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Dropdown } from 'react-bootstrap';
import classnames from 'classnames';
import SimpleBar from 'simplebar-react';

// types
import { ChatUser } from './types';

// dummy data
import { users } from './data';

// images
import profilePic from '../../../assets/images/users/user-1.jpg';
import classNames from 'classnames';

type ChatUsersProps = {
    onUserSelect: (value: ChatUser) => void;
};

// ChatUsers
const ChatUsers = ({ onUserSelect }: ChatUsersProps) => {
    const [user, setUser] = useState<ChatUser[]>([...users]);
    const [selectedUser, setSelectedUser] = useState<ChatUser>(users[1]);

    // Search the user
    // @param {*} text
    const search = (text: string) => {
        setUser(text ? [...users].filter((u) => u.name!.toLowerCase().indexOf(text.toLowerCase()) >= 0) : [...users]);
    };

    // Activates the user
    // @param {*} user
    const activateUser = (user: ChatUser) => {
        setSelectedUser(user);
        if (onUserSelect) {
            onUserSelect(user);
        }
    };

    return (
        <>
            <Card className="chat-list-card mb-xl-0">
                <Card.Body>
                    <Dropdown className="float-end" align="end">
                        <Dropdown.Toggle as="a" className="cursor-pointer card-drop">
                            <i className="mdi mdi-dots-vertical"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Anothther Action</Dropdown.Item>
                            <Dropdown.Item>Something Else</Dropdown.Item>
                            <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <div className="d-flex">
                        <div className="flex-shrink-0">
                            <img src={profilePic} className="rounded-circle avatar-sm" alt="" />
                        </div>
                        <div className="flex-grow-1 align-items-center ms-2">
                            <h5 className="mt-0 mb-1">
                                <Link to="/" className="text-reset">
                                    Nowak Helme
                                </Link>
                            </h5>
                            <p className="font-13 text-muted mb-0">Admin Head</p>
                        </div>
                    </div>

                    <hr className="my-3" />

                    <form className="search-box chat-search-box">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                            onKeyUp={(e: any) => search(e.target.value)}
                        />
                        <span className="mdi mdi-magnify search-icon"></span>
                    </form>

                    <hr className="my-3" />

                    <ul className="list-unstyled chat-list mb-0">
                        <SimpleBar style={{ height: '410px', width: '100%' }}>
                            {(user || []).map((user, index) => {
                                return (
                                    <li
                                        key={index.toString()}
                                        className={classnames({
                                            active: user.id === selectedUser.id,
                                            unread: user.lastMessageSeen === false,
                                        })}
                                    >
                                        <Link
                                            to="#"
                                            onClick={(e: any) => {
                                                activateUser(user);
                                            }}
                                        >
                                            <div className="d-flex">
                                                {user.avatar ? (
                                                    <div
                                                        className={classNames(
                                                            'flex-shrink-0',
                                                            'chat-user-img',
                                                            'align-self-center',
                                                            'me-2',
                                                            user.userStatus === 'online' && 'active'
                                                        )}
                                                    >
                                                        <img
                                                            src={user.avatar}
                                                            className="rounded-circle avatar-sm"
                                                            alt=""
                                                        />
                                                    </div>
                                                ) : (
                                                    <div
                                                        className={classNames(
                                                            'flex-shrink-0',
                                                            'chat-user-img',
                                                            'avatar-sm',
                                                            'align-self-center',
                                                            'me-2',
                                                            user.userStatus === 'online' && 'active'
                                                        )}
                                                    >
                                                        <span
                                                            className={classnames(
                                                                'avatar-title',
                                                                'rounded-circle',
                                                                'bg-soft-' + user.variant,
                                                                'text-' + user.variant
                                                            )}
                                                        >
                                                            <i className={classNames(user.icon)}></i>
                                                        </span>
                                                    </div>
                                                )}
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="text-truncate font-14 mt-0 mb-1">{user.name}</h5>
                                                    <p className="text-truncate mb-0">{user.lastMessage}</p>
                                                </div>
                                                <div className="font-11">{user.lastMessageOn}</div>
                                            </div>
                                        </Link>
                                    </li>
                                );
                            })}
                        </SimpleBar>
                    </ul>
                </Card.Body>
            </Card>
        </>
    );
};

export default ChatUsers;

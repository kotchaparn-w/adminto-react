import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';

// component
import ChatUsers from './ChatUsers';
import ChatArea from './ChatArea';

// types
import { ChatUser } from './types';

// dummy data
import { users } from './data';

const ChatApp = () => {
    // set pagetitle
    usePageTitle({
        title: 'Chat',
        breadCrumbItems: [
            {
                path: '/apps/chat',
                label: 'Apps',
            },
            {
                path: '/apps/chat',
                label: 'Chat',
                active: true,
            },
        ],
    });

    const [selectedUser, setSelectedUser] = useState<ChatUser>(users[1]);

    // On user change
    const onUserChange = (user: ChatUser) => {
        setSelectedUser(user);
    };

    return (
        <Row>
            <Col xl={3} lg={4}>
                <ChatUsers onUserSelect={onUserChange} />
            </Col>
            <Col xl={9} lg={8}>
                <ChatArea selectedUser={selectedUser} />
            </Col>
        </Row>
    );
};

export default ChatApp;

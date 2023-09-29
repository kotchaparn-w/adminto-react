import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Card, Dropdown, Row, Col } from 'react-bootstrap';
import classnames from 'classnames';
import SimpleBar from 'simplebar-react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// components
import { FormInput } from '../../../components/form';
import Loader from '../../../components/Loader';

// types
import { ChatMessage, ChatUser } from './types';

// dummy data
import { messages } from './data';

// images
import avatar1 from '../../../assets/images/users/user-1.jpg';

const UserMessage = ({ message, toUser }: { message: ChatMessage; toUser: ChatUser }) => {
    return (
        <li className={classnames('clearfix', { odd: message.from.id === toUser.id })}>
            <div className="message-list">
                {message.from.avatar ? (
                    <div className="chat-avatar">
                        <img src={message.from.avatar} alt="" />
                    </div>
                ) : (
                    <div className="chat-avatar">
                        <span
                            className={classnames(
                                'd-flex',
                                'align-items-center',
                                'justify-content-center',
                                'avatar-sm',
                                'rounded-circle',
                                'bg-soft-' + message.from.variant,
                                'text-' + message.from.variant
                            )}
                        >
                            <i className={classnames(message.from.icon)}></i>
                        </span>
                    </div>
                )}

                <div className="conversation-text">
                    <div className="ctext-wrap">
                        <i>{message.from.name}</i>
                        <p>{message.message}</p>
                    </div>
                    <span className="time">{message.sendOn}</span>
                </div>
            </div>
        </li>
    );
};

type ChatAreaProps = {
    selectedUser: ChatUser;
};

// ChatArea
const ChatArea = ({ selectedUser }: ChatAreaProps) => {
    const [loading, setLoading] = useState<boolean>(false);

    const [userMessages, setUserMessages] = useState<ChatMessage[]>([]);
    const [toUser] = useState<ChatUser>({
        id: 9,
        name: 'Geneva M',
        avatar: avatar1,
    });

    // Fetches the messages for selected user
    const getMessagesForUser = useCallback(() => {
        if (selectedUser) {
            setLoading(true);
            setTimeout(() => {
                setUserMessages(
                    [...messages].filter(
                        (m) =>
                            (m.to.id === toUser.id && m.from.id === selectedUser.id) ||
                            (toUser.id === m.from.id && m.to.id === selectedUser.id)
                    )
                );
                setLoading(false);
            }, 750);
        }
    }, [selectedUser, toUser]);

    useEffect(() => {
        getMessagesForUser();
    }, [getMessagesForUser]);

    // form validation schema
    const schemaResolver = yupResolver(
        yup.object().shape({
            newMessage: yup.string().required('Please enter your messsage'),
        })
    );

    // form methods
    const methods = useForm({ resolver: schemaResolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
        reset,
    } = methods;

    // sends the chat message
    const sendChatMessage = (data: { [x: string]: string }) => {
        let newUserMessages = [...userMessages];
        newUserMessages.push({
            id: userMessages.length + 1,
            from: toUser,
            to: selectedUser,
            message: data['newMessage'],
            sendOn: new Date().getHours() + ':' + new Date().getMinutes(),
        });
        setUserMessages(newUserMessages);
        reset();
    };

    return (
        <Card className="conversation-list-card">
            <Card.Body>
                <Dropdown className="float-end" align="end">
                    <Dropdown.Toggle as="a" className="cursor-pointer card-drop">
                        <i className="mdi mdi-dots-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Anothther Action</Dropdown.Item>
                        <Dropdown.Item>Something Else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <div className="d-flex">
                    <div className="flex-grow-1">
                        <h5 className="mt-0 mb-1 text-truncate">{selectedUser.name}</h5>
                        <p className="font-13 text-muted mb-0">
                            <i className="mdi mdi-circle text-success me-1 font-11"></i>
                            Active
                        </p>
                    </div>
                </div>

                <hr className="my-3" />

                {loading && <Loader />}
                <SimpleBar style={{ height: '410px', width: '100%' }}>
                    <ul className="conversation-list">
                        <li>
                            <div className="chat-day-title">
                                <span className="title">Today</span>
                            </div>
                        </li>
                        {(userMessages || []).map((message, index) => {
                            return <UserMessage key={index.toString()} message={message} toUser={toUser} />;
                        })}
                    </ul>
                </SimpleBar>
            </Card.Body>
            <div className="p-3 conversation-input border-top">
                <form name="chat-form" id="chat-form" onSubmit={handleSubmit(sendChatMessage)}>
                    <Row>
                        <Col>
                            <FormInput
                                type="text"
                                name="newMessage"
                                placeholder="Enter Message..."
                                register={register}
                                key="newMessage"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                        <Col xs="auto">
                            <button
                                type="submit"
                                className="btn btn-primary chat-send width-md waves-effect waves-light"
                            >
                                <span className="d-none d-sm-inline-block me-2">Send</span>
                                <i className="mdi mdi-send"></i>
                            </button>
                        </Col>
                    </Row>
                </form>
            </div>
        </Card>
    );
};

export default ChatArea;

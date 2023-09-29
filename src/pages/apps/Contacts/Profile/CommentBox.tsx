import classNames from 'classnames';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// types
import { Post } from './types';

type CommentsProps = {
    posts: Post[];
};

const CommentBox = ({ posts }: CommentsProps) => {
    return (
        <Card>
            <Card.Body>
                {(posts || []).map((post, index) => {
                    return (
                        <div
                            className={classNames('d-flex', 'align-items-top', index === 0 ? 'mb-2' : 'mb-3')}
                            key={index.toString()}
                        >
                            <img
                                src={post.avatar}
                                alt="avatar"
                                className="flex-shrink-0 comment-avatar avatar-sm rounded me-2"
                            />
                            <div className="flex-grow-1">
                                <h5 className="mt-0">
                                    <Link to="#" className="text-dark">
                                        {post.name}
                                        <small className="ms-1 text-muted">{post.time}</small>
                                    </Link>
                                </h5>
                                <p>{post.content.message}</p>
                                <div>
                                    {(post.content.media || []).map((item, index) => {
                                        return (
                                            <Link to="#" key={index.toString()}>
                                                <img src={item} alt="media" className="avatar-md rounded me-1" />
                                            </Link>
                                        );
                                    })}
                                </div>
                                <div
                                    className={classNames('comment-footer', {
                                        'mb-3': post.comments && post.comments!.length > 0,
                                        'pt-2': post.content.media,
                                    })}
                                >
                                    <Link to="#">
                                        <i className="far fa-thumbs-up" />
                                    </Link>
                                    <Link to="#">
                                        <i className="far fa-thumbs-down" />
                                    </Link>
                                    <Link to="#">Reply</Link>
                                </div>
                                {(post.comments || []).map((comment, index) => {
                                    return (
                                        <div
                                            className={classNames('d-flex', 'align-items-top', {
                                                'mb-2':
                                                    post.comments &&
                                                    post.comments!.length > 0 &&
                                                    index < post.comments.length - 1,
                                            })}
                                            key={index.toString()}
                                        >
                                            <img
                                                src={comment.avatar}
                                                alt="avatar"
                                                className="flex-shrink-0 comment-avatar avatar-sm rounded me-2"
                                            />
                                            <div className="flex-grow-1">
                                                <h5 className="mt-0">
                                                    <Link to="#" className="text-dark">
                                                        {comment.name}
                                                        <small className="ms-1 text-muted">{comment.time}</small>
                                                    </Link>
                                                </h5>
                                                <p>{comment.content.message}</p>
                                                <div
                                                    className={classNames('comment-footer', {
                                                        'mb-3': comment.replies && comment.replies!.length > 0,
                                                    })}
                                                >
                                                    <Link to="#">
                                                        <i className="far fa-thumbs-up" />
                                                    </Link>
                                                    <Link to="#">
                                                        <i className="far fa-thumbs-down" />
                                                    </Link>
                                                    <Link to="#">Reply</Link>
                                                </div>
                                                {(comment.replies || []).map((reply, index) => {
                                                    return (
                                                        <div
                                                            className={classNames('d-flex', 'align-items-top', {
                                                                'mb-2':
                                                                    comment.replies &&
                                                                    comment.replies!.length > 0 &&
                                                                    index === comment.replies.length - 1,
                                                            })}
                                                            key={index.toString()}
                                                        >
                                                            <img
                                                                src={reply.avatar}
                                                                alt="avatar"
                                                                className="flex-shrink-0 comment-avatar avatar-sm rounded me-2"
                                                            />
                                                            <div className="flex-grow-1">
                                                                <h5 className="mt-0">
                                                                    <Link to="#" className="text-dark">
                                                                        {reply.name}
                                                                        <small className="ms-1 text-muted">
                                                                            {reply.time}
                                                                        </small>
                                                                    </Link>
                                                                </h5>
                                                                <p>{reply.content.message}</p>
                                                                <div className="comment-footer">
                                                                    <Link to="#">
                                                                        <i className="far fa-thumbs-up" />
                                                                    </Link>
                                                                    <Link to="#">
                                                                        <i className="far fa-thumbs-down" />
                                                                    </Link>
                                                                    <Link to="#">Reply</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
                <div className="text-center">
                    <Link to="#" className="text-danger">
                        <i className="mdi mdi-spin mdi-loading me-1"></i> Load more
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CommentBox;

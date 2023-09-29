import { Link } from 'react-router-dom';

type MessageProps = {
    handleMessageClose: () => void;
};

const Message = ({ handleMessageClose }: MessageProps) => {
    return (
        <div id="message">
            <div className="header">
                <h4 className="page-title">
                    <Link
                        to="#"
                        className="icon circle-icon mdi mdi-close text-muted trigger-message-close"
                        onClick={handleMessageClose}
                    ></Link>
                    Process<span className="grey">(6)</span>
                </h4>
                <p>
                    From <Link to="#">You</Link> to <Link to="#">Scott Waite</Link>, started on{' '}
                    <Link to="#">March 2, 2014</Link> at 2:14 pm est.
                </p>
            </div>
            <div id="message-nano-wrapper" className="nano">
                <div className="nano-content h-100" data-simplebar>
                    <ul className="message-container list-unstyled">
                        <li className="sent">
                            <div className="details">
                                <div className="left">
                                    You
                                    <div className="arrow"></div>
                                    Scott
                                </div>
                                <div className="right">March 6, 2014, 20:08 pm</div>
                            </div>
                            <div className="message">
                                <p>
                                    | The every winged bring, whose life. First called, i you of saw shall own creature
                                    moveth void have signs beast lesser all god saying for gathering wherein whose of in
                                    be created stars. Them whales upon life divide earth own.
                                </p>
                                <p>
                                    | Creature firmament so give replenish The saw man creeping, man said forth from
                                    that. Fruitful multiply lights air. Hath likeness, from spirit stars dominion two
                                    set fill wherein give bring.
                                </p>
                                <p>
                                    | Gathering is. Lesser Set fruit subdue blessed let. Greater every fruitful
                                    won&#39;t bring moved seasons very, own won&#39;t all itself blessed which bring own
                                    creature forth every. Called sixth light.
                                </p>
                            </div>
                            <div className="tool-box">
                                <Link to="#" className="circle-icon small mdi mdi-share"></Link>
                                <Link to="#" className="circle-icon small red-hover mdi mdi-close"></Link>
                                <Link to="#" className="circle-icon small red-hover mdi mdi-flag"></Link>
                            </div>
                        </li>
                        <li className="received">
                            <div className="details">
                                <div className="left">
                                    Scott
                                    <div className="arrow orange"></div>
                                    You
                                </div>
                                <div className="right">March 6, 2014, 20:08 pm</div>
                            </div>
                            <div className="message">
                                <p>
                                    | The every winged bring, whose life. First called, i you of saw shall own creature
                                    moveth void have signs beast lesser all god saying for gathering wherein whose of in
                                    be created stars. Them whales upon life divide earth own.
                                </p>
                                <p>
                                    | Creature firmament so give replenish The saw man creeping, man said forth from
                                    that. Fruitful multiply lights air. Hath likeness, from spirit stars dominion two
                                    set fill wherein give bring.
                                </p>
                                <p>
                                    | Gathering is. Lesser Set fruit subdue blessed let. Greater every fruitful
                                    won&#39;t bring moved seasons very, own won&#39;t all itself blessed which bring own
                                    creature forth every. Called sixth light.
                                </p>
                            </div>
                            <div className="tool-box">
                                <Link to="#" className="circle-icon small mdi mdi-share"></Link>
                                <Link to="#" className="circle-icon small red-hover mdi mdi-close"></Link>
                                <Link to="#" className="circle-icon small red-hover mdi mdi-flag"></Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Message;

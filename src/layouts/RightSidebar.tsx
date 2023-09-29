import { useCallback, useEffect, useRef } from 'react';
import { Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// actions
import { hideRightSidebar } from '../redux/actions';

// hooks
import { useRedux } from '../hooks/';

// components
import Scrollbar from '../components/Scrollbar';
import ThemeCustomizer from '../components/ThemeCustomizer';

const RightSidebar = () => {
    const { dispatch, appSelector } = useRedux();
    const rightBarNodeRef: any = useRef(null);

    const { isOpenRightSideBar } = appSelector((state) => ({
        isOpenRightSideBar: state.Layout.isOpenRightSideBar,
    }));

    /**
     * Handles the close
     */
    const handleClose = (e: any) => {
        e.preventDefault();
        dispatch(hideRightSidebar());
    };

    /**
     * Handle the click anywhere in doc
     */
    const handleOtherClick = useCallback(
        (e: any) => {
            if (isOpenRightSideBar) {
                if (rightBarNodeRef && rightBarNodeRef.current && rightBarNodeRef.current.contains(e.target)) {
                    return;
                } else {
                    dispatch(hideRightSidebar());
                }
            }
        },
        [rightBarNodeRef, dispatch, isOpenRightSideBar]
    );

    useEffect(() => {
        document.addEventListener('mousedown', handleOtherClick, false);
        return () => {
            document.removeEventListener('mousedown', handleOtherClick, false);
        };
    }, [handleOtherClick]);

    return (
        <>
            <div className="right-bar" ref={rightBarNodeRef}>
                <Scrollbar style={{ maxHeight: '100%', zIndex: 10000 }} className="h-100">
                    <div className="rightbar-title">
                        <Link to="#" className="right-bar-toggle float-end" onClick={handleClose}>
                            <i className="mdi mdi-close"></i>
                        </Link>
                        <h4 className="font-16 m-0 text-white">Theme Customizer</h4>
                    </div>

                    <Tab.Content className="pt-0">
                        <Tab.Pane active eventKey="themecustomizer">
                            <ThemeCustomizer />
                        </Tab.Pane>
                    </Tab.Content>
                </Scrollbar>
            </div>
            <div className="rightbar-overlay"></div>
        </>
    );
};

export default RightSidebar;

// hooks
import { usePageTitle } from '../../hooks';

const Starter = () => {
    // set pagetitle
    usePageTitle({
        title: 'Starter',
        breadCrumbItems: [
            {
                path: '/pages/starter',
                label: 'Extra Pages',
            },
            {
                path: '/pages/starter',
                label: 'Starter',
                active: true,
            },
        ],
    });

    return <></>;
};

export default Starter;

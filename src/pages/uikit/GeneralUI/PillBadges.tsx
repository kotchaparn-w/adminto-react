import { Badge, Card } from 'react-bootstrap';
import classNames from 'classnames';

// types
import { Variant } from './types';

type PillBadgesProps = {
    variants: Variant[];
};

type BadgesVariant = Variant;

const PillBadges = ({ variants }: PillBadgesProps) => {
    const pillBadges: BadgesVariant[] = [...variants];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Pill Badges</h4>
                <p className="sub-header">
                    Use the <code>.rounded-pill</code> modifier class to make badges more rounded.
                </p>

                {(pillBadges || []).map((color, index) => {
                    return (
                        <Badge
                            pill
                            bg=""
                            className={classNames('me-1', 'bg-' + color, color === 'light' ? 'text-dark' : null)}
                            key={index.toString()}
                        >
                            {color!.charAt(0).toUpperCase() + color!.slice(1)}
                        </Badge>
                    );
                })}

                <h5 className="mt-4">Soft Badges</h5>
                <p className="sub-header">
                    Use the <code>.badge-soft-*</code> modifier class to make badges lighten.
                </p>

                {(pillBadges || []).map((color, index) => {
                    return (
                        <Badge pill bg="" className={classNames('me-1', 'badge-soft-' + color)} key={index.toString()}>
                            {color!.charAt(0).toUpperCase() + color!.slice(1)}
                        </Badge>
                    );
                })}

                <h5 className="mt-4">Outline Badges</h5>
                <p className="sub-header">
                    Using the <code>.badge-outline-*</code> to quickly create a bordered badges.
                </p>

                {(pillBadges || []).map((color, index) => {
                    return (
                        <Badge
                            bg=""
                            pill
                            className={classNames('me-1', 'badge-outline-' + color)}
                            key={index.toString()}
                        >
                            {color!.charAt(0).toUpperCase() + color!.slice(1)}
                        </Badge>
                    );
                })}
            </Card.Body>
        </Card>
    );
};

export default PillBadges;

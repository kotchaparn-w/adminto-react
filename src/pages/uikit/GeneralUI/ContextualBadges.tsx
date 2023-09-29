import { Badge, Card } from 'react-bootstrap';
import classNames from 'classnames';

// types
import { Variant } from './types';

type ContextualBadgesProps = {
    variants: Variant[];
};

type BadgesVariant = Variant;

const ContexualBadges = ({ variants }: ContextualBadgesProps) => {
    const contexualBadges: BadgesVariant[] = [...variants];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Contexual variations</h4>
                <p className="sub-header">
                    Add any of the below mentioned modifier classes to change the appearance of a badge. Badge can be
                    more contextual as well. Just use regular convention e.g. <code>bg-*color</code> to have badge with
                    different background.
                </p>

                {(contexualBadges || []).map((color, index) => {
                    return (
                        <Badge
                            className={classNames(
                                'me-1',
                                'badge',
                                'bg-' + color,
                                color === 'light' ? 'text-dark' : null
                            )}
                            bg=""
                            key={index.toString()}
                        >
                            {color!.charAt(0).toUpperCase() + color!.slice(1)}
                        </Badge>
                    );
                })}

                <h5 className="mt-4">Soft Badges</h5>
                <p className="sub-header">
                    Using the <code>.badge-soft-*</code> modifier class, you can have more soften variation.
                </p>

                {(contexualBadges || []).map((color, index) => {
                    return (
                        <Badge className={classNames('me-1', 'badge-soft-' + color)} bg="" key={index.toString()}>
                            {color!.charAt(0).toUpperCase() + color!.slice(1)}
                        </Badge>
                    );
                })}

                <h5 className="mt-4">Outline Badges</h5>
                <p className="sub-header">
                    Using the <code>.badge-outline-*</code> to quickly create a bordered badges.
                </p>

                {(contexualBadges || []).map((color, index) => {
                    return (
                        <Badge bg="" className={classNames('me-1', 'badge-outline-' + color)} key={index.toString()}>
                            {color!.charAt(0).toUpperCase() + color!.slice(1)}
                        </Badge>
                    );
                })}
            </Card.Body>
        </Card>
    );
};

export default ContexualBadges;

import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

// hooks
import { usePageTitle } from '../../../hooks';

// components
import LightBox from './LightBox';

// types
import { GalleryItem, Image } from './types';

// dummy data
import { gallery as data } from './data';

const Gallery = () => {
    // set pagetitle
    usePageTitle({
        title: 'Gallery',
        breadCrumbItems: [
            {
                path: '/pages/gallery',
                label: 'Extra Pages',
            },
            {
                path: '/pages/gallery',
                label: 'Gallery',
                active: true,
            },
        ],
    });

    const [gallery, setGallery] = useState<GalleryItem[]>(data);
    const [category, setCategory] = useState<string>('all');
    const [galleryImages, setGalleryImages] = useState<Image[]>(
        (data || []).map((album) => {
            return album.image;
        })
    );
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [photoIndex, setPhotoIndex] = useState<number>(0);

    /**
     * filter images by category
     * @param category category
     */
    const filterImages = (category: string) => {
        setCategory(category);
        setTimeout(() => {
            const galleryAlbums =
                category === 'all' ? data : data.filter((album) => album.category?.includes(category));
            setGallery(galleryAlbums);
            setGalleryImages(
                (galleryAlbums || []).map((album) => {
                    return album.image;
                })
            );
        }, 300);
    };

    /*
     * handle lightbox events
     */
    const openLightbox = (index: number) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
    };

    const moveNext = () => {
        setPhotoIndex((prevState) => (prevState + 1) % galleryImages.length);
    };

    const movePrev = () => {
        setPhotoIndex((prevState) => (prevState + galleryImages.length - 1) % galleryImages.length);
    };

    return (
        <>
            <Row>
                <Col lg={12}>
                    <div className="portfolioFilter">
                        <Link
                            to="#"
                            className={classNames('filter-menu-item', 'me-1', {
                                current: category === 'all',
                            })}
                            onClick={() => filterImages('all')}
                        >
                            All
                        </Link>
                        <Link
                            to="#"
                            className={classNames('filter-menu-item', 'me-1', {
                                current: category === 'natural',
                            })}
                            onClick={() => filterImages('natural')}
                        >
                            Natural
                        </Link>
                        <Link
                            to="#"
                            className={classNames('filter-menu-item', 'me-1', {
                                current: category === 'creative',
                            })}
                            onClick={() => filterImages('creative')}
                        >
                            Creative
                        </Link>
                        <Link
                            to="#"
                            className={classNames('filter-menu-item', 'me-1', {
                                current: category === 'personal',
                            })}
                            onClick={() => filterImages('personal')}
                        >
                            Personal
                        </Link>
                        <Link
                            to="#"
                            className={classNames('filter-menu-item', 'me-1', {
                                current: category === 'photography',
                            })}
                            onClick={() => filterImages('photography')}
                        >
                            Photography
                        </Link>
                    </div>
                </Col>
            </Row>

            <div className="port mb-2 mt-4">
                <Row className="portfolioContainer">
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
                        <Masonry gutter="1.5rem">
                            {(gallery || []).map((item, index) => {
                                return (
                                    <React.Fragment key={index.toString()}>
                                        <div className="gal-detail thumb mt-0">
                                            <Link
                                                to="#"
                                                className="image-popup"
                                                title={item.image!.caption}
                                                onClick={() => openLightbox(index)}
                                            >
                                                <img src={item.image!.src} alt="" className="thumb-img img-fluid" />
                                            </Link>

                                            <div className="text-center">
                                                <h4>{item.title}</h4>
                                                <p className="font-13 text-muted mb-2">
                                                    {(item.category || [])
                                                        .map((category, index) => {
                                                            return (
                                                                category.charAt(0).toUpperCase() + category!.slice(1)
                                                            );
                                                        })
                                                        .join(', ')}
                                                </p>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                );
                            })}
                        </Masonry>
                    </ResponsiveMasonry>
                </Row>
            </div>
            {/* image lightbox */}
            {isOpen && (
                <LightBox
                    images={galleryImages}
                    photoIndex={photoIndex}
                    closeLightbox={closeLightbox}
                    moveNext={moveNext}
                    movePrev={movePrev}
                />
            )}
        </>
    );
};

export default Gallery;

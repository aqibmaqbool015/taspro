import { Modal } from 'react-bootstrap';

function CategoryModal({ show, onHide, categories }) {
    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>All Categories</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex flex-wrap gap-3">
                    {categories?.map((category, index) => (
                        <div
                            key={index}
                            style={{
                                flex: '0 0 calc(33.333% - 16px)',
                                marginBottom: '16px',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            className={category.className}
                        >
                            <span className={category.spanClass}>
                                <img src={category.icon} className="img-fluid" style={{ height: '120px', objectFit: 'contain' }} />
                            </span>
                            <p className="mt-2 listing-card-label-paragraph">{category.name}</p>
                        </div>
                    ))}
                </div>
            </Modal.Body>
        </Modal>
    );
}


export default CategoryModal;
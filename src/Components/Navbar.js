import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Css/Navbar.css';


const Navbar = ({ searchData }) => {
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState(searchData);
    const handleSearch = event => {
        const searchQuery = event.target.value;
        setQuery(searchQuery);

        const filteredResults = searchData.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (filteredData.length > 0) {
            setFilteredData(filteredResults);
        } else {

        }
    };

    return (
        <>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-lg px-1 px-md-2 px-lg-5 border-secondary border-opacity-25 border-1">
                            <div className="container-fluid">
                                <Link to="/" className="navbar-brand text-uppercase border-0">mason garments</Link>
                                <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto ms-5">
                                        <li className="nav-item">
                                            <Link to="/Men" className="nav-link" role="button">Men</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Women" className="nav-link">Women</Link>
                                        </li>
                                        <li className="nav-item"><Link to="/Accessories" className="nav-link">Accessories</Link></li>
                                        <li className="nav-item"><Link to="/Craftmanship" className="nav-link">Craftmanship</Link></li>
                                    </ul>
                                    <form className="d-flex" role="search">
                                        <li className="nav-item list-unstyled mx-3 fs-6"><Link className="nav-link" to="/Lodge">The Lodge</Link></li>
                                        <li className="nav-item list-unstyled mx-2 fs-6"><Link className="nav-link" to="/Login"><i className="bi bi-person-fill"></i></Link></li>
                                        <li className="nav-item list-unstyled mx-2 fs-6"><Link className="nav-link" to="" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="bi bi-search"></i></Link></li>
                                        <li className="nav-item list-unstyled mx-2 fs-6"><Link className="nav-link" to="" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><i className="bi bi-bag-fill"></i></Link></li>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title text-uppercase" id="exampleModalLabel">Search Products</p>
                            <button type="button" className="btn-close btn-c shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-0">
                            <input type='search' className='form-check border-0 p-4 input' onChange={handleSearch} value={query} placeholder='Search for...' />
                            <div className='container-fluid'>
                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 py-5 px-1 px-md-3 px-lg-2 g-1">
                                    {filteredData.map((cards, index) => {
                                        return (
                                            <div className='col'>
                                                <div class="card border-0 rounded-0 search-card position-relative" key={index}>
                                                    <img src={cards.url} class="img-fluid h-100 w-100 z-0 object-fit-cover position-absolute top-0 start-0" alt="..." />
                                                    <div className='icon'>
                                                        <i class="bi bi-plus"></i>
                                                    </div>
                                                    <div class="card-body w-100 d-flex align-items-center justify-content-between position-absolute bottom-0 px-2 py-0">
                                                        <p class="card-title" style={{ fontSize: ".6rem" }}>{cards.name}</p>
                                                        <Link to="" class="btn stretched-link" style={{ fontSize: ".6rem" }}>&#8377; {cards.price}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            {/* OffCanvas */}

            <div className="offcanvas header-canvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header border-bottom border-secondary border-opacity-25">
                    <p className="offcanvas-title text-uppercase" id="offcanvasExampleLabel">shopping bag</p>
                    <button type="button" className="btn-close text-reset shadow-none btn-c" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>

                    </div>
                </div>
            </div>

            <Outlet />

        </>
    )
}

export default Navbar
import CardItem from '../components/CardItem';
import Information from '../components/Information';
import { useState } from 'react';

function ShoppingCart() {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'IPhone 11 Pro Max',
      avatar: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp',
      detail: '256GB, Navy Blue',
      quantity: 2,
      price: 900,
    },
    {
      id: 2,
      name: 'IPhone 11 Pro Max',
      avatar: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp',
      detail: '256GB, Navy Blue',
      quantity: 2,
      price: 1200,
    },
    {
      id: 3,
      name: 'IPhone 11 Pro Max',
      avatar: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp',
      detail: '256GB, Navy Blue',
      quantity: 2,
      price: 800,
    },
    {
      id: 4,
      name: 'IPhone 11 Pro Max',
      avatar: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp',
      detail: '256GB, Navy Blue',
      quantity: 2,
      price: 500,
    },
  ]);
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: '#eee' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-lg-7">
                    <h5 className="mb-3">
                      <a href="#!" className="text-body">
                        <i className="fas fa-long-arrow-alt-left me-2" />
                        Continue shopping
                      </a>
                    </h5>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">You have 4 items in your cart</p>
                      </div>
                      <div>
                        <p className="mb-0">
                          <span className="text-muted">Sort by:</span>{' '}
                          <a href="#!" className="text-body">
                            price <i className="fas fa-angle-down mt-1" />
                          </a>
                        </p>
                      </div>
                    </div>
                    {data.map((item) => (
                      <CardItem key={item.id} item={item} />
                    ))}
                  </div>
                  <Information />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShoppingCart;

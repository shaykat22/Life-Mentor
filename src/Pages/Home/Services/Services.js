import React, { useEffect, useState } from 'react';
import { CardGroup, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div id='services'>
            <h2 className='text-center my-4'>Our Services</h2>
            <CardGroup>
                <Row xs={1} md={3} lg={3} className="g-4">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </CardGroup>
        </div>

    );
};

export default Services;
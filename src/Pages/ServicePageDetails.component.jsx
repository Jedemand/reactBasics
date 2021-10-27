import ButtonComponent from "../Button.component";


const ServicePageDetails = (props) => {
    console.log('service details: ', props);
    return ( 
        <div>
            <h1> Service Details Page</h1>
            <h2> Your Service Id number is: {props.params.serviceId}</h2>
            <button onClick={() => props.history.push('/services')}>Back to Services</button>
            <ButtonComponent/> 
        </div>
     );
}
 
export default ServicePageDetails;
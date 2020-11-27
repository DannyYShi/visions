import React, { useState, useContext } from 'react';
import { Context } from '../CartContext';
import emailjs from 'emailjs-com';
import './OrderForm.css';
import config from '../config'

export default function OrderForm() {
    const { cartItems, total, resetCart } = useContext(Context);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    let message = cartItems.map(item =>
        `Item: ${item.item_name}, Price: $${item.item_price}, Quantity: ${item.count}`).join('\n\n')
        + '\n\n' + `Total cost: $${total}`;

    const postData = async (url = config.ORDERS_ENDPOINT, data = {}) => {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        return response.json();
    };

    function resetForm() {
        setName('');
        setEmail('');
        setText('');
    };

    function sendEmail(e) {
        let templateParams = {
            name: name,
            email: email,
            message: message,
        };

        e.preventDefault();

        postData(config.ORDERS_ENDPOINT, {
            'customer_name': name,
            'customer_email': email,
            'total_price': total,
            'order_summary': message
        })

        emailjs.send('service_fgqcamc', 'template_b04co1o', templateParams, 'user_Wohzm5sc0sqQWTWLYWy1Z')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Thank you for shopping with us! Please check your email for your order details. Your items will be shipped to you soon!')
                resetCart()
                resetForm()
            }, function (error) {
                console.log('FAILED...', error);
                alert('Oops, something went wrong! Please try again.')
            });
    };



    return (
        <div className='checkout-page'>
            <h1 className='page-header'>Checkout</h1>
            <form className="order-form" onSubmit={sendEmail}>
                <div className='form-input'>
                    <label>Name:
                        <br />
                        <input
                            className='form-label'
                            required
                            value={name}
                            type='text'
                            onChange={(e) => {
                                setName(e.target.value);
                            }} />
                    </label>
                </div>

                <div className='form-input'>
                    <label>Email address:
                        <br />
                        <input
                            className='form-label'
                            required
                            value={email}
                            type='email'
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }} />
                    </label>
                </div>

                <div className='form-input'>
                    <label>Questions, comments, or concerns:
                        <br />
                        <textarea
                            className='form-label'
                            value={text}
                            type='text'
                            placeholder='Please enter any comments, questions, or concerns.'
                            onChange={(e) => {
                                setText(e.target.value)
                            }} />
                    </label>
                </div>
                <button type='submit'>
                    Place Order
                </button>
            </form>
        </div>
    )
}
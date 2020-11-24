import React, { useState, useContext } from 'react'
import { Context } from '../CartContext';
import emailjs from 'emailjs-com';
import './OrderForm.css'

export default function OrderForm() {
    const { cartItems, total, resetCart } = useContext(Context)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')

    let message = cartItems.map(item =>
        `Item: ${item.item_name}, Price: $${item.item_price}, Quantity: ${item.count}`).join('\n\n')
        + '\n\n' + `Total cost: $${total}`;

    function resetForm() {
        setName('')
        setEmail('')
        setText('')
    }

    function sendEmail(e) {
        let templateParams = {
            name: name,
            email: email,
            message: message,
        }

        e.preventDefault()

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
    }



    return (
        <div className='checkout-page'>
            <h1 className='page-header'>Checkout</h1>
            <form className="order-form" onSubmit={sendEmail}>
                <div className='form-input'>
                    <label>Name:</label>
                    <input
                        className='form-label'
                        required
                        value={name}
                        type='text'
                        onChange={(e) => {
                            setName(e.target.value);
                        }} />
                </div>

                <div className='form-input'>
                    <label>Email address:</label>
                    <input
                        className='form-label'
                        required
                        value={email}
                        type='email'
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                </div>

                <div className='form-input'>
                    <label>Questions, comments, or concerns:</label>
                    <textarea
                        className='form-label'
                        value={text}
                        type='text'
                        placeholder='Please enter any comments, questions, or concerns.'
                        onChange={(e) => {
                            setText(e.target.value)
                        }} />
                </div>
                <button type='submit'>
                    Place Order
                </button>
            </form>
        </div>
    )
}
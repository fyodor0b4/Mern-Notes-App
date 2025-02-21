import React from 'react'
import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

export default function Signup() {

    const [email,setEmail] = useState('')
    const [parola,setParola] = useState('')

    const {signup,yukleniyor,hata} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault();

        //console.log(email,parola)

        await signup(email,parola)
    }


    return (
        <form className='signup' onSubmit={handleSubmit}>
            <h3>Üye Ol</h3>
            <label>Email:</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} />

            <label>Parola:</label>
            <input type="password" onChange={(e)=>setParola(e.target.value)} />

            <button disabled={yukleniyor} type='submit'>Üye Ol</button>
            {hata && <div className='error'>{hata}</div>}
        </form>
    )
}
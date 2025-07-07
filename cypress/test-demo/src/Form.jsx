import { useState } from "react"

function Form(){
    const [success,setSuccess]=useState(false)

    function handleSubmit(e){
        e.preventDefault()
        setSuccess(true)
    }
    return(
        <>
        <h1>Form Here!</h1>
        <div>
            <form onSubmit={handleSubmit}>
                <input name='name' type="text" placeholder="type name here ..."/>
                <input name='email' type="email" placeholder="test@test.com"/>
                <button type="submit">Submit</button>
            </form>
        </div>
        {success && <p>Thank you</p>}
        </>
    )
}


export default Form
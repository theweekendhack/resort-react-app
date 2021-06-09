import React,{useState} from 'react'

const RegistrationForm = () => 
{

    //ASK THIS AS AN EXAM QUESTION FOR THUSRDAY!!! 

    /*
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [paswword, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");



    */


    //WHY DO I NEED TO TIE MY STATE TO MY FORM CONTROL VALUES???? THIS SEEMS LIKE TOO MUCH BACCHANAL


    
    const [user, setUser] = useState({
        firstName:"",
        lastName : "",
        email : "",
        password : "",
        cpassword :""
    })


    const createUser = (evt)=>{


        //This prevents my form from being submitted(Removes the jumping effect)
        evt.preventDefault(); 

        
        fetch("http://localhost:5000/users",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body : JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(()=>{

            alert(`${user.firstName} ${user.lastName}, your record was successfully added to the database`)
            

            setUser({
                firstName:"",
                lastName : "",
                email : "",
                password : "",
                cpassword :""
            })
        })



    }


    return (
        <section id="register-section">

        <div className= "container">

            <h1>Register</h1>

            <form onSubmit={createUser}>

                <div className="form-control">
                    <label htmlFor="firstName">First Name</label>

                    <input type="text" id="firstName" value={user.firstName} onChange={(e)=>{
                    
                        setUser({...user,firstName:e.target.value}) 
                    }}    />
                </div>

                <div className="form-control">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" value={user.lastName} onChange={(e)=>{

                        setUser({...user,lastName:e.target.value}) 
                    }}    />
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" value={user.email} onChange={(e)=>{


                    setUser({...user,email:e.target.value}) 
                    }}  />
                </div>


                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" value={user.password}  onChange={(e)=>{


                    setUser({...user,password:e.target.value}) 

                    }}  />
                </div>

                <div className="form-control">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input type="text" id="cpassword" value={user.cpassword} onChange={(e)=>{

                    setUser({...user, cpassword:e.target.value}) 

                    }}  />
                </div>


                <div className="form-control">
                    <button class="btn" type="submit">Create Account</button>
                </div>

            </form>

        </div>
    </section>
    )
}

export default RegistrationForm

import React, {useState} from 'react';
import apifake from '../../services/falseapi';
import '../Cadastro/style.css';



export default function Cadastro() {


    const[datas, setDatas] = useState({}); 


    const handlechange = (e) =>{


        const auxData = {...datas};
        auxData[e.target.name] = e.target.value;
        setDatas(auxData);
        

    }
 

    const handleSubmit = async (e) =>{

        e.preventDefault();

        try {

            if(datas.name === "" || datas.lastname === "" || datas.email === "" || datas.password === ""){
                throw new Error("Não pode existir campos vazios") 

            }

            if(datas.name.length < 3 || datas.lastName.length < 3 || datas.email.length < 3 || datas.password.length < 3){
                throw new Error("Existem campos com valores inferiores que 3 Caracteres"); 

            }


        

            await apifake.post('/api/register', 
            
                {
                    email: datas.email, 

                    password: datas.password


                }
                
                
            ).then( resp => {

                console.log(resp.data);
                alert("Cadastro Realizado com Sucesso!!");


              

            })                
                
        } catch (error) {
            console.log("mensagem não enviada", error);
        }



    };




  







        
    




    return (
    <div className="divCadastro">

        <div className="boxComponent">

            <form onSubmit={handleSubmit}>

            <p>First Name:</p>
            <input onChange={handlechange} type="text" name="name" placeholder="Name"></input>
            <p>Last Name</p>
            <input onChange={handlechange} type="text" name="lastName" placeholder="Last Name"></input> 
            <p>E-mail:</p>
            <input onChange={handlechange} type="text" name="email" placeholder="E-mail"></input>
            <p>Password:</p>
            <input onChange={handlechange} type="text" name="password" placeholder="Password"></input>
            <button className="btnCadastrar" type="submit">Cadastrar</button>        
            </form> 

        </div>
        
    </div>
  );
}


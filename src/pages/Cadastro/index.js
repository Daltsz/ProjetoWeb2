import React, {useState} from 'react';
import apifake from '../../services/falseapi';
import '../Cadastro/style.css';



export default function Cadastro() {


    const[datas, setDatas] = useState({}); 
    const[error, setError] = useState([]);
    const[success, setSuccess]= useState('');


    const handlechange = (e) =>{


        const auxData = {...datas};
        auxData[e.target.name] = e.target.value;
        setDatas(auxData);
        

    }
 

    const handleSubmit = async (e) =>{

        e.preventDefault();
        

        try {

           

            if(datas.name === "" || datas.lastName === "" || datas.email === "" || datas.password === ""){

                setError("Campos Vazios Não São Permitidos")
                return                    
                    

            }


            if(datas.name === undefined || datas.lastName === undefined || datas.email === undefined || datas.password === undefined){

                setError("Campos Vazios Não São Permitidos")
                return                    
                    

            }



            if(datas.name.length < 3 || datas.lastName.length < 3 || datas.email.length < 3 || datas.password.length < 3){
                setError("Existem campos com valores inferiores há 3 Caracteres")
                return    

            }





        

            await apifake.post('/api/register', 
            
                {
                    email: datas.email, 

                    password: datas.password


                }
                
                
            ).then( resp => {

                console.log(resp.data);

            });
            
            setSuccess("Cadastro Realizado com Sucesso!!");

            setTimeout(function(){

                window.location = 'http://localhost:3000/#/';
            
            
            },3000);
                
        } catch (error) {
            setError("Erro ao Enviar, Valores Invalidos")
            return
        }



    };




  







        
    




    return (
    <div className="divCadastro">

        <div className="boxComponent">

            <form className="formName" onSubmit={handleSubmit}>
                
                <p>First Name:</p>
                <input onChange={handlechange} type="text" name="name" placeholder="Name"></input>
                <p>Last Name</p>
                <input onChange={handlechange} type="text" name="lastName" placeholder="Last Name"></input> 
                <p>E-mail:</p>
                <input onChange={handlechange} type="text" name="email" placeholder="E-mail"></input>
                <p>Password:</p>
                <input onChange={handlechange} type="password" name="password" placeholder="Password"></input>
                <button className="btnCadastrar" type="submit">Cadastrar</button>
                {error && <span className="errorStyle">{error}</span>}  
                {success && <span className="sucStyle">{success}</span>}
            </form> 
            

        </div>

        
        
    </div>
  );
}


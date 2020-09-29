import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import apifake from '../../services/falseapi';
import api from '../../services/api';
import "../Home/style.css";

export default function Home() {

  
  const[datas, setDatas] = useState({}); 
  const[value, setValue] = useState('');
  const[sentimentos, setSentimentos] = useState('');
  const[resposta, setResposta] = useState('');
  const[error, setError ] = useState([]);
  const[success, setSuccess]= useState('');
  const[message, setMessage] = useState('');

  const handlechange = (e) =>{


    const auxData = {...datas};
    auxData[e.target.name] = e.target.value;
    setDatas(auxData);
  } 




  useEffect(() =>{

    
    const getToken = localStorage.getItem("@bemVindo/user");

    setValue(getToken);


  }, []);



 
  const entrar = (e) =>{

      e.preventDefault();

      login();

  }








    async function  enviarAnalise(e) {

      e.preventDefault();

      try {

        const resp = await api.post('/api/v1/', 
          {

            text: sentimentos

          },{

            headers: {Accept: "application/json", "Content-Type": "application/json"},
          
          }
        
        );
        
        
        console.log(resposta)
        setResposta(resp.data.result);
        setMessage('Sentimento analisado com Sucesso');
        console.log(resposta);
    
        
      }catch (error) {
        
        console.log("Mensagem Não enviada", error);

      }

  }



  const logout = () =>{

      localStorage.removeItem("@bemVindo/user");

      window.location.reload();


  }





  const login = async () =>{
    
    try {


      if(datas.email === undefined || datas.password === undefined){

        setError("Campos Vazios Não São Permitidos")
        return

      }


      if(datas.email === "" || datas.password === ""){

          setError("Campos Vazios Não São Permitidos")
          return

        }

         


      

        const resp = await apifake.post('/api/login', 
          
              {
                  email: datas.email, 

                  password: datas.password


              }    
          )
          
        const token = resp.data.token;      
        
        localStorage.setItem('@bemVindo/user', token );

        console.log("event:", token );
        
        setSuccess("Seja Bem-Vindo! Login Realizado com Sucesso!!")
        

        setTimeout(function(){

          window.location.reload();
      
      
      },3000);

        
              
      } catch (error) {
          setError("Login ou Senha Invalidos", );
          return
      }
 
  }


 


  return (

    <> 
        
      { value !== null ? (

        <div className="divLogado">


            <button className="btnDeslogar"  onClick={logout}>Logout</button>


            
          <h1>SINTA-SE A VONTADE</h1>

          <form className="formLogado" onSubmit={enviarAnalise}>

            <textarea className="textArea" name="mensagem"  placeholder="Escreva o que passa em sua mente!!!" onChange={(e) => setSentimentos(e.target.value)}></textarea>

            <button className="btnTextArea" type="submit">Analizar</button>

            {message && <span className="message">{message}</span>}

          </form>

          <div className="divBoxAnswer">
            { 
              (resposta === '' )  ? <p></p> : <h1><span>{`${resposta.polarity} % ${resposta.type}`}</span></h1>

            } 
          </div>

          

        </div>

       ) : (

        <div className="divDeslogado">
          
          <div className="boxComponents">

            <form onSubmit={entrar}>

              <p>E-mail</p>
              <input onChange={handlechange} type="email" name="email" placeholder="E-mail"></input>
              <p>Password</p>
              <input onChange={handlechange} type="password" name="password" placeholder="Password"></input>

              <button className="btnLogin" type="submit" >Entrar!</button>          
              <Link className="Link" to="/cadastro">Cadastre-se</Link>
              {error && <span className="errorStyle2">{error}</span>}
              {success && <span className="sucStyleLogin">{success}</span>}
              
            </form>
          </div> 

        </div>
      )}


    </>
  );
}


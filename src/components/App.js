import React, { useState} from "react";
import '../styles/App.css';


const App = ()=> {
    const [ans,setAns]=useState("");
    const [str1,setStr1]=useState("");
    const [str2,setStr2]=useState("");
    
       const handleEvent1=(e)=>{
        setStr1(e.target.value);
       }

       const handleEvent2= (e)=>{
        setStr2(e.target.value);
       }
       
       const calculate=()=>{
         removeDuplicates(str1,str2);
       }

       const removeDuplicates=(firstName,secondName)=>{
          if(firstName==""|| secondName=="") return getRelation("&");
          const s1={};
          const s2={};
          let len1=0,len2=0;
          for(let char of firstName){
            s1[char]=(s1[char]||0)+1;
          }

          for (let char of secondName) {
            s2[char] = (s2[char] || 0) + 1;
          }

          for(let char in s1){
            if(s2[char]){
            const min=Math.min(s1[char],s2[char]);
            s1[char]-=min;
            s2[char]-=min;
            }
          }

          for (let char in s1) {
            len1+=s1[char];
          }
          for (let char in s2) {
            len2+=s2[char];
          }
          //console.log((len1+len2)%6);
          getRelation((len1+len2)%6);
       }

       const getRelation=(num)=>{
         switch(num){
             
            case 0 : 
              setAns("Siblings");
              break;
            case 1 : 
              setAns("Friends");
              break;
            case 2:
             setAns("Love");
             break;
            case 3:
                setAns("Affection");
                break;
            case 4:
                setAns("Marriage");
                break;
            case 5:
                setAns("Enemy");
                break;    
            default:
                setAns("Please Enter valid input")    
         }
       }

       const clear=()=>{
        setStr1("");
        setStr2("");
        setAns("");
       }

        return(
            <div id="main">
                <input data-testid="input1" type="text" name="name1" placeholder="First Name" onChange={handleEvent1} value={str1}/>
                <input data-testid="input2" type="text" name="name2" placeholder="Second Name" onChange={handleEvent2} value={str2}/>
                <button data-testid="calculate_relationship" onClick={calculate}>Calculate Relationship Future</button>
                <button data-testid="clear" onClick={clear} >Clear</button>
                <h3 data-testid="answer">{ans}</h3>
            </div>
        )
    
};


export default App;

// import React, {Component, useState} from 'react';
// import './App.css'
// import Web3 from 'web3';
// //import Tether from '../truffle_abis/Tether.json'// here we just bring up the contract.json which contains all the information about our contract and we call it further to gain access to that data

// class App extends Component {

//     async  UNSAFE_componentWillMount() {
//         await this.loadWeb3();
//         await this.loadBlockchainData();
//     }

//     async  loadWeb3() {
//     if(window.ethereum) {
//         window.web3 = new Web3(window.ethereum)// to check whether the browser has any account on the ethereum or not
//         await window.ethereum.enable()
//     } else if(window.web3) {
//         window.web3 = new Web3(window.web3.currentProvider)// The code assigns a new Web3 instance to the window.web3 object, using the current provider object set by a browser extension like Metamask.
//     }else {
//         window.alert("No ethereum browser detected: You can check out MetaMask")
//     }
// }
// // loading web3 in our react-app
//     async  loadBlockchainData() {
//         const web3 = window.web3;
//         const account = await web3.eth.getAccounts();// this just for fetching my account that I am using currently in the browser
//         this.setState({account: account[0]})// here we have used setState to initailize the account form the array of account which is created by the "web3.eth.getAccounts()"
//         console.log("here is my account"+account);
//         const networkId = await web3.eth.net.getId();// to get the networkId

//         //load randomContractName  contract to your app
//         //const tetherdata = Tether.networks[networkId];//but you can simply check that whether the contract is habing the above mentioned mentioned netwworkId or not? by just opening its JSON file in the "contract_abis"
     
//     }
// //The state property is a way for React components to manage their internal state, which determines how they are rendered and updated.

// // In this case, the component is initialized with an initial state of { account: '0x0' }, which means that the account property will initially be set to the string '0x0'. This state can be updated later by calling the setState method, which will trigger a re-render of the component.
//     constructor(props) {
//         super(props)
//         this.state = {
//             account: '0x0',// enertring random value for precerving the int type vacant variable to later use in mhy project 
//           //  tether: {},//creating empty objects for storing the object
//         }
//     }

//     render() {
//     return (
//         <>
//         <h1 className='text-center'>Jai mata di</h1>
           
//             </>  
//     )
//     }
// }

// export default App;


//testing part---
// import React, {Component, useState} from 'react';
// import './App.css'
// import Web3 from 'web3';
// import Voting from '../truffle_abis/voting.json'// here we just bring up the contract.json which contains all the information about our contract and we call it further to gain access to that data

// class App extends Component {



//     async  UNSAFE_componentWillMount() {
//                 await this.loadWeb3();
//                 await this.loadBlockchainData();
//             }
        
//             async  loadWeb3() {
//             if(window.ethereum) {
//                 window.web3 = new Web3(window.ethereum)// to check whether the browser has any account on the ethereum or not
//                 await window.ethereum.enable()
//             } else if(window.web3) {
//                 window.web3 = new Web3(window.web3.currentProvider)// The code assigns a new Web3 instance to the window.web3 object, using the current provider object set by a browser extension like Metamask.
//             }else {
//                 window.alert("No ethereum browser detected: You can check out MetaMask")
//             }
//         }
//         // loading web3 in our react-app
        
//             async  loadBlockchainData() {
//                 const web3 = window.web3;
//                 const account = await web3.eth.getAccounts();// this just for fetching my account that I am using currently in the browser
//                 this.setState({account: account[0]})// here we have used setState to initailize the account form the array of account which is created by the "web3.eth.getAccounts()"
//                 console.log("here is my account"+account);
//                 const networkId = await web3.eth.net.getId();// to get the networkId
//                // to get the networkId
//                 console.log(`network id is ${networkId}`);
        
//                 //load Voting  contract to your app
             
//                 const votingData = Voting.networks[networkId];//but you can simply check that whether the contract is habing the above mentioned mentioned netwworkId or not? by just opening its JSON file in the "contract_abis"
//                 // console.log(votingData.address);
//                 if(votingData) {
//                     const voting = new web3.eth.Contract( Voting.abi, votingData.address )
                    
//                     //  console.log(votingData.address);
//                     this.setState({voting: voting});
//                     let counter = await voting.methods.counter().call();
//                     this.setState({counter: counter.toString() })
//                     console.log({counter: counter})
//                     // let person = await voting.methods.person.call();
//                     // this.setState({person: person})// problem that wether it willl be converted to string or not
                    
                    
//                 }
//                 else{
//                     console.log(`Error while loading the contract or either networkId has some Issues`)
//                 }


//                 this.setState({loading: false});
//              }
      
         
//         //The state property is a way for React components to manage their internal state, which determines how they are rendered and updated.
        
//         // In this case, the component is initialized with an initial state of { account: '0x0' }, which means that the account property will initially be set to the string '0x0'. This state can be updated later by calling the setState method, which will trigger a re-render of the component.
//         constructor(props) {
//                 super(props);
//                 this.state = {
//                     account: '0x0',// enertring random value for precerving the int type vacant variable to later use in mhy project 
//                    voting: {},//creating empty objects for storing the object
//                    counter:'0',
//                    person: 'false',
//                    loading: true
//                 }
//             }
        
//             render() {
                
//              let content;
                
//                 {this.state.loading ? content= <p id="loader" className='text-center' style={{margin:'30px'}} >Loading Please Wait....</p> : content= <div>
//                <p> <button style={{margin:'2rem',}}> Vote</button></p>
//                 <p><button  >count:  </button></p>
//                 <p> {this.props.counter}</p>
//                 <p>
//                 <button>{this.props.person} person</button>
//                 </p>
                

//             </div>}
//             return (
//                 <>
//                 <div className='container-fluid mt-6'> 
//                 <div className='row'>
//                     {content}
//                      </div>
//                 </div>
//                     </>  
//             )
//             }
//         }
        
//         export default App;
        
// import Voting from "../truffle_abis/voting.json"
// import React, { useState, useEffect } from "react";
// import Web3 from "web3";
// import "./App.css";

// function App() {
//   const [contract, setContract] = useState(null);
//   const [person, setPerson] = useState(false);
//   const [counter, setCounter] = useState(0);

//   // Load the contract on component mount
//   useEffect(() => {
//     const loadTheApp = async () => {
//       // Connect to Ethereum network
//       if (window.ethereum) {
//         await window.ethereum.enable();
//         const web3 = new Web3(window.ethereum);

//         // Load the network
//         const networkId = await web3.eth.net.getId();
//         const contractAddress=  Voting.networks[networkId].address;
//         const contractABI = Voting.abi;
//         const votingContract = new web3.eth.Contract(contractABI, contractAddress);

//         setContract(votingContract);
//       }
//     };

//     loadTheApp();
//   }, []);

//   // Handle the voting button click
//   const handleVoteClick = async () => {
//     try {
//       await contract.methods.Vote().send({ from: window.ethereum.selectedAddress });

//       // Update the state
//       const newCounter = await contract.methods.counter().call();
//       setCounter(parseInt(newCounter));

//       if (newCounter === "10") {
//         setPerson(true);
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Smart Contract Voting</h1>
//       <p>Counter: {counter}</p>
//       {person ? (
//         <p>The person has voted 10 times.</p>
//       ) : (
//         <button onClick={handleVoteClick}>Vote</button>
//       )}
//     </div>
//   );
// }

// export default App;




//      const contractAddress=  Voting.networks[5777].address;
// const contractABI = Voting.abi;
         

// try 14-04-23

// import React, {Component, useState} from 'react';
// import ReactDOM from 'react-dom';
// import './App.css'
// import Web3 from 'web3';                                                                                                                                                       
// import Voting from '../truffle_abis/voting.json'// here we just bring up the contract.json which contains all the information about our contract and we call it further to gain access to that data

// export default function App() {
//         var votingContract;
//         var userAccount;
       
//         var [votingContract, setVotingContract] = useState(undefined);
//         var [account, setAccount] = useState(undefined);
//         var [counting, setCounting] = useState(0);
//         var [reaction, setReaction] = useState(undefined);
//         var [person, setPersonStatus] = useState(undefined);




//         async function startApp(){
//                     if(window.ethereum){
//                        window.web3 = new Web3(window.ethereum);
//                        await window.ethereum.enable();     
//                     } else if(window.web3) {
//                          window.web3 = new Web3(window.web3.currentProvider)
//                     }else {
//                         console.log("No ethereum browser detected: You can check out MetaMask")
//                     }                
//                 }
//                 async function loadingBlockchainData() {
//                     await startApp();
//                     const web3= window.web3;
//                     userAccount = await web3.eth.getAccounts();// this is to get the connected account on the browser from the MetaMask
//                     setAccount(userAccount);
//                    const networkId = await web3.eth.net.getId();
//                    const votingData = Voting.networks[networkId];
                   
//                    //now loading our smart conntract
//                    if(votingData){
//                        var contractAddress= votingData.address;

//                        var voting = new web3.eth.Contract( Voting.abi, contractAddress );
//                        setVotingContract(voting);
//                    }
//                    else{
//                     console.log("your votingData is not loaded yet!!")
//                    }
//                 }
//                 // var permission
//                 // async function permToVote() {
//                 //     permission= await votingContract.methods.Vote().send({from : userAccount, gas: 3000000})
//                 //     .on('receipt', function (reciept){
//                 //             setReaction(`user have successfully voted`);
//                 //     }).on('error', function(error) {
//                 //         setReaction(`user vote isn't updated by the following error=> ${error}`)
//                 //     })
//                 // } 

//                        var counted;
//                 async function counter() {
//                     counted= await votingContract.methods.Vote().send({from : userAccount, gas: 3000000})
//                     .on('receipt', function (reciept){
//                             setReaction(`user have successfully voted`);
//                     }).on('error', function(error) {
//                         setReaction(`user vote isn't updated by the following error=> ${error}`)
//                     })
//                 } 
//                 var counting;
//                async function countingStatus() {
//                 counting= await votingContract.methods.counter().call();
//                 setCounting(counting);
//                }
                 
//                var personn;
//                async function personStatus() {
//                 personn = await votingContract.methods.n().call();
//                 setPersonStatus(personn)
//                }
    
//         return(
//             <div id='container'>
//             <h1>hello world</h1>
//             <h2>now get the right to vote by clicking the button below</h2>
//             <button onClick={loadingBlockchainData()}>vote</button>
//             <h2>counter</h2>
//             <button onClick={counter()}>counter</button>
//             <p id='txtStatus'> {reaction}</p>
//             <button onClick={countingStatus()}>Counting status</button>
//             <p id='countingStatusOnSite'> {counting}</p>
//             <button onClick={personStatus()}>person status</button>
//             <p id='personStatusOnSite'> {person}</p>
//             </div>
//         )
//  }





// import Voting from "../truffle_abis/voting.json"
// import React, { useState, useEffect } from "react";
// import Web3 from "web3";
// import "./App.css";

// function App() {
//     const [address, setAddress] = useState('0x0');
//   const [contract, setContract] = useState(null);
//   const [person, setPerson] = useState(false);
//   const [counter, setCounter] = useState(0);

//   // Load the contract on component mount
//   useEffect(() => {
//     const loadTheApp = async () => {
//       // Connect to Ethereum network
//       if (window.ethereum) {
//         await window.ethereum.enable();
//         const web3 = new Web3(window.ethereum);

//         // Load the network
//         const networkId = await web3.eth.net.getId();
//         console.log(`the networkId is => ${networkId}`)
//         const contractAddress=  Voting.networks[networkId].address;
//         setAddress(contractAddress);
//         const contractABI = Voting.abi;
//         const votingContract = new web3.eth.Contract(contractABI, contractAddress);

//         setContract(votingContract);
        
//       }
//     };  

//     loadTheApp();
//   }, []);
  

//   // Handle the voting button click
//   const handleVoteClick = async () => {
//     try {
//       await contract.methods.Vote().send({ from: window.ethereum.selectedAddress, gas: 3000000 });

//       // Update the state
//       const newCounter = await contract.methods.counter().call();
//       setCounter(parseInt(newCounter));
//     //   console.log(`counter is => `+counter)

//       if (newCounter === "13") {
//         setPerson(true);
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <>


//     <div className="App">
//       <h1>Smart Contract Voting</h1>
//       <p>Counter: {counter}</p>
//       {person ? (
//         <p>The person has voted 10 times.</p>
//       ) : (
//         <button onClick={handleVoteClick}>Vote</button>
//       )}
//     </div>
//     </>
//   );
// }

// export default App;



/// improved voting 

import Voting from "../truffle_abis/voting.json"
import React, { useState, useEffect } from "react";
import Web3 from "web3";
import "./App.css";
//start: 15:03
function App() {

  const [contract, setContract] = useState(null);
  const [countA, setCountA] = useState('0');
  const [countB, setCountB] = useState('0');
  const [countOfC, setCountOfC] = useState('0');
  const [result, setResult] = useState('result will be declared soon');
  const [account, setAccount] = useState('account will be updated soon');

  


  useEffect(() => {
        const loadTheApp = async () => {
          // Connect to Ethereum network
          if (window.ethereum) {
            await window.ethereum.enable();
            const web3 = new Web3(window.ethereum);

            ///getting the account
             
        const account = await web3.eth.getAccounts();
        setAccount(account[0]);
            // Load the network
            const networkId = await web3.eth.net.getId();
            const contractAddress=  Voting.networks[networkId].address.toString();// fetching the system from thi abis
            console.log(typeof contractAddress);
            console.log(web3.eth.accounts[0]);
            console.log(contractAddress)
            const contractABI = Voting.abi;
            console.log(`contractAbi is= `+contractABI)
            const votingContract = new web3.eth.Contract(contractABI, contractAddress);
            
            setContract(votingContract);
            
          }
        };  
        
        
        loadTheApp();
      }, []);
      console.log(`contract is => ${contract}`)
      
          let votea;
        
          async function votingOfA() {
            if(contract !== null) {
              votea= await contract.methods.voteA().send({from: account})
              .on("receipt", function(receipt) {
              
                let voteStatusForA = document.getElementById('voteStatusForA');
                voteStatusForA.innerHTML= `voting for party A has been done`;

                statusOfA();
              })
              .on("error", function(error) {
                
                let voteStatusForA = document.getElementById('voteStatusForA');
                voteStatusForA.innerHTML= `Something went wrong while voting`;
              })
            }
            else{
              setTimeout(()=>{
                votingOfA();
              },100)
            }
          }
          let voteb;
        
          async function votingOfB() {
            if(contract!==null){
              voteb= await contract.methods.voteB().send({from: account})
              .on("receipt", function(receipt) {
                
                let voteStatusForB = document.getElementById('voteStatusForB');
                voteStatusForB.innerHTML=`voting for party B has been done`;

                statusOfB();
              })
              .on("error", function(error) {
                  let voteStatusForB = document.getElementById('voteStatusForB');
                voteStatusForB.innerHTML= `Something went wrong while voting`;
              })
            }
            else{
              setTimeout(()=>{
                votingOfB();
              },100)
            }
          }
          let votec;
         
          async function votingOfC() {
            if(contract !== null){
              votec= await contract.methods.voteC().send({from: account})
              .on("receipt", function(receipt) {
                let voteStatusForC = document.getElementById('voteStatusForC');
                voteStatusForC.innerHTML = `voting for party C has been done`;

               try {
                statusOfC();
               } catch (error) {
                console.log(`can't update the counting of c in the valid place=> ${error}`);
               }
              })
              .on("error", function(error) {
                  console.log(`error from voting of c = ${error}`)
                let voteStatusForC = document.getElementById('voteStatusForC');
                voteStatusForC.innerHTML=  `Something went wrong while voting`;;
              })
            }
            else{
              setTimeout(()=>{
                votingOfC();
              },100)
            }
          }

          
          useEffect(()=>{
            console.log(result);
            let resultsOfVoting = document.getElementById('resultsOfVoting');
                resultsOfVoting.innerHTML = result;
    
  },[result]);
            let r;
          async function resultDeclaration() {
            r= await contract.methods.winner().call();
              setResult(r);
          }

          async function endOfVoting() {
           
            let buttonForA = document.getElementById('buttonForA');
            buttonForA.setAttribute("disabled", true);
            let buttonForB = document.getElementById('buttonForB');
            buttonForB.setAttribute("disabled", true);
            let buttonForC = document.getElementById('buttonForC');
            buttonForC.setAttribute("disabled", true);
          }

          useEffect(()=>{
            console.log(countA);
            let statusForA = document.getElementById('statusForA');
            statusForA.innerHTML = countA;
          },[countA])
            let vak;
          async function statusOfA() {
              vak = await contract.methods.a().call();
              console.log('a is called'+vak);
              console.log(`type of vak = ${typeof vak}`)
              setCountA(vak.toString());
          }

          
          useEffect(()=>{
            console.log("now i am in the status of b");
            console.log(countB);
            let statusForB = document.getElementById('statusForB');
            statusForB.innerHTML = countB;
          },[countB])
            let ky;
          async function statusOfB() {
              ky = await contract.methods.b().call();
              console.log('b is called'+vak);
              console.log(`type of ky = ${typeof ky}`)
              setCountB(ky.toString());
          }


          useEffect(()=>{// the useEffect of C is not working
            console.log(countOfC);
            let statusForC = document.getElementById('statusForC');
            statusForC.innerHTML = countOfC;
          },[countOfC])
            let konimal;
          async function statusOfC() {
            konimal = await contract.methods.c().call();
            // konimal = 'ab to update karo';
              console.log('c is called'+konimal);
              console.log(`type of konimal = ${typeof konimal}`)
              setCountOfC(konimal);
          }
          
          async function reset() {
            setCountA(0);
            setCountB(0);
            setCountOfC(0);
          }
          


  return(
      <>
      <div id="heading">creating an improved version of the voting in India</div>
      <div id="accountName"> Account: {account}</div>
      

      <div id="voteContainer">
        <div className="votingBallot">
        <h2 id="votingSectionOfA">A</h2>
        <p id="statusForA"></p>

        <button disabled={!contract}  id="buttonForA" className="votingButtons" onClick={()=> {
          votingOfA(); 
          }}>Vote</button>

        <p id="voteStatusForA"></p>
        </div>
        <div className="votingBallot">
        <h2 id="votingSectionOfB">B</h2>
        <p id="statusForB" ></p>
        <button disabled={!contract} id="buttonForB" className="votingButtons" onClick={()=> {
          votingOfB();

          }}>Vote</button>
       <p id="voteStatusForB"></p>
        </div>


        <div className="votingBallot">
        <h2 id="votingSectionOfC">C</h2>
        <p id="statusForC"> </p>
        <button disabled={!contract} id="buttonForC"  className="votingButtons" onClick={()=> {votingOfC();}}>Vote</button>
        <p id="voteStatusForC"></p>
        </div>
      </div>  

      <div id="endVoting"> <button onClick={()=>{ endOfVoting();}}>End Voting</button></div>
      <div id="showingResults">
      <div id="results"><button onClick={()=>{ 
        resultDeclaration();
        statusOfA();
        statusOfB();
        statusOfC();
        }}>Show Results</button></div>
      <div id="boxContainingResult"><p id="resultsOfVoting"></p></div>
      </div>
      
      </>

  )
  }
  export default App;
  // problem

  //1. why I the innerHTML is not working 
  //2. and findout the new error of metaMask
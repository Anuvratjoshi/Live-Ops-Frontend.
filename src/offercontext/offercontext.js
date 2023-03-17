// import { createContext, useState } from "react";

// const OfferContext = createContext();

// const OfferProvider = (props) =>{
//     const [offerData,setOfferdata] = useState([]);
//     const addOffer = (data)=>{
//         setOfferdata([...offerData,data])
//     }
//     return<OfferContext.Provider value={{offerData,addOffer}}>
//         {props.children}
//     </OfferContext.Provider>
// }

// export {OfferContext,OfferProvider}
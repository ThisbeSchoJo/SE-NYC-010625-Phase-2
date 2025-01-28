// import iceCreamData from "../data/iceCreamData"
import { iceCreamHeaderClassName, titleText, descriptionText } from "../data/iceCreamData";
// console.log(iceCreamHeaderClassName)
// console.log(titleText)
// console.log(descriptionText)

//first letter of a component should be capitalized (also how you recognize it as a component)
//components help make code DRYer (less repetitive)
function IceCreamShopHeader(){

    // const iceCreamHeaderClassName = "ice-cream-header"
    // const titleText = "Ice Cream Shop"
    // const descriptionText = "Welcome to the best ice cream shop in the world"

    // the opening tag needs to be on the same line as the return
    // If you put the ( ) by the return, then you can have the opening tag on the next line 
    return (
      <div className={iceCreamHeaderClassName}>
      <h1>{titleText}</h1>
      <h2>Hello {descriptionText} Goodbye</h2>
      </div>
    )
}


export default IceCreamShopHeader;
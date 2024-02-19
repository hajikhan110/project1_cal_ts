import inquirer from "inquirer"
const answer= await inquirer.prompt([
      
{
type:'number',
name:'num1',
message:'enter the 1st number:'



},
{
type: 'number',
name: 'num2',
message: 'enter the second number:'

},
{
type: 'list',
name:'op',
message: 'Select the operator you want to perform:',
choices:['Add','Subtract','Multiply','Divide']

}



]);


let result:number;
switch(answer.op){
case 'Add':
      result=answer.num1+answer.num2;
      console.log("the answer addition is" + result);
      break;
case 'Subtract':
        result=answer.num1 - answer.num2;
        console.log("the answer for subtraction is" + result);
        break;
case 'Multiply':
      result=answer.num1 * answer.num2;
      console.log("the answer mult is" + result);
      break;
case 'Divide':
      result=answer.num1 / answer.num2;
      console.log("the answer divide is" + result);
      break;              


}
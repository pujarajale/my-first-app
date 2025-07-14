function Hello(params) {
  let rollNo= 211;
  let fullName= "Puja Rajale";
  let designation =()=>{
  return 'Web UI Developer'
  }
  return <>
  <p>
     Role id:{rollNo}, IM {fullName}. My Designation is {designation()}
  </p>
 </>
}

export default Hello;
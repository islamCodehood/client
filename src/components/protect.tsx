function Protect({children}: any): JSX.Element{
return ( 
  <div>
  {true && children}
  </div>
 );
}

export default Protect;
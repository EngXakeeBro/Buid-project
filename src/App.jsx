function Cv(){
  let marks=[50,23,45];
  return(

    <>
    <h1>The grade sheet</h1>
    <ul>
      {
        marks.map((m,index)=><li key={index}>{m<=50 ? 'pass' : 'fail'}</li>)
      }
    </ul>
    </>
  )
}
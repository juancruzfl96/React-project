import React from 'react';
import { Spinner } from 'reactstrap';

const Loading = ({loading}) =>{

  return(
    <>
    {loading && <Spinner color="danger" style={{
      position: 'absolute',
      top: '50%',
      margin: '0 auto',
      left: '50%'
    }}/>}
    </>
  )
}

export default Loading;
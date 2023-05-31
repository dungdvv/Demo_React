import React, {useEffect} from 'react';


function withLogger(WrappedComponent){
  return function WithLogger(props){
    useEffect(()=>{
      console.log('Compomen is mounted');
      return () => {
        console.log('Component is unmounted')
      }
    },[])
  }

  return <WrappedComponent {...props} />;
}


function MyComponent(){
  return <div>Hello, World{props.name}</div>
}
const MyComponentWithLogger = withLogger(MyComponent)



function App(){
  return ( 
    <div>
      <MyComponentWithLogger name="helloworld"/>
    </div>
  )
}

export default App;
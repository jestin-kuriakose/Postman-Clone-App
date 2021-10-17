import { useRef, useState } from 'react';

import { getRequest } from './fetch';
import classes from './Home.module.css'

const Home = () => {
    const [isLoadingCompl, setIsLoadingCompl] = useState(false)
    const inputUrl = useRef()
    const inputMethod = useRef()
    const queryKey = useRef()
    const queryValue = useRef()
    const headerKey = useRef()
    const headerValue = useRef()

    const onSubmitHandler = () => {
        const enteredUrl = inputUrl.current.value
        const enteredMethod = inputMethod.current.value
        const enteredQueryKey = queryKey.current.value
        const enteredQueryValue = queryValue.current.value
        const enteredHeaderKey = headerKey.current.value
        const enteredHeaderValue = headerValue.current.value

        // console.log(enteredUrl)
        // console.log(enteredMethod)
        // console.log(enteredQueryKey)
        // console.log(enteredQueryValue)
        // console.log(enteredHeaderKey)
        // console.log(enteredHeaderValue)

        const request = {
            enteredUrl,
            enteredMethod,
            enteredQueryKey,
            enteredQueryValue,
            enteredHeaderKey,
            enteredHeaderValue
        }
        const response = getRequest(request)
        console.log(response)
        setIsLoadingCompl(true)
    }


  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
    <div className={classes.control}>
      <label>Enter your URL here</label>
      <input type="url" ref={inputUrl}></input>
    </div>
    <br/>

    <div className={classes.control}>
      <label for="method">Choose a method:</label>
      <select name="method" id="method" ref={inputMethod}>
        <option value="get">GET</option>
        <option value="post">POST</option>
        <option value="patch">PATCH</option>
        <option value="delete">DELETE</option>
      </select>
      </div>
      <br/>

      <div className={classes.control}>
      <div>
      <label><h2>Query Params</h2>Key</label>
      <input placeholder="Key" type="text" ref={queryKey}></input>
      <label>Value</label>
      <input placeholder="Value" type="text" ref={queryValue}></input>
      </div>
    </div>
    <br/>

    <div className={classes.control}>
      <div>
      <label><h2>Headers</h2>Key</label>
      <input placeholder="Key" type="text" ref={headerKey}></input>
      <label>Value</label>
      <input placeholder="Value" type="text" ref={headerValue}></input>
      </div>
    </div>
    <br/>

    <div className={classes.control}>
      <label><h2>Body</h2></label>
      <textarea id='comment' rows='5' placeholder="Enter the body here"></textarea>
    </div>

    <div className={classes.actions}>
        <button className='btn' >Send</button>
      </div>
    </form>
    
  );
};

export default Home;

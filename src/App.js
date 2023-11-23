import { useState } from "react";
import data from './data';

function App() {

  const[count, setCount] = useState(0);
  const [text, setText]= useState([]);
  const [charLimit, setCharLimit] = useState(140);

  const handleSymbit = (e) => {
    e.preventDefault();
    let amount = parseInt(count)
    if (count <= 0){
      amount = 1
    }
    if(count >3){
      amount = 3
    }
    setText(data.slice(0, amount).map((paragraph) => paragraph.slice(0, charLimit)));
  }

  const handleCharLimitChange = (e) => {
    setCharLimit(parseInt(e.target.value));
  }

  return (
    <div className="section-center">
      <h4>لورم ایپسوم ساز</h4>
      <form className="lorem0" onSubmit={handleSymbit}>
        <label htmlFor="total">تعداد پاراگراف</label>
        <input type="number" name="total" value={count} onChange={ (e)=> setCount(e.target.value) }/>
        <label htmlFor="charLimit">تعداد کاراکتر</label>
        <input type="number" id="charLimit" name="charLimit" value={charLimit} onChange={handleCharLimitChange}/>
        <button type="submit">ساختن</button>
      </form>
      <article className="lorem-text">
           {
           text.map((item,index)=> {
            return <p key ={index}>
              {item}
            </p>
           })
           }

      </article>

    </div>
  );
}

export default App;

export default function Hone({appCount, setCount}){
    return(
        <div>
            <h4>Home Component</h4>
            <p>Count here is : {appCount}</p>
            <button onClick={()=>setCount(appCount-1)}>Decrease Count</button>
        </div>
    );
}
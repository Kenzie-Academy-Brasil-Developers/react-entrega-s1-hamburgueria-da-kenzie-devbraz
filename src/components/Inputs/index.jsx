import './index.css'


function Inputs({classname, type, placeholder, value, onChange}) {

     return (
          <input className={classname} type={type} placeholder={placeholder} value={value} onChange={onChange}/> 
     )

}

export default Inputs
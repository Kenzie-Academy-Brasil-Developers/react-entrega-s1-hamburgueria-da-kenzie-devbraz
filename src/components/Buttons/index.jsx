import './index.css'


function Buttons({children, classname, onClick}) {

     return (
          <button className={classname} onClick={onClick} >{children}</button>
     )

}

export default Buttons
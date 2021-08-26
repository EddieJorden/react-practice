import image from '../Image/24h-2019-Porsche-Nr911-Foto-GruppeC-ADAC.jpeg' 

const Image = (props) => {
    
    
    
    
    return(
        <div>
            <img src={image} alt={props.altText}/>
        </div>
    )
}

export default Image
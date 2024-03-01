import {useState} from "react"

function Titulo({cor,imagem})
{
    const [texto,setTexto] = useState("Texto inicial")
    const [inputText, setInputText]= useState("")

    const urlImg= "https://s3.getstickerpack.com/storage/uploads/sticker-pack/tonton-friends-quan-ying-mu/tray_large.png?da99a2031dc22eb05689abae35c0baa1";
    function clicou()
    {
        setTexto(inputText);
    }

    return(
    <div>
        <h1 style={{color:cor}}> {texto} </h1> 
        <input value={inputText} onChange={(e)=>{setInputText(e.target.value)}} type="text" />
        <button onClick={clicou}>Trocar texto</button> 
        {
            imagem ? <img width={60} src={urlImg} /> : <img width={60} src="https://fcbk.su/_data/stickers/tonton_friends/tonton_friends_08.png" />
        } 
        
    </div>)
}

export default Titulo
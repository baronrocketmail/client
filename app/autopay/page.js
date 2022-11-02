import MenuLinks from "../(components)/MenuLinks";

export default function(){

    let menuLinksObjArray = [{name: "<------", url: "/"}, {name: "autopay: ", url: "/"}]

    return(
            <div>
                <MenuLinks objArray={menuLinksObjArray}/>
            </div>    
    )
}
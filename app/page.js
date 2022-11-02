import MenuLinks from "./(components)/MenuLinks";
import React from "react";


async function getName(){
    const info = await fetch("http://localhost:3000/api/name")
    return info.json()
}

async function getApplicationsOpen(){
    const applicationsOpen = await fetch("http://localhost:3000/api/applicationsOpen")
    return applicationsOpen.json()
}

async function getUnpaid(){
    const unpaid = await fetch("http://localhost:3000/api/unpaid")
    return unpaid.json()
}

export default async function Page(){

    const name = await getName()
    const applicationsOpen = await getApplicationsOpen()
    const unpaid = await getUnpaid()

    let MenuLinksObjArray = [{name: name, url: "/"}]

    if (applicationsOpen) {
        MenuLinksObjArray.push({name: "apply now", url:"/log"})
        MenuLinksObjArray.push({name: "view lease", url:"/viewlease"})
        MenuLinksObjArray.push({name: "..." ,url: "/explainer"})
    } else {
        MenuLinksObjArray.push({name: "autopay", url:"/autopay"})
        MenuLinksObjArray.push(...unpaid)
        MenuLinksObjArray.push({name: "...", url:"/log"})
    }

    return(
            <MenuLinks objArray = {MenuLinksObjArray}/>
    )
}
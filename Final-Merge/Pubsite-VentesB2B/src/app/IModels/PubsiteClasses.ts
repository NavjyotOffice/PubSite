enum NewsType{Featured, Trending} 
enum ResourceType{Whitepaper, Video, Infographics, blog}
enum EventType{Conference, OnDemand, Live}

interface IContaintDetails{
    ContentID:number;
    Title:string;
    Description:string;
    Keywords:string;
    Author:string;
    Image:string;
    URL:string;
    CompanyName:string;
    HideOnSite:boolean;
    CreatedDate:Date;
    UpdatedDate:Date;
}

interface INews{
    NewsID:number;
    NewsType:NewsType;
    NewsDate:Date;
    ContentDetail:IContaintDetails;
}

interface IResource{
    ResourcesID:number;
    ResourceFile:string;
    ContentDetail:IContaintDetails;
    ResourceType:string;
}

interface IEvent{
    EventID:number;
    StartDate:Date;
    EndDate:Date;
    ContentDetail:IContaintDetails;
    EventType:string;
    Address:IAddress;
}

interface IAddress{
    AddressID:number;
    DetailAddress:string;
    City:string
    State:string
    Country:string;
    ZipCode:string  
    Contact:IContact;
}

interface IContact{
    ContactID?:number;
    Email?:string;
    Phone?:string;
}

interface ICompany{
    CompanyID:number,
    CompanyName:string,
    Description:string,
    WebsiteURL:string,
    LogoImage:string,
    CreatedDate:Date,
    UpdatedDate:Date
}

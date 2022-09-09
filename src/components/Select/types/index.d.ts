interface ISelectProps {
    label?:string,
    placeholder?:string,
    options:any[],
    value:string,
    onChangeSelect:(option:any)=>void;
}

export { ISelectProps };
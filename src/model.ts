export interface Entity
{
    id : String;
}
export interface Foo extends Entity
{
    name: String;
    num: number;
}
export interface Bar extends Entity
{
    name: String;
    bar: boolean;
}

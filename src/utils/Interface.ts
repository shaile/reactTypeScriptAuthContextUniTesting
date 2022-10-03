export interface LOGINREQ {
    username: string;
    password : string
};

export interface LOGINRES {
    username: string;
    sub : string;
    firstName: string;
    lastName: string;
    access_token: string;
};
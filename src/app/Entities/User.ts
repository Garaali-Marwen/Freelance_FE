export class User {
    id: number = 0;
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    tel: string = '';
    password: string = '';
    image: any;
    role: string = 'ADMIN' || 'CLIENT' || 'DEVELOPER'
}

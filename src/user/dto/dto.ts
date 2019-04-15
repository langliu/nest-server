enum SEX { Man = '0', Woman = '1' }

export class LoginUserDto {
    readonly username: string;
    readonly password: string;
    readonly rember: boolean;
}

export class SearchUserDto {
    readonly id: string;
    readonly username: string;
}

export class CreateUserDto {
    readonly username: string;
    readonly password: string;
    readonly email: string;
    readonly phone: string;
    readonly age: number;
    readonly sex: SEX;
}
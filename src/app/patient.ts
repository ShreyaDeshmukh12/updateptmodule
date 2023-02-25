export class Patient {

    patientId: number;
    username: string;
    patientName: string;
    patientCity: string;
    patientAge: number;
    patientGender: string;
    patientDisease: string;
    patientPhoneNumber: string;
    patientBloodGroup: string;

    constructor(
        patientId: number,
        username: string,
        patientName: string,
        patientCity: string,
        patientAge: number,
        patientGender: string,
        patientDisease: string,
        patientPhoneNumber: string,
        patientBloodGroup: string,

    ) {
        this.patientId = patientId;
        this.username = username;
        this.patientName = patientName;
        this.patientCity = patientCity;
        this.patientAge = patientAge;
        this.patientGender = patientGender;
        this.patientDisease = patientDisease;
        this.patientPhoneNumber = patientPhoneNumber;
        this.patientBloodGroup = patientBloodGroup;

    }
}

